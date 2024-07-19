import PropTypes from 'prop-types'
export default function Card({name, src}){
    return (
        <div className="card bg-base-100 w-30 aspect-ratio shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={src}
                alt={name}
                className="rounded-xl h-[20dvh] aspect-auto md:[10dvh]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions">
                <button className="btn btn-primary">View</button>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    image: PropTypes.string
}