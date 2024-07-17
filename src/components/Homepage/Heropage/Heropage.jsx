import Image from "./Image";
import image from '../../../assets/curry_rice.jpg'

export default function Secondarypage(){
    return(
        <div className='flex flex-col justify-evenly items-center h-[100vh] lg:flex-row'>
            <Image source={image}/>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-xl font-bold py-[2vh] md:text-5xl">Are you Hungry?</h1>
                <h2 className="text-5 font-semibold my-[1vh] md:text-3xl md:w-[70%]">Read Recipes</h2>
                <h2 className="text-5 font-semibold my-[1vh] md:text-3xl md:w-[70%]">Cook Yourself</h2>
                <button className="btn btn-primary my-[1vh]">Check recipes</button>
            </div>
        </div>
    )
    
}