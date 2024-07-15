import Button from '../Button'

export default function Menuitems({isOpen}){
    return(
        <ul className={isOpen?"menu menu-vertical bg-base-200 rounded-box w-56  md:px-[5vw] md:menu-horizontal":"hidden menu bg-base-200 rounded-box w-56 md:px-[5vw] menu-horizontal md:menu-vertical"}>
                <li><a>Home</a></li>
                <li><a>Recipes</a></li>
                <li><Button content="Log in"></Button></li>
            </ul>
    // <div className={isOpen?"flex flex-col md:flex md:flex-row md:px-[5vw]":'hidden md:flex md:flex-row md:px-[5vw]'}>
    //     <a className={isOpen?'py-[2vh] md:px-[5vw]':'md:flex md:px-[5vw]'}>Recipes</a>
    //     <a className={isOpen?'py-[2vh] md:px-[5vw]':'md:flex md:px-[5vw]'}>Home</a>
    //     <Button className={isOpen?'py-[2vh] md:px-[5vw]':' md:flex md:px-[5vw]'} content="Log in"></Button>
    // </div>
    )
    
}