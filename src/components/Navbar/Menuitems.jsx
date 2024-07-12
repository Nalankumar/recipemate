import Button from '../Button'

export default function Menuitems({isOpen}){
    return(
    <div className={isOpen?"flex flex-col md:flex md:flex-row md:px-[5vw]":'hidden md:flex md:flex-row md:px-[5vw]'}>
        <a className={isOpen?'py-[2vh] md:px-[5vw]':'md:flex md:px-[5vw]'}>Recipes</a>
        <a className={isOpen?'py-[2vh] md:px-[5vw]':'md:flex md:px-[5vw]'}>Home</a>
        <Button className={isOpen?'py-[2vh] md:px-[5vw]':' md:flex md:px-[5vw]'} content="Log in"></Button>
    </div>
    )
    
}