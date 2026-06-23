import { clubs } from "../data/clubData";

export default function searchingClubs(searchTarget){
    // for(let items of clubs){
    //     if(items.id.includes(searchTarget)){
    //         return items;
    //     }
    // }

    return clubs.find(club => club.id === searchTarget);
}