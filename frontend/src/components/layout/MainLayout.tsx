import { Guide } from "../guide";
import { Navbar } from "../ui/Navbar";

export function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar/>
                <div className="flex justify-center">
                    <Guide/>
                </div>
            <div className="bg-foreground px-10 grid grid-flow-col grid-row-2 gap-20">
                {children}
            </div>
        </>
    )
}