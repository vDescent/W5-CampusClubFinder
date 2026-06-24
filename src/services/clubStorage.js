const STORAGE_KEY = "joinedClubs";

export function getJoinedClubs(){
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

export function isClubJoined(clubId){
    return getJoinedClubs().includes(clubId);
}

export function joinClub(clubId){
    const clubs = getJoinedClubs();

    if(!clubs.includes(clubId)){
        clubs.push(clubId);

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(clubs)
        );
    }
}