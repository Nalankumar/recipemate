import { useState } from 'react'
import Logo from './Logo'
import Hamburger from './Hamburger';
import Menuitems from './Menuitems'
export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className="fixed w-full flex justify-between items-center px-[3dvw] border border-b-[2px] lg:h-[80px] bg-navbarbg">
            <Logo />
            <div>
            <button className='sm:block lg:hidden' onClick={()=> setIsOpen(!isOpen)}>
                <Hamburger isOpen={isOpen}/>                
            </button>
            {
                    <Menuitems isOpen={isOpen}/>
            }
            </div>
        </nav>
    )
}