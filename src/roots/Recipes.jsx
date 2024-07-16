import { useState } from "react"
import Carosaul from "../components/Recipes/Carosaul.jsx"
import axios from 'axios'
import {data} from '../data/data.js'
export default function Recipes(){
    const apiKey= data.apiKey;
    const client = axios.create({
        baseUrl: "https://api.spoonacular.com"
    });

    const [random, setRandom] = useState([]);
    const [info, setInfo] = useState(null);
    const getRandomRecipes = async () => {
        var urlForRandomRecipes = '/recipes/random?apiKey='+apiKey+'&number=1';
        const recipe = await client.get(urlForRandomRecipes);
        setRandom(recipe.data);
        console.log(random);
    }

    const getInfoById = async (id)=>{
        var url = "/"+id+"/information?apiKey=" + apiKey;
        const res =  await axios.get(url);
        setInfo(res);
    }
    return (
        <div><button onClick={getRandomRecipes}>click me</button>
            {/* <img src={random[0].image} alt="no image" /> */}
            <p>{random.recipes.map()}</p>
            <Carosaul recipes={random}/>
            
        </div>
    )
}