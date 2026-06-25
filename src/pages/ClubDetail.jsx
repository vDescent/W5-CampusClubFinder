import { useParams } from "react-router"
import searchingClubs from "../services/findClubById";
import { useState } from "react";
import { isClubJoined, joinClub } from "../services/clubStorage";
// import { joinClub, isClubJoined } from "../services/clubStorage";

export default function ClubDetail(){
    const { clubId } = useParams();
    const displayedClub = searchingClubs(clubId);
    const [joined, setJoined] = useState( ()=> isClubJoined(clubId));
    const [showConfirm, setShowConfirm] = useState(false);

    // useEffect(()=>{
    //     setJoined(isClubJoined(clubId));
    // }, [clubId]);

    const handleJoinNow = ()=>{
        setShowConfirm(true);
        // console.log(`Joined`);
    }
    
    const confirmJoin = () =>{
        joinClub(clubId);
        setJoined(true);
        setShowConfirm(false);
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
                    <button onClick={handleJoinNow} disabled={joined} className="p-5 bg-amber-500 rounded-2xl w-full hover:bg-black hover:text-white hover:cursor-pointer transition-colors duration-300 ease-in-out disabled:bg-black disabled:text-amber-400 disabled:cursor-not-allowed">{joined ? "Already Joined" : "Join this club"}</button>
                    
                </div>
            </div>

            {showConfirm &&(
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                    <div className="bg-[#FFE9C4] p-10 rounded-2xl">
                        <h2 className="text-xl font-bold">Join {displayedClub.name}?</h2>
                        <p>Warning: after agreeing you cannot undo this decision</p>

                        <div className="flex gap-3 mt-4 justify-around">
                            <button onClick={confirmJoin} className="w-1/2 bg-green-500 text-white px-4 py-2 rounded-2xl hover:bg-green-700 hover:cursor-pointer">Yes</button>
                            <button onClick={()=> setShowConfirm(false)} className="w-1/2 bg-red-500 text-white px-4 py-2 rounded-2xl hover:bg-red-700 hover:cursor-pointer">Cancel</button>
                        </div>
                    </div>

                </div>
            )}
        </div>
    )
}