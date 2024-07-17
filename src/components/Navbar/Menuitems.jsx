export default function Menuitems({isOpen}){
    return(
        <ul className={isOpen?"menu menu-vertical flex flex-col align-center justify-center rounded-box w-56 md:navbar md:w-[70%] md:navbar-center":"hidden menu rounded-box w-56 md:block md:navbar"}>
            <li className="menu-item md:px-[5vw]"><a href="/">Home</a></li>
            <li className="md:px-[5vw]"><a href="/recipes">Recipes</a></li>
            <li className="md:px-[5vw]">
                <button className="btn btn-primary w-fit">Log in</button>
            </li>
        </ul>
    )
}