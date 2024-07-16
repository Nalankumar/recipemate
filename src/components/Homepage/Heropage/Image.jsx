
export default function Image({source}){
    return(
        <div className='aspect-auto w-[60vw] rounded-md border-2 shadow-lg  md:w-[30vw]'>
            <img src={source} alt='image' className='object-cover rounded-lg border-solid' />
        </div>
    )
}