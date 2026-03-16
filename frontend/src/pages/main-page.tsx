import {BoxFrame} from "../components/ui/box-frame";
import { BoxHeader } from "../components/ui/box-header";
import { BoxMain } from "../components/ui/box-main";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { BoxFooter } from "../components/ui/box-footer";
import { MainLayout } from "../components/layout/MainLayout";

export default function MainPage() {
  return (
    <MainLayout>

      <BoxFrame className="h-full justify-self-center">
        <BoxHeader title="InputForm.md" />
          <BoxMain className="pt-20">
            <div className="">
              <form>
                <div>
                  <label>Enter Logical Statement: </label>
                  <Input placeholder="Type something..." className="ml-2 w-80" />
                </div>
                
                <div className="mt-4">
                  <label className="">Solve Using Given Values: </label>
                  
                  <div className="flex flex-col gap-2 mt-2">
                    <div>
                      <label className="mr-2">P: </label>
                      <Input placeholder="Type something..." className="w-50" />
                    </div>

                    <div> 
                      <label className="mr-2">Q: </label>
                      <Input placeholder="Type something..." className="w-50" />
                    </div>

                    <div>
                      <label className="mr-2">R: </label>
                      <Input placeholder="Type something..." className="w-50" />
                    </div>
                  </div>
                </div>

                <div className="flex h-10 mt-6 justify-end w-full">
                  <Button>Submit</Button>
                </div>
              </form>  
            </div>
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