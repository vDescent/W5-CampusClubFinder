import { useNavigate } from "react-router"

export default function NotFound(){
    const navigate = useNavigate();

    const handleGoHome = () =>{
        navigate('/');
    }

    return(
        <div className="min-h-screen flex flex-col items-center justify-center pb-5">
            <h1 className="text-2xl">Sorry</h1>
            <p>Page that you looking for is not found :(</p>
            <button onClick={handleGoHome} className="bg-amber-500 p-4 rounded-2xl my-2 hover:bg-black hover:text-white hover:cursor-pointer">Back to home</button>
        </div>
    )
}