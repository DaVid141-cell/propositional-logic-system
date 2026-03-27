import {BoxFrame} from "../components/ui/box-frame";
import { BoxHeader } from "../components/ui/box-header";
import { BoxMain } from "../components/ui/box-main";
import { BoxFooter } from "../components/ui/box-footer";
import { MainLayout } from "../components/layout/MainLayout";
import type { SolveResult, AnalyzeResult } from "../components/ui/box-main-content-input";
import InputForm from "../components/inputForm";
import { useState } from "react";
import Output from "../components/output";

export default function MainPage() {
  const [analyzeData, setAnalyzeData] = useState<AnalyzeResult | null>(null);
  const [solveData, setSolveData] = useState<SolveResult | null>(null);

  return (
    <MainLayout>

      <InputForm onAnalyze={setAnalyzeData} onSolve={setSolveData} />

      <Output analyzeData={analyzeData} />
      

      <BoxFrame className="row-span-4 h-320">
        <BoxHeader title="Notes.md" className=""/>
          <BoxMain className="h-full">
            <div className="bg-neutral-300 h-full flex items-center justify-center">
              TEXT
            </div>  
          </BoxMain> 
      </BoxFrame>

    </MainLayout>
  );
}