
export default function Image({source}){
    return(
        <div className='aspect-auto w-[80vw] rounded-md border-2 shadow-md md:w-[30vw]'>
            <img src={source} alt='image' className='object-cover rounded-lg ' />
        </div>
    )
}