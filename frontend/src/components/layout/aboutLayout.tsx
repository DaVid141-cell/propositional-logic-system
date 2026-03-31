import { Navbar } from "../ui/Navbar";

export function AboutLayout ({children} : { children: React.ReactNode }) {
    return (
        <>
            <Navbar/>
            <div className="flex flex-col mx-80 my-15 gap-10 items-center">
                {children}
            </div>
        </>
    )
}