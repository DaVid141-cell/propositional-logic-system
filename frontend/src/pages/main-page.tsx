
import { MainLayout } from "../components/layout/MainLayout";
import type { SolveResult, AnalyzeResult } from "../components/ui/box-main-content-input";
import InputForm from "../components/inputForm";
import { useState } from "react";
import Output from "../components/output";
import { Notes } from "../components/notes";

export default function MainPage() {
  const [analyzeData, setAnalyzeData] = useState<AnalyzeResult | null>(null);
  const [solveData, setSolveData] = useState<SolveResult | null>(null);

  return (
    <MainLayout>

      <InputForm onAnalyze={setAnalyzeData} onSolve={setSolveData} />

      <Output analyzeDataOutput={analyzeData} solveDataOutput={solveData} />
      
      <Notes/>
      

    </MainLayout>
  );
}