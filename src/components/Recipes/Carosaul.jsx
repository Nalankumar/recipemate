import Card from './Card'
import PropTypes from 'prop-types'
export default function Carosaul({recipes}){
    if(!recipes) return null;
    return (

        <div className="carousel rounded-box *:p-[10px]">
            {/* <div className="carousel-item">
                <Card />
            </div> */}
            {
                recipes.map(recipe => {
                    return <Card name={recipe.title} src={recipe.image} desc={recipe.summary} ></Card>
                })
            }
            <div className="carousel-item">
                <Card
                // src={recipes[0].image}
                name="Burger" 
                desc = "desc"/>
            </div>
            <div className="carousel-item">
                <Card
                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                name="Burger" 
                desc = "desc" />
            </div>
            <div className="carousel-item">
                <Card
                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                name="Burger"
                desc="desc" />
            </div>
            <div className="carousel-item">
                <img
                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                alt="Burger" />
            </div>
            <div className="carousel-item">
                <img
                src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                alt="Burger" />
            </div>
            <div className="carousel-item">
                <img
                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                alt="Burger" />
            </div>
        </div>
    )
}

Carosaul.propTypes = {
    recipes: PropTypes.any  
};