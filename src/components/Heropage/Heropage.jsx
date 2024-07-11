import Image from "./Image";
import image from '../../assets/curry_rice.jpg'
import Button from '../Button'
export default function Heropage(){
    return(
<<<<<<< HEAD
        <div className='flex flex-col justify-evenly items-center h-[100vh] lg:flex-row'>
            
            <Image source={image}/>
            <div className="flex flex-col items-center gap-3">
=======
        <div className='flex sm:flex-col justify-evenly items-center h-[100vh] lg:flex-row'>
            
            <Image source={image}/>
            <div>
>>>>>>> f964496087ede9d4a821654ed88865ba50668143
                <h1>Are you Hungry?</h1>
                <h2>Read recipe</h2>
                <h2>Cook your self</h2>
                <Button content={'Check recipes'}></Button>
            </div>
        </div>
    )
    
}