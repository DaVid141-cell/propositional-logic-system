import {BoxFrame} from "../components/ui/box-frame";
import { BoxHeader } from "../components/ui/box-header";
import { BoxMain } from "../components/ui/box-main";
import { BoxFooter } from "../components/ui/box-footer";
import { MainLayout } from "../components/layout/MainLayout";
import { BoxMainContentFirst } from "../components/ui/box-main-content";

export default function MainPage() {
  return (
    <MainLayout>

      <BoxFrame className="h-full justify-self-center">
        <BoxHeader title="InputForm.md" />
          <BoxMain className="pt-20">
            <BoxMainContentFirst/>
          </BoxMain>

          <BoxFooter/>
      </BoxFrame>

      <BoxFrame className="h-200 justify-self-center">
        <BoxHeader title="Truth Table" />
          <BoxMain>
            <div className="">
                        
            </div>
          </BoxMain>
      </BoxFrame>

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