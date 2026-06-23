import { useNavigate } from "react-router"

export default function Home(){
    const navigate = useNavigate();

    const handleGoClub = () =>{
        navigate('/clubs');
    }

    return(
        <div className="relative w-full min-h-screen bg-cover overflow-hidden p-2" style={{backgroundImage: `url('/img/05_art.jpg')`}}>
            <div className="absolute inset-0 bg-black/30 z-0"></div>
            {/* flex flex-col justify-center h-screen px-20 */}

            <div className="relative z-10 flex flex-col justify-center items-start h-screen px-20">
                <h1 className="text-white text-6xl my-5">Join your <span className="text-amber-600">dream</span> club</h1>
                <h2 className="text-white text-2xl">Join and Contribute with community</h2>
                <button onClick={handleGoClub} className="p-5 text-black hover:cursor-pointer bg-white my-2 rounded-3xl hover:text-white hover:bg-amber-600">Join Now</button>
            </div>

        </div>
    )
}