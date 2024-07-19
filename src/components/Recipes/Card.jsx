
export default function Card({name, src}){
    return (
        <div className="card card-compact bg-base-100 w-[40vw] h-[15vh] shadow-xl md:w-[30vw] md:h-[25vh] lg:w-[15vw] lg:h-[25vh]">
            <figure className="px-10 pt-10">
                <img
                src={src}
                alt={name}
                className="rounded-xl aspect-auto md:[10dvh]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-semibold">{name}</h2>
                <div className="card-actions">
                <button className="btn btn-primary">View</button>
                </div>
            </div>
        </div>
    )
}
