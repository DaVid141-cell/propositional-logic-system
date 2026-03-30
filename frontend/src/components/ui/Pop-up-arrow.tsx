interface Props {
    open: boolean;
}
export function PopUpArrow({open}: Props) {
    return (
        <div className='flex w-20 h-20 justify-center-safe z-100'>
            <svg xmlns="http://www.w3.org/2000/svg" 
                width="84" 
                height="84" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="1.25" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                className={`transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
                >
                <path d="m7 6 5 5 5-5"/>
                <path d="m7 12 5 5 5-5"/>
                                
            </svg>
        </div>
        
    );
}