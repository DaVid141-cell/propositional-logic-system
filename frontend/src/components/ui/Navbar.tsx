export function Navbar() {
  return (
    <nav className="p-4 flex justify-center">
        <div className="w-120 h-20 flex items-center justify-evenly rounded-full bg-white/25 backdrop-blur-md border border-white/30 shadow-lg">
            <img src="/weblogoF.png" alt="Logo" className="w-[240px]"/>
            <a href="../pages/about.tsx" className="font-bold">ABOUT</a>
        </div>
    </nav>
  );
}