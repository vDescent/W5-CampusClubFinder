import { useState } from "react";
import { clubs } from "../data/clubData"
import { useNavigate } from "react-router";

export default function ClubList(){
    // console.log(clubs.length);
    const [viewMode, setViewMode] = useState("grid");
    const navigate = useNavigate();

    // for(let items of clubs){
    //     console.log(items);
    // }

    const handleSeeMore = (id)=>{
        // console.log(`clicked`);
        console.log(id)
        navigate(`/clubs/${id}`)

    }


    return(
        <div className="flex flex-col items-center min-h-screen gap-2 m-4">
            <h1 className="text-5xl font-bold">Club List</h1>
            <p className="text-xl">Here's club that available for you to join.</p>
            <div className="flex justify-center gap-2">
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

            <div className={viewMode === "grid" ? "grid grid-cols-3 gap-4 justify-center m-4" : "flex flex-col gap-4 max-w-xl mx-auto"}>
                {clubs.map((club) =>(
                    <div key={club.id} className="flex flex-col border p-6 gap-2 bg-[#FFE9C4] rounded-2xl">
                        {/* <h2 className="text-2xl">{viewMode === "grid" ? "Grid" : "List"} {club.name}</h2> */}
                        <h2 className="text-2xl font-bold">{club.name}</h2>
                        <p>{club.shortDescription}</p>
                        <img src={club.image} alt="Club photos" className="h-full rounded-2xl"/>
                        <button onClick={()=> handleSeeMore(club.id)} className="bg-amber-500 rounded-xl p-3 text-white hover:bg-black hover:cursor-pointer transition-colors duration-500 ease-in-out">See more</button>
                    </div>
                ))}
            </div>

        </div>
    )
}