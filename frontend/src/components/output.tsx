import { BoxFrame } from "./ui/box-frame";
import { BoxHeader } from "./ui/box-header";
import { BoxMain } from "./ui/box-main";
import type { AnalyzeResult } from "./ui/box-main-content-input";

export default function Output({analyzeData}: { analyzeData: AnalyzeResult | null }) {
    return (
        <BoxFrame className="h-200 justify-self-center">
            <BoxHeader title="Truth Table" />
                <BoxMain>
                   {analyzeData ? (
                    <p className="p-4 text-sm font-mono">Ready to render results...</p>
                  ) : (
                    <p className="p-4 text-sm opacity-40">
                      Results will appear here after you submit.
                    </p>
                  )}
            </BoxMain>
        </BoxFrame>
    )
}