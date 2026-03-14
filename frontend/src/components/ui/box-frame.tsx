export function BoxFrame({children, title}) {
    return (
        
        <div className=" relative w-[450px] h-100 justify-self-center rounded-xl bg-accent/25 backdrop-blur-md border border-white/30 shadow-lg">
            <div className=" w-[450px] h-10 absolute top-0 border-b-2 border-white-500">
                <div className="flex ml-2">
                    <ul className="flex gap-2 mt-3 ">
                        <li className="bg-red-600 w-3 h-3 rounded-full"></li>
                        <li className="bg-yellow-600 w-3 h-3 rounded-full"></li>
                        <li className="bg-green-600 w-3 h-3 rounded-full"></li>
                    </ul>
                    <p className="ml-auto mt-2">{title}</p>
                </div>
            </div>

            <div className=" w-[450px] h-80 absolute top-10">
                {children}
            </div>

            <div className=" w-[450px] h-10 absolute bottom-0 border-t-2 border-white-500">
                <div className="flex ml-4 mr-4">
                    <p className="mt-2">2026-03-10</p>

                    
                </div>
            </div>
        </div>
    );
}