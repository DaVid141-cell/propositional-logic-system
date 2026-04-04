import { useState } from "react";
import { GuideContent } from "./ui/guide-content";
import { PopUpArrow } from "./ui/Pop-up-arrow";
import { Popover, PopoverContent, PopoverHeader, PopoverTitle, PopoverTrigger } from "./ui/popover";

export function Guide () {
    const [open, setOpen] = useState(false);
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <button className="cursor-pointer bg-transparent border-none p-0">
                    <PopUpArrow open={open}/>
                </button>
            </PopoverTrigger>
            
            <PopoverContent className="w-200 bg-accent-foreground text-background">
                <PopoverHeader>
                <PopoverTitle>
                    Guides about the Propositional logic and Truth Table Calculation
                    <span className="text-red-500"><br/>Please read carefully with the Accordion details below. </span>

                </PopoverTitle>
                </PopoverHeader>
                <GuideContent/>
            </PopoverContent>

        </Popover>
    )
}