
export function BoxFrame({children, className="", style}: { children: React.ReactNode } & { className?: string } & { style?: React.CSSProperties }) {
    return (
        <div className={`w-150 rounded-xl bg-accent/25 backdrop-blur-md border border-white/30 shadow-lg ${className}`} style={style}>
            {children}    
        </div>
    );
}