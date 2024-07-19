import Card from './Card'

export default function Carosaul({recipes}){
    if(!recipes) return null;
    return (
        <div className="carousel rounded-box *:p-[10px]">
            {recipes.map((recipe,index) => (
                <div key={index} className="carousel-item">
                    <Card name={recipe.title} src={recipe.image} />
                </div>
            ))}
        </div>
    )
}