import { useParams } from "react-router"
import searchingClubs from "../services/findClubById";
import { useEffect, useState } from "react";
import { isClubJoined, joinClub } from "../services/clubStorage";
// import { joinClub, isClubJoined } from "../services/clubStorage";

export default function ClubDetail(){
    const { clubId } = useParams();
    const displayedClub = searchingClubs(clubId);
    const [joined, setJoined] = useState( ()=> isClubJoined(clubId));

    // useEffect(()=>{
    //     setJoined(isClubJoined(clubId));
    // }, [clubId]);

    const handleJoinNow = ()=>{
        joinClub(clubId);
        setJoined(true);
        // console.log(`Joined`);
    }

    return(
        <div className="min-h-[calc(100vh-80px)] flex items-center">
            <div className="flex flex-row p-10 border-black border-2 m-8 rounded-2xl gap-4 bg-[#FFE9C4]
            max-lg:flex-col max-lg:items-center max-lg:mt-20">
                <img src={displayedClub.image} alt="Club Photos" className="rounded-2xl w-1/2 object-cover
                max-lg:h-1/2 max-lg:w-full"/>
                <div className="flex flex-col justify-between gap-4 mx-auto max-w-sm w-1/2
                max-lg:h-1/2 max-lg:max-w-xl max-lg:mx-0 max-lg:w-full">
                    <h1 className="text-4xl font-bold
                    max-lg:text-2xl max-md:text-xl">Club Information</h1>
                    <h2 className="text-2xl font-semibold
                    max-lg:text-xl max-md:text-lg">{displayedClub.name}</h2>
                    <p className="text-justify">{displayedClub.description}</p>

                    <h2 className="text-2xl font-semibold
                    max-lg:text-xl max-md:text-lg">Club Events</h2>
                    {displayedClub.events.map((event, index) =>(
                        <div>
                            <h3 className="text-xl font-semibold max-lg:text-lg max-md:text-base">Event {index+1}</h3>
                            <p className="">Event Name: {event.name}</p>
                            <p className="">Event Date: {event.date}</p>
                        </div>
                    ))}
                    <button onClick={handleJoinNow} disabled={joined} className="p-5 bg-amber-500 rounded-2xl w-full hover:bg-black hover:text-white hover:cursor-pointer transition-colors duration-300 ease-in-out">{joined ? "Already Joined" : "Join this club"}</button>
                    
                </div>
            </div>
        </div>
    )
}