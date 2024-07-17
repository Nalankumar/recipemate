import { useState } from "react"
import Carosaul from "../components/Recipes/Carosaul.jsx"
import axios from 'axios'
import {data} from '../data/data.js'
import { useEffect } from "react"
export default function Recipes(){
    const apiKey= data.apiKey;
    const api = axios.create({
        baseURL: 'https://api.spoonacular.com'
    })
    const [random, setRandom] = useState([]); 
    useEffect(() => {
        api.get('/recipes/random?apiKey='+apiKey+'&number=2')
        .then((res)=>{
            setRandom(res.data.recipes)
            console.log(random);
        })
    },[])
   
    const [info, setInfo] = useState(null);
    // const getRandomRecipes =  () => {
    //     const urlForRandomRecipes = 'https://api.spoonacular.com/recipes/random?apiKey='+apiKey+'&number=2';
    //     axios.get(urlForRandomRecipes)
    //     .then((res)=>{
    //         console.log(res.data.recipes);
    //         setRandom(res.data.recipes);
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    //     // setRandom(recipe);
        
    //     // return (recipe)
    // }

    const getInfoById = async (id)=>{
        var url = "/"+id+"/information?apiKey=" + apiKey;
        const res =  await axios.get(url);
        setInfo(res);
    }

    return (
        <div>
            {/* <button className="btn" onClick={getRandomRecipes}>click me</button> */}
            <Carosaul recipes={random}/>
            <p>recipes</p>
            
            {/* {random.map((r)=>{
                <p>{r.title}</p>
            })} */}
        </div>
    )
}