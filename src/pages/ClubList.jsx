import { useState } from "react";
import { clubs } from "../data/clubData"

export default function ClubList(){
    // console.log(clubs.length);
    const [viewMode, setViewMode] = useState("grid");

    for(let items of clubs){
        console.log(items);
    }


    return(
        <div className="h-screen">
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

            {/* Ketika GRID */}

            <div className={viewMode === "grid" ? "grid grid-cols-3 gap-4 justify-center m-4" : "flex flex-col gap-2 m-4"}>
                {clubs.map((club) =>(
                    <div key={club.id} className="border p-2">
                        <h2 className="text-2xl">{viewMode === "grid" ? "Grid" : "List"} {club.name}</h2>
                        <p>{club.shortDescription}</p>
                        <img src={club.image} alt=""/>
                        {/* <p>{}</p> */}
                    </div>
                ))}
            </div>

            {/* KETIKA  List
            <div>
                {clubs.map((club) =>(
                    <div key={club.id} className="border p-2">
                        <h2>LIST {club.name}</h2>
                    </div>
                ))}
            </div> */}
            
        </div>
    )
}