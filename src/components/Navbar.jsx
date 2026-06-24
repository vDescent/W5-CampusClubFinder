import { useState } from "react";
import { NavLink, useLocation } from "react-router"

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navClass = ({ isActive }) =>
        `text-2xl
        ${isActive ? "p-3 rounded-2xl bg-white" : "p-3 hover:bg-white rounded-2xl transition"}`;
    return(
        
        // <nav className="flex-1 w-full bg-red-500 h-full justify-between">
        // <nav className="flex w-full h-full p-6 bg-amber-500 justify-center sticky top-0 z-50 max-lg:">
        <nav className="sticky top-0 z-50">
            {/* Desktop Ver */}
            <div className="flex w-full h-full p-6 bg-amber-500 justify-center sticky top-0 z-50 max-lg:hidden">
                <h1 className="flex text-xl w-1/2">Club Finder</h1>
                <ul className="flex w-1/2 justify-between mx-20 text-lg">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "p-3 border-amber-700 rounded-2xl bg-white" : "text-black p-3 hover:bg-white hover:cursor-pointer rounded-2xl transition-colors duration-600 ease-in-out"}>Home</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/clubs" className={({isActive}) => isActive ? "p-3 border-amber-700 rounded-2xl bg-white" : "text-black p-3 hover:bg-white hover:cursor-pointer rounded-2xl transition-colors duration-600"}>Clubs</NavLink>
                    </li>

                    <li>
                        <NavLink to="/about" className={({isActive}) => isActive ? "p-3 border-amber-700 rounded-2xl bg-white" : "text-black p-3 hover:bg-white hover:cursor-pointer rounded-2xl transition-colors duration-600"}>About</NavLink>
                    </li>
                </ul>
            </div>

            {/* Mobile ver */}
            {location.pathname === "/" &&(
                <div className="lg:hidden fixed top-0 left-0 w-full flex m-5">
                    <button className="lg:hidden text-4xl" onClick={() => setIsOpen(!isOpen)}>☰</button>
                </div>
            )}

            {location.pathname !== "/" &&(
                <div className="lg:hidden h-20 m-5 fixed">
                    <button className="lg:hidden text-4xl" onClick={() => setIsOpen(!isOpen)}>☰</button>
                </div>
            )}
            <div className={`lg:hidden flex items-center justify-center overflow-hidden transition-all duration-300 fixed p-6 h-screen w-64 bg-amber-500 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="lg:hidden text-4xl absolute top-0 left-0 m-5" onClick={() => setIsOpen(!isOpen)}>☰</button>
                <ul className="flex flex-col px-6 pb-4 gap-20">

                    <li>
                        <NavLink to="/" className={navClass} onClick={() => setIsOpen(false)}>Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/clubs" className={navClass} onClick={() => setIsOpen(false)}>Clubs</NavLink>
                    </li>

                    <li>
                        <NavLink to="/about" className={navClass} onClick={() => setIsOpen(false)}>About</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}