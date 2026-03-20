import { useState } from "react";

export function BoxMainContentFirst() {
    const [statement, setStatement] = useState("");
    const [p, setP] = useState("");
    const [q, setQ] = useState("");
    const [r, setR] = useState("");

    const pulse = (val: string) => val === "" ? "animate-pulse" : "";

    return (
        <div className="">
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
                                <input className={`w-28 text-center bg-transparent outline-none ${pulse(p)}`}
                                    value={p} 
                                    onChange={(e) => setP(e.target.value)}
                                    placeholder=" Enter T/F "/>
                            <span className={pulse(p)}>{' ]'}</span>
                        </div>

                        <div className=""> 
                            <label className="mr-2">│ └─C:\Q{'>'} </label>
                            <span className={pulse(q)}>{'[  '}</span>
                                <input className={`w-28 text-center bg-transparent outline-none ${pulse(q)}`}
                                    value={q} 
                                    onChange={(e) => setQ(e.target.value)}
                                    placeholder=" Enter T/F "/>
                            <span className={pulse(q)}>{'  ]'}</span>
                        </div>

                        <div className="">
                            <label className="mr-2">│    <span className="ml-4">└─C:\R{'>'}</span> </label>
                            <span className={pulse(r)}>{'[ '}</span>
                                <input className={`w-28 text-center bg-transparent outline-none ${pulse(r)}`} 
                                        placeholder="Enter T/F" 
                                        value={r} 
                                        onChange={(e) => setR(e.target.value)}/>
                            <span className={pulse(r)}>{' ]'}</span>
                        </div>

                    </div>
                </div>

                <div className="flex h-10 mt-6 mr-8 justify-end">
                  <button className="p-2 btn-underline cursor-pointer" type="submit">
                    {'>'}{'> '}Submit
                  </button>
                </div>
          </form>  
        </div>
    );
}