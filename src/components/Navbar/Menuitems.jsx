import Button from '../Button'

export default function Menuitems({isOpen}){
    return(
    <div className={isOpen?"flex flex-col lg:flex lg:flex-row lg:px-[5vw]":'hidden lg:flex lg:flex-row lg:px-[5vw]'}>
        <a className={isOpen?'py-[2vh] lg:px-[5vw]':'lg:flex lg:px-[5vw]'}>Recipes</a>
        <a className={isOpen?'py-[2vh] lg:px-[5vw]':'lg:flex lg:px-[5vw]'}>Home</a>
        <Button className={isOpen?'py-[2vh] lg:px-[5vw]':' lg:flex lg:px-[5vw]'} content="Log in"></Button>
    </div>
    )
    
}