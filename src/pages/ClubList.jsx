import { useState } from "react";
import { clubs } from "../data/clubData"

export default function ClubList(){
    // console.log(clubs.length);
    const [viewMode, setViewMode] = useState("grid");

    for(let items of clubs){
        console.log(items);
    }


    return(
        <div className="min-h-screen">
            <div className="flex justify-center gap-2 my-2">
                <h1>Sortby</h1>
                <select name="" id="">
                    <option value="">Name A-Z</option>
                    <option value="">Name Z-A</option>
                </select>
                <h1>Mode</h1>
                <select name="" id="" value={viewMode} onChange={(e) => setViewMode(e.target.value)}>
                    <option value="grid">Grid</option>
                    <option value="list">List</option>
                </select>
            </div>

            {/* Ketika GRID */}

            <div className={viewMode === "grid" ? "grid grid-cols-3 gap-4 justify-center m-4" : "flex flex-col gap-2 max-w-xl mx-auto"}>
                {clubs.map((club) =>(
                    <div key={club.id} className="flex flex-col border p-6 gap-2 bg-[#FFE9C4] rounded-2xl">
                        {/* <h2 className="text-2xl">{viewMode === "grid" ? "Grid" : "List"} {club.name}</h2> */}
                        <h2 className="text-2xl font-bold">{club.name}</h2>
                        <p>{club.shortDescription}</p>
                        <img src={club.image} alt="Club photos" className="h-full rounded-2xl"/>
                        <button className="bg-amber-500 rounded-xl p-3 text-white hover:bg-black hover:cursor-pointer transition-colors duration-500 ease-in-out">See more</button>
                        {/* <p>{}</p> */}
                    </div>
                ))}
            </div>

        </div>
    )
}