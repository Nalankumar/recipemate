import Button from '../Button'

export default function Menuitems({isOpen}){
    return(
    <div className={isOpen?"sm:flex sm:flex-col lg:flex lg:flex-row lg:px-[5vw]":'sm:hidden lg:flex lg:flex-row lg:px-[5vw]'}>
        <a className={isOpen?'sm:flex sm:py-[2vh] lg:px-[5vw]':'sm:hidden lg:flex lg:px-[5vw]'}>Recipes</a>
        <a className={isOpen?'sm:flex sm:py-[2vh] lg:px-[5vw]':'sm:hidden lg:flex lg:px-[5vw]'}>Home</a>
        <Button className={isOpen?'sm:flex sm:py-[2vh] lg:px-[5vw]':'sm:hidden lg:flex lg:px-[5vw]'} content="Log in"></Button>
    </div>
    )
    
}