import { people , getByID }from "./db"


const resolvers = {
    Query : {
        people : () => people,
        /* 
            resolver function is (parent, args, context, info) => {} 라서
            _ 를 써서 parent를 사용안하게 하려고 쓰는것
            설명해주는 주소 : https://github.com/prismagraphql/graphql-yoga/issues/137
        */ 
        person : (_,{id}) => getByID(id)
    }
};  

export default resolvers;