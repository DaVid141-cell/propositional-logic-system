import { BoxFooter } from "./ui/box-footer";
import { BoxFrame } from "./ui/box-frame";
import { BoxHeader } from "./ui/box-header";
import { BoxMain } from "./ui/box-main";
import { BoxMainContentInput, type AnalyzeResult, type SolveResult } from "./ui/box-main-content-input";

interface Props {
    onAnalyze: (data: AnalyzeResult) => void;
    onSolve: (data: SolveResult) => void;
    
}
export default function InputForm({onAnalyze, onSolve}: Props) {

    
    return (
        <BoxFrame className="h-full justify-self-center">
            <BoxHeader title="InputForm.md" />
                <BoxMain className="pt-20">
                    <BoxMainContentInput onAnalyze={onAnalyze} onSolve={onSolve} />
                </BoxMain>
        
            <BoxFooter/>
        </BoxFrame>
    )
}