import fetch from "node-fetch"
import axios from "axios"

const API_URL = "https://yts.am/api/v2/list_movies.json"

// export const getMovie = (limit , rating) => {
//     let REQUEST_URL = API_URL;
//     if(limit > 0){
//         REQUEST_URL += `limit=${limit}`;
//     }
//     if(rating > 0){
//         REQUEST_URL += `&minimum_rating=${rating}`;
//     }
//     return fetch(REQUEST_URL)
//     .then(res => res.json())
//     .then(json => json.data.movies);
// }

export const getMovie = async (limit , rating) => {
    const {
        data: {
            data : {movies}
        }
    } = await axios(API_URL, {
        params : {
            limit : limit,
            minimum_rating : rating
        }
    })
    return movies
}

// let movies =[
//     {   
//         id : 0,
//         name : "Avengers - The new one",
//         score : 6,
//     },
//     {
//         id : 1,
//         name : "Antman and Wasp",
//         score : 90,
//     },
//     {
//         id : 2,
//         name : "Witch",
//         score : 27,
//     },
//     {
//         id : 3,
//         name : "Sex and the City",
//         score : 1,
//     },
//     {
//         id : 4,
//         name : "Ready Player One",
//         score : 42,
//     }
// ];

// export const getMovie = () => movies

// export const getByID = (id) => {
//     const filteredPeople = people.filter(person => person.id === id)
//     return filteredPeople[0]
// }

// export const deleteMovie = (id) => {
//     const cleanedMovies = movies.filter(movie => movie.id !== id)
//     if(movies.length > cleanedMovies.length){
//         movies = cleanedMovies
//         return true;
//     }else {
//         return false
//     }
// }

// export const addMovie = (name , score) => {
//     const newMovie = {
//         id : movies.length ,
//         name , 
//         score
//     }
//     movies.push(newMovie);
//     console.log(movies)
//     return newMovie
// }
