import { useParams } from "react-router"

export default function ClubDetail(){
    const { clubId } = useParams();



    return(
        <div>
            <h1>Club Detail</h1>
            <h2>ClubID: {clubId}</h2>
        </div>
    )
}