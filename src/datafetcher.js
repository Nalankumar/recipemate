import {data} from './data/data.js'
import axios from 'axios'
const apiKey= data.apiKey;
const url = 'https://api.spoonacular.com/recipes/716429/information?apiKey='+apiKey+'&includeNutrition=true'
function getData(){
    axios.get(url)
    .then(function (response){
        console.log(response);
    })
    .catch(function (error){
        console.log(error);
    })
    
}
getData();