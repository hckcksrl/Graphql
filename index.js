// Over fetching => 하나의 값을원하는데 많은값을 받아서 그중 하나를 쓰는것
// Under fetching => REST에서 하나를 완설하려고 많은 소스를 요청하는것

import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers"


const server= new GraphQLServer({
    typeDefs : 'graphql/schema.graphql',
    resolvers
})

server.start(() => console.log("graphql server running"))