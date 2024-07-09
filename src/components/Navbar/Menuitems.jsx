import Button from '../Button'

export default function Menuitems({isOpen}){
    return(
    <div className={isOpen?"flex sm:flex-col lg:flex-row lg:px-[5vw]":'lg:flex lg:flex-row sm:hidden'}>
        <a className=" lg:px-[5vw]">Home</a>
        <a className='lg:px-[5vw]'>Recipes</a>
        <Button className='lg:px-[5vw]' content="Log in"></Button>
    </div>
    )
    
}