import { clubs } from "../data/clubData";

export default function sortingClubs(sortBy){
    // console.log(sortBy);
    // console.log(clubs);
    const sorted = [...clubs];

    if(sortBy.includes(`az`)){
        for(let i = 0; i<sorted.length;i++){
            for(let j = i+1; j<sorted.length;j++){
                if(sorted[i].id > sorted[j].id){
                    // console.log(`pindah`);
                    let temp = sorted[j];
                    sorted[j] = sorted[i];
                    sorted[i] = temp;
                }
            }
        }
        // console.log(`Hasil`,sorted);
    } else if(sortBy.includes(`za`)){
        for(let i = 0; i<sorted.length;i++){
            for(let j = i+1; j<sorted.length;j++){
                if(sorted[i].id < sorted[j].id){
                    // console.log(`pindah`);
                    let temp = sorted[j];
                    sorted[j] = sorted[i];
                    sorted[i] = temp;
                }
            }
        }
    }

    return sorted;
}