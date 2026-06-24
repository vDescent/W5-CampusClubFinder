import { useParams } from "react-router"
import searchingClubs from "../services/findClubById";

export default function ClubDetail(){
    const { clubId } = useParams();
    const displayedClub = searchingClubs(clubId);

    const handleJoinNow = ()=>{
        console.log(`Joined`);
    }

    return(
        <div className="flex p-10 border-black border-2 m-8 rounded-2xl gap-4">
            <img src={displayedClub.image} alt="Club Photos" className="rounded-2xl w-1/2 object-cover"/>
            <div className="flex flex-col gap-4 items-center justify-center mx-auto max-w-sm w-1/2">
                <h1 className="text-4xl font-bold">Club Information</h1>
                <h2 className="text-2xl font-semibold">{displayedClub.name}</h2>
                <p className="text-justify">{displayedClub.description}</p>

                <h1 className="text-4xl font-bold">Club Events</h1>
                {displayedClub.events.map((event) =>(
                    <div className="">
                        <p className="">Event Name: {event.name}</p>
                        <p className="">Event Date: {event.date}</p>
                    </div>
                ))}
                <button onClick={()=>handleJoinNow()} className="p-5 bg-amber-500 rounded-2xl hover:bg-black hover:text-white hover:cursor-pointer transition-colors duration-300 ease-in-out">Join this club</button>
                
            </div>
        </div>
    )
}