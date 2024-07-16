import Card from './Card'
export default function Carosaul({recipes}){
    return (
        <div className="carousel rounded-box *:p-[10px]">
            {/* <div className="carousel-item">
                <Card />
            </div> */}
            <div className="carousel-item">
                <Card
                src=""
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