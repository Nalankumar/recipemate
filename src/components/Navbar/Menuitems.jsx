import Button from '../Button'

export default function Menuitems({isOpen}){
    return(
<<<<<<< HEAD
    <div className={isOpen?"flex flex-col lg:flex lg:flex-row lg:px-[5vw]":'hidden lg:flex lg:flex-row lg:px-[5vw]'}>
        <a className={isOpen?'py-[2vh] lg:px-[5vw]':'lg:flex lg:px-[5vw]'}>Recipes</a>
        <a className={isOpen?'py-[2vh] lg:px-[5vw]':'lg:flex lg:px-[5vw]'}>Home</a>
        <Button className={isOpen?'py-[2vh] lg:px-[5vw]':' lg:flex lg:px-[5vw]'} content="Log in"></Button>
=======
    <div className={isOpen?"sm:flex sm:flex-col lg:flex lg:flex-row lg:px-[5vw]":'sm:hidden lg:flex lg:flex-row lg:px-[5vw]'}>
        <a className={isOpen?'sm:flex sm:py-[2vh] lg:px-[5vw]':'sm:hidden lg:flex lg:px-[5vw]'}>Recipes</a>
        <a className={isOpen?'sm:flex sm:py-[2vh] lg:px-[5vw]':'sm:hidden lg:flex lg:px-[5vw]'}>Home</a>
        <Button className={isOpen?'sm:flex sm:py-[2vh] lg:px-[5vw]':'sm:hidden lg:flex lg:px-[5vw]'} content="Log in"></Button>
>>>>>>> f964496087ede9d4a821654ed88865ba50668143
    </div>
    )
    
}