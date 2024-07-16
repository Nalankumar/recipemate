// import {data} from './data/data.js'
// import axios from 'axios'

// // const apiKey= data.apiKey;
// const url = 'https://api.spoonacular.com/recipes/random?apiKey='+apiKey;


// // export async function getData(){
// //     const response = await axios.get(url);
// // }

// function getRandomRecipes(){
//     var urlForRandomRecipes = 'https://api.spoonacular.com/recipes/random?apiKey='+apiKey+"&number=1";
//     const recipe = axios.get(urlForRandomRecipes)
//     .then(function (res){
//         console.log(res.data);
//         return res.data;
//     })
//     .catch(function (error){
//         alert("Data not found\n" + error);
//     })
//     return recipe;
// }

// export function getInfoById(id){
// var url = "https://api.spoonacular.com/recipes/"+id+"/information?apiKey=" + apiKey;
// axios.get(url)
// .then(function (res){
//     console.log(res);
// })
// .catch(function (error){
//     console.log(error);
// })

// // }
// // export function searchRecipesByCuisineDemo(cuisine){
// //     var url = "/recipes/complexSearch?apiKey=" + apiKey +"&cuisine=" + cuisine+"&number=" + 10;
// //     const [recipes, setRecipes] = useState([]);
// //     client.get(url)
// //     .then(function (res){
// //         setRecipes(res.results);
// //     })
// //     .catch(function (error){
// //         console.log(error);
// //     })
// //     return recipes;
// // }

// // console.log(searchRecipesByCuisineDemo("italian"));

// export {getRandomRecipes};