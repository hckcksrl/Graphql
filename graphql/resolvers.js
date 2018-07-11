// import { getMovie , getByID , addMovie,deleteMovie }from "./db"


// const resolvers = {
//     Query : {
//         movies : () => getMovie(),
//         /* 
//             resolver function is (parent, args, context, info) => {} 라서
//             _ 를 써서 parent를 사용안하게 하려고 쓰는것
//             설명해주는 주소 : https://github.com/prismagraphql/graphql-yoga/issues/137
//         */ 
//         movie : (_,{id}) => getByID(id)
//     },
//     Mutation : {
//         addMovie : (_ , {name , score}) => addMovie(name , score),
//         deleteMovie : (_,{id}) => deleteMovie(id)
//     }
// };  

import {getMovie} from "./db"

const resolvers = {
    Query : {
        movies : (_,{limit , rating}) => getMovie(limit,rating)
    }
}


export default resolvers;