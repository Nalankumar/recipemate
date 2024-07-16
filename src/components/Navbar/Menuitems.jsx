export default function Menuitems({isOpen}){
    return(
        <ul className={isOpen?"menu menu-vertical rounded-box w-56 md:navbar md:w-[70%] md:navbar-center":"hidden menu rounded-box w-56 md:block md:navbar"}>
            <li className="md:px-[5vw]"><a>Home</a></li>
            <li className="md:px-[5vw]"><a>Recipes</a></li>
            <li className="md:px-[5vw]">
                <button className="btn btn-primary w-fit">Log in</button>
            </li>
        </ul>
    )
    
}