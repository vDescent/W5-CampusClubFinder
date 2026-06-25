export default function About(){
    return(
        <div className="flex flex-col p-6 max-w-4xl mx-auto gap-2 min-h-screen">
            <h1 className="text-5xl self-center font-bold mb-5 max-lg:mt-20">About</h1>
            <h2 className="text-4xl font-semibold">What this app does ?</h2>
            <p className="text-xl">This app is simulate how club finder website run via localstorage. In this app user can explore club that available to user, so user can join the club.</p>
            <h2 className="text-4xl font-semibold">What Tech stack used in this project ?</h2>
            <h3 className="text-2xl">Vite, React, React Router and TailwindCss</h3>
            <p className="text-xl">This project using Vite for Setup & Bundling, React for the User Interface and state, React Router for navigation, and tailwind for the styling and handle responsivity.</p>
            {/* <p>Explain what the app does and tech stack used.</p> */}
        </div>
    )
}