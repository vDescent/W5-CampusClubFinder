export default function About(){
    return(
        <div className="flex flex-col p-6 max-w-2xl mx-auto gap-2 min-h-screen bg-[#FFE9C4]">
            <h1 className="text-5xl">About</h1>
            <h2 className="text-4xl">What this app does ?</h2>
            <p>This app is simulate how club finder website run via localstorage. In this app user can explore club that available to user, so user can join the club.</p>
            <h2 className="text-3xl">What Tech stack used in this project ?</h2>
            <h3 className="text-xl">React and TailwindCss</h3>
            <p>This project using react for the frontend interfaces, and tailwind for the styling.</p>
            {/* <p>Explain what the app does and tech stack used.</p> */}
        </div>
    )
}