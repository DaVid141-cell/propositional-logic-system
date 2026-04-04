import { useRef, useState } from "react";
import { API_URL } from "../../lib/api";

export interface TruthTableRow {
    values: Record<string, boolean>;
}

export interface AnalyzeResult {
    truth_table: TruthTableRow[];
    expression: string;
    variables: string[];
    analysis: string;
}

export interface SolveResult {
    result: string;
    steps: string[];

}

interface Props {
    onAnalyze: (data: AnalyzeResult) => void;
    onSolve: (data: SolveResult) => void;

}



export function BoxMainContentInput({ onAnalyze, onSolve }: Props) {
    const [statement, setStatement] = useState("");
    const [p, setP] = useState("");
    const [q, setQ] = useState("");
    const [r, setR] = useState("");
    
    const [loadingAnalyze, setLoadingAnalyze] = useState(false);
    const [loadingSolve, setLoadingSolve] = useState(false);
    const [error, setError] = useState("");

    // for rate limiting on request so that it cant be spam
    const lastCallRef = useRef<number>(0);
    const DEBOUNCE_MS = 2000; // 2 seconds between calls


    const pulse = (val: string) => val === "" ? "animate-pulse" : "";

    const handleAnalyzeOnly = async (e: React.FormEvent) => {
        const now = Date.now();
        if (now - lastCallRef.current < DEBOUNCE_MS) return; // ignore if too soon
        lastCallRef.current = now;

        e.preventDefault();
        setError("");


        if (!statement.trim()) {
            setError("Please enter a logical statement.");
            return;
        }
        setLoadingAnalyze(true);
        try {
            const analyzeResponse = await fetch(`${API_URL}/api/analyze`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ expression: statement }),
            });
            if (!analyzeResponse.ok) throw new Error("Failed to analyze statement.");
            onAnalyze(await analyzeResponse.json());
        } catch (err: any) {
            setError(err.message || "Something went wrong, Please Try Again later.");
            } finally {
                setLoadingAnalyze(false);
            }
    }

    const handleSolveWithValues = async (e: React.FormEvent) => {
        const now = Date.now();
        if (now - lastCallRef.current < DEBOUNCE_MS) return; // ignore if too soon
        lastCallRef.current = now;

        e.preventDefault();
        setError("");

        if (!statement.trim().toLowerCase()) {
            setError("Please enter a logical statement.");
            return
        }
        
        if (p === "" && q === "" && r === "") {
            setError("Please enter at least one variable value.");
            return;
        }

        setLoadingSolve(true);
        try {
            const analyzeResponse = await fetch(`${API_URL}/api/analyze`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({expression: statement.toLowerCase()}),
            });
            if (!analyzeResponse.ok) throw new Error("Failed to analyze statement.");
            onAnalyze(await analyzeResponse.json());

            const hasValues = p != "" || q != "" || r != "";
            if (hasValues) {
                const values: Record<string, boolean> = {};
                if (p != "") values["p"] = p.toUpperCase() === "T";
                if (q != "") values["q"] = q.toUpperCase() === "T";
                if (r != "") values["r"] = r.toUpperCase() === "T";
                
                const solveResponse = await fetch(`${API_URL}/api/solve`, {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({expression: statement.toLowerCase(), values}),
                });
                if (!solveResponse.ok) {
                    const errData = await solveResponse.json();
                    throw new Error(errData.detail || "Failed to solve expression.");
                }
                onSolve(await solveResponse.json());
            }
        } catch (err: any) {
            setError(err.message || "Something went wrong, Please Try Again later.");
        } finally {
            setLoadingSolve(false);
        }
    };
    


    return (
        <div>
            <form>
                <div className="">
                    <label>C:\Logical\Statement{'>'} </label>
                    <span className={pulse(statement)}>{'[ '}</span>
                    <input className={`w-60 text-center bg-transparent outline-none ${pulse(statement)}`} 
                            value={statement} 
                            onChange={(e) => setStatement(e.target.value)}
                            placeholder=" Enter logical statement "/>
                    <span className={pulse(statement)}>{' ]'}</span>
                </div>
                
                <div className="mt-4">
                  <label className="">C:\Solve\Using\Given\Values{'>'} </label>
                  
                    <div className="">
                        
                        <div className=" ">
                            <label className="mr-2">├─C:\P{'>'} </label>
                            <span className={pulse(p)}>{'[ '}</span>
                                <select className={`bg-foreground text-center ${pulse(p)}`} value={p} onChange={(e) => setP(e.target.value)}>
                                    <option value="">Select</option>
                                    <option value="T">T</option>
                                    <option value="F">F</option>
                                </select>
                            <span className={pulse(p)}>{' ]'}</span>
                        </div>

                        <div className=""> 
                            <label className="mr-2">│ └─C:\Q{'>'} </label>
                            <span className={pulse(q)}>{'[  '}</span>
                                <select className={`bg-foreground text-center ${pulse(q)}`} value={q} onChange={(e) => setQ(e.target.value)}>
                                    <option value="">Select</option>
                                    <option value="T">T</option>
                                    <option value="F">F</option>
                                </select>
                            <span className={pulse(q)}>{'  ]'}</span>
                        </div>

                        <div className="">
                            <label className="mr-2">│    <span className="ml-4">└─C:\R{'>'}</span> </label>
                            <span className={pulse(r)}>{'[ '}</span>
                                <select className={`bg-foreground text-center ${pulse(r)}`} value={r} onChange={(e) => setR(e.target.value)}>
                                    <option value="">Select</option>
                                    <option value="T">T</option>
                                    <option value="F">F</option>
                                </select>
                            <span className={pulse(r)}>{' ]'}</span>
                        </div>

                    </div>
                </div>

                {error && <div className="mt-4 text-red-500">{error}</div>}

                <div className="flex h-10 mt-6 mr-8 justify-end">
                  <button 
                    className="p-2 btn-underline cursor-pointer" 
                    onClick={handleAnalyzeOnly}
                    type="button"
                    disabled={loadingAnalyze}

                    >
                    {loadingAnalyze ? "> Processing..." : "> Get Truth Table <"}
                  </button>

                  <button 
                    className="p-2 btn-underline cursor-pointer"
                    onClick={handleSolveWithValues} 
                    type="button"
                    disabled={loadingSolve}

                    >
                    {loadingSolve ? "> Processing..." : "> Solve with Values <"}
                  </button>
                </div>
          </form>  
        </div>
    );
}