
export default function Image({source}){
    return(
        <div className='aspect-auto w-[25vh] rounded-md border border-black-900'>
            <img src={source} alt='image' className='object-cover' />
        </div>
    )
}