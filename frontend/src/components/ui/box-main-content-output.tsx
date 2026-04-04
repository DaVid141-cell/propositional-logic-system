import type { AnalyzeResult, SolveResult, TruthTableRow } from "./box-main-content-input";

interface Props {
    analyzeData: AnalyzeResult;
    solveData: SolveResult | null;
}



export function BoxMainContentOutput({ analyzeData, solveData} : Props) {
        const header = [...analyzeData?.variables || [], "Result"];

    return (
      <div className="p-4 space-y-6 text-base">

        {/* Truth Table */}
        <div>
          <p className="font-bold mb-2">Truth Table:</p>
          <table className="border-collapse">
            <thead>
              <tr>
                {header.map((h) => (
                  <th key={h} className="border-b border-r last:border-r-0 px-3 py-1">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {analyzeData.truth_table.map((row: TruthTableRow, i: number) => (
                <tr className="border-b last:border-b-0  hover:bg-neutral-700 transition-colors" key={i}>
                  {header.map((h) => (
                    <td key={h} className="border-r last:border-r-0  px-3 py-1 text-center">
                      <span className={row.values[h] === "T" ? "text-green-400" : "text-red-500"}>
                          {row.values[h]}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>

        {/* Steps — only shows if user gave p/q/r values */}
        {solveData && (
          <>
            <div>
              <p className="font-bold mb-2">Step by step Evaluation:</p>
              <div className="space-y-1">
                {solveData.steps.map((step, i) => (
                  <p key={i} className="opacity-70">{step}</p>
                ))}
              </div>
            </div>

            <div>
              <p className="font-bold mb-2">Final result of the given statement:</p>
              <p className="opacity-80">
                {analyzeData.expression} = {solveData.result}
              </p>
              
              {/*Anlysis */}
              <p className="mt-3 text-base">Analysis: 
                <span className="text-red-500 font-bold"> {analyzeData.analysis}</span>
              </p>
            
            </div>
          </>
        )}
    </div>
    )
}