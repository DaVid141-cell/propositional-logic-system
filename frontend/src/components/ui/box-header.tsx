export function BoxHeader({ title, className=""}: { title: string } & { className?: string }) {
    return (
        <div className={className}>
             <div className="flex w-full h-13 absolute top-0 border-b-2 border-white-500">
                <ul className="flex gap-2 mt-5 ml-4">
                    <li className="bg-red-600 w-3 h-3 rounded-full"></li>
                    <li className="bg-yellow-600 w-3 h-3 rounded-full"></li>
                    <li className="bg-green-600 w-3 h-3 rounded-full"></li>
                </ul>
                    <p className="ml-auto mt-4 mr-4">{title}</p>
            </div>
        </div>
           
    )
}