import { Link, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="p-5 mb-5 shadow-lg shadow-black rounded-b-xl flex">
        <div className="group">
            <p className="text-5xl text-white logo p-2">Blig-b00k</p>
            <div className="bg-white h-1 scale-0 group-hover:scale-100 transition-transform"></div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
