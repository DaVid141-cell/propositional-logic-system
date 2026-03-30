import { BoxFrame } from "./ui/box-frame";
import { BoxHeader } from "./ui/box-header";
import { BoxMain } from "./ui/box-main";
import { BoxMainContetntNotes } from "./ui/box-main-content-notes";

export function Notes () {
    return (
        <BoxFrame className="row-span-4 mb-40 justify-self-center">
        <BoxHeader title="Notes.md" className=""/>
          <BoxMain className="h-full">
            <BoxMainContetntNotes/>
          </BoxMain> 
      </BoxFrame>
    )
}