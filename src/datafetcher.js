import {data} from './data/data.js'
import axios from 'axios'
const apiKey= data.apiKey;
const url = 'https://api.spoonacular.com/recipes/random?apiKey='+apiKey;
export function getData(){
    axios.get(url)
    .then(function (response){
        console.log(response);
    })
    .catch(function (error){
        console.log(error);
    })
    
}

export function getRandomRecipes(id){
    var urlForRandomRecipes = 'https://api.spoonacular.com/recipes/random?apiKey='+apiKey;
    var r;
    axios.get(urlForRandomRecipes)
    .then(function (res){
        r =  res.data;
    })
    .catch(function (error){
        alert("Data not found\n" + error);
    })
    return r;
}

export function getInfoById(id){
    var url = "https://api.spoonacular.com/recipes/"+id+"/information?apiKey=" + apiKey;
    axios.get(url)
    .then(function (res){
        console.log(res);
    })
    .catch(function (error){
        console.log(error);
    })

}
