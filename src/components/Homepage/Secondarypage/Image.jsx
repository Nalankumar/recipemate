
export default function Image({source}){
    return(
        <div className="card bg-base-100 rounded-xl w-[60vw] shadow-xl md:w-[30vw]">
            <figure>
                <img src={source} />
            </figure>
            
        </div>
    )
}