const { ApolloServer } = require('apollo-server')
const {typeDefs} = require('./schema');
const {resolvers} = require('./resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => {
      const token = req.headers.authorization || '';
      if(!token) throw new Error("User must login!");
      return {token};
    }
})

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
})
