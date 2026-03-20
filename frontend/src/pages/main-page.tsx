import {BoxFrame} from "../components/ui/box-frame";
import { BoxHeader } from "../components/ui/box-header";
import { BoxMain } from "../components/ui/box-main";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { BoxFooter } from "../components/ui/box-footer";
import { MainLayout } from "../components/layout/MainLayout";
import { InputStyle } from "../components/ui/input-sytle";

export default function MainPage() {
  return (
    <MainLayout>

      <BoxFrame className="h-full justify-self-center">
        <BoxHeader title="InputForm.md" />
          <BoxMain className="pt-20">
            <div className="">
              <form>
                <div className="">
                  <label>C:\Logical\Statement{'>'} </label>
                   <span className="animate-pulse">{'[ '}</span>
                      <input className="w-60 text-center animate-pulse bg-transparent outline-none" placeholder=" Enter logical statement "/>
                    <span className="animate-pulse">{' ]'}</span>
                </div>
                
                <div className="mt-4">
                  <label className="">C:\Solve\Using\Given\Values{'>'} </label>
                  
                  <div className="">
                    
                    <div className=" ">
                      <label className="mr-2">├─C:\P{'>'} </label>
                        <span className="animate-pulse">{'[ '}</span>
                          <input className="w-28 text-center animate-pulse bg-transparent outline-none" placeholder=" Enter T/F "/>
                        <span className="animate-pulse">{' ]'}</span>
                    </div>

                    <div className=""> 
                      <label className="mr-2">│ └─C:\Q{'>'} </label>
                      <span className="animate-pulse">{'[  '}</span>
                          <input className="w-28 text-center animate-pulse bg-transparent outline-none" placeholder=" Enter T/F "/>
                        <span className="animate-pulse">{'  ]'}</span>
                    </div>

                    <div className="">
                      <label className="mr-2">│    <span className="ml-4">└─C:\R{'>'}</span> </label>
                      <span className="animate-pulse">{'[ '}</span>
                        <input className="w-28 text-center animate-pulse bg-transparent outline-none" placeholder="Enter T/F"/>
                      <span className="animate-pulse">{' ]'}</span>
                          
                        
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