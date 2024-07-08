import Logo from './Logo'
import Login from './Login'
export default function Navbar(){
    return(
        <nav className="w-full flex justify-between px-[3dvw] align-middle border-b-2">
            <Logo />
            <Login />
        </nav>
    )
}