import { BoxFrame } from "./ui/box-frame";
import { BoxHeader } from "./ui/box-header";
import { BoxMain } from "./ui/box-main";
import type { AnalyzeResult, SolveResult } from "./ui/box-main-content-input";
import { BoxMainContentOutput } from "./ui/box-main-content-output";

interface Props {
  analyzeDataOutput: AnalyzeResult | null;
  solveDataOutput: SolveResult | null;
}


export default function Output({analyzeDataOutput, solveDataOutput}: Props) {
    return (
        <BoxFrame className=" justify-self-center">
            <BoxHeader title="OutPut.md" />
                <BoxMain>
                 { analyzeDataOutput ? (
                    <BoxMainContentOutput analyzeData={analyzeDataOutput} solveData={solveDataOutput}/>
                 ) : (
                    <p>
                        No statement analyzed yet. Please enter a logical statement and click "Analyze" to see the truth table and analysis here.
                    </p>
                 )
                }
            </BoxMain>
        </BoxFrame>
    )
}