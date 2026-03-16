import { Navbar } from "../ui/Navbar";
import { PopUpArrow } from "../ui/Pop-up-arrow";

export function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar/>
                <div className="flex justify-center">
                    <PopUpArrow/>
                </div>
            <div className="bg-foreground px-10 grid grid-flow-col grid-row-2 gap-20">
                {children}
            </div>
        </>
    )
}