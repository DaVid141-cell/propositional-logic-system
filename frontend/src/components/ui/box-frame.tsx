
export function BoxFrame({children, className="", style}: { children: React.ReactNode } & { className?: string } & { style?: React.CSSProperties }) {
    return (
        <div className={`w-150 rounded-xl backdrop-blur-md border shadow-lg ${className}`} style={style}>
            {children}    
        </div>
    );
}