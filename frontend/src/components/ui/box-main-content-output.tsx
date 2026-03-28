import type { AnalyzeResult, SolveResult } from "./box-main-content-input";

interface Props {
    analyzeData: AnalyzeResult;
    solveData: SolveResult | null;
}

export function BoxMainContentOutput({ analyzeData, solveData} : Props) {
        const header = [...analyzeData?.variables || [], "Result"];

    return (
        <div className="p-4 space-y-6 font-mono text-sm">

      {/* Truth Table */}
      <div>
        <p className="font-bold mb-2">Truth Table:</p>
        <table className="border-collapse">
          <thead>
            <tr>
              {header.map((h) => (
                <th key={h} className="border border-red-500 px-3 py-1">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {analyzeData.truth_table.map((row, i) => (
              <tr key={i}>
                {header.map((h) => (
                  <td key={h} className="border border-red-500 px-3 py-1 text-center">
                    {row.values[h]}
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
            <p className="opacity-70">
              {analyzeData.expression} = {solveData.result}
            </p>
            
            {/*Anlysis */}
            <p className="mt-3 opacity-60">Analysis: {analyzeData.analysis}</p>
          
          </div>
        </>
      )}

    </div>
    )
}