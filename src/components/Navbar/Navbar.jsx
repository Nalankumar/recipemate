import { useState } from 'react'
import Logo from './Logo'
import Hamburger from './Hamburger';
import Menuitems from './Menuitems'
export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className="w-full flex justify-between align-middle px-[3dvw] border-b-silver-200 lg:h-[80px]">
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