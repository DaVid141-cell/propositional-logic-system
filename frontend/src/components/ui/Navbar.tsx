import { NavLink } from "react-router-dom";

export function Navbar() {

 
  return (
    <nav className="p-4 flex justify-center sticky top-0 z-50 ">
        <div className="w-120 h-20 flex items-center justify-evenly rounded-full bg-white/25 backdrop-blur-md border border-white/30 shadow-lg">
            <NavLink to="/" end>
              {({ isActive }) => (
                <img 
                  src="/weblogoF.png" 
                  alt="Logo" 
                  className={`w-[240px] ${isActive ? "opacity-100" : "opacity-70"}`}
                />
              )}
            </NavLink>

            <NavLink 
              to="/about"
              className={({ isActive }) =>
                `text-foreground font-bold transition btn-underline  ${
                  isActive ? "active" : "text-foreground"
                }`
              }
            >
              ABOUT
            </NavLink>
        </div>
    </nav>
  );
}