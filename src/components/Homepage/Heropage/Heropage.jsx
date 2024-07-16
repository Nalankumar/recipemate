import Image from "./Image";
import image from '../../../assets/curry_rice.jpg'

export default function Secondarypage(){
    return(
        <div className='flex flex-col justify-evenly items-center h-[100vh] lg:flex-row'>
            <Image source={image}/>
            <div className="flex flex-col items-center gap-3">
                <h1 className="text-[6vw] font-bold md:text-[4vw]">Are you Hungry?</h1>
                <h2 className="text-[3vw] font-semibold md:text-[2vw]">Read recipe</h2>
                <h2 className="text-[3vw] font-semibold md:text-[2vw]">Cook your self</h2>
                <button className="btn btn-primary">Check recipes</button>
            </div>
        </div>
    )
    
}