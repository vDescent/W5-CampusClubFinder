import { NavLink } from "react-router"

export default function Navbar(){
    return(
        // <nav className="flex-1 w-full bg-red-500 h-full justify-between">
        <nav className="flex w-full h-full p-6 bg-amber-500 justify-center">
            <h1 className="flex text-xl w-1/2">Club Finder</h1>
            <ul className="flex w-1/2 justify-between mx-20 text-lg">
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "p-3 border-amber-700 rounded-2xl bg-amber-700" : "text-black p-3"}>Home</NavLink>
                </li>
                
                <li>
                    <NavLink to="/clubs" className={({isActive}) => isActive ? "p-3 border-amber-700 rounded-2xl bg-amber-700" : "text-black p-3"}>Clubs</NavLink>
                </li>

                <li>
                    <NavLink to="/about" className={({isActive}) => isActive ? "p-3 border-amber-700 rounded-2xl bg-amber-700" : "text-black p-3"}>About</NavLink>
                </li>
                    
            </ul>
        </nav>
    )
}