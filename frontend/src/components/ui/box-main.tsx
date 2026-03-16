export function BoxMain({ children, className }: { children: React.ReactNode } & { className?: string }) {
    return (
        <div className={`pt-15 p-4 ${className}`}>
            {children}
        </div>
    )
}