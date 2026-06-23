import { useParams } from "react-router"
import searchingClubs from "../services/findClubById";

export default function ClubDetail(){
    const { clubId } = useParams();
    const displayedClub = searchingClubs(clubId);

    console.log(displayedClub);

    return(
        <div className="min-h-screen p-10">
            {/* <img src="" alt="Club Photos"/> */}
            <h1>Club Detail</h1>
            <h2>ClubID: {clubId}</h2>
            <h3>{displayedClub.id}</h3>
        </div>
    )
}