
export default function Image({source}){
    return(
        <div className='aspect-auto w-[25vh] rounded-md border-2 shadow-md'>
            <img src={source} alt='image' className='object-cover rounded-lg ' />
        </div>
    )
}