import Image from "./Image";
import image from '../../../assets/biriyani.jpg'
export default function Heropage(){
    return(
        <div className='flex flex-col justify-evenly items-center h-[100vh] lg:flex-row-reverse'>
            
            <Image source={image}/>
            <div className="flex flex-col items-center gap-3">
                <h1 className="text-xl font-bold md:text-5xl">Recipemate contains vast data</h1>
                <h2 className="text-2 font-semibold text-center md:text-3xl md:w-[70%]">It contains over 3,30,000 recipes and 80,000 nutrients</h2>
            </div>
        </div>
    )
    
}