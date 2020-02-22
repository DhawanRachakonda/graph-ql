Schema.js

const {gql} = require('apollo-server');

const typeDefs = gql`
    type Pet {
        id: String!,
        createdAt: String!,
        name: String!,
        type: String!,
        img: String!
    }

    input PetInput {
        name: String!,
        type: String
    }

    input AddPetInput {
        id: String!,
        createdAt: String!,
        name: String!,
        type: String!,
        img: String!
    }

    type Query {
        pet: Pet!,
        pets(input: PetInput): [Pet]!
    }

    type Mutation {
        addPet(pet: AddPetInput): Pet!
    }
`;



module.exports = {
    typeDefs
};

================================================================================
Resolvers.js


const pets = [
    {
        id: "0",
        createdAt: "2020-05-13",
        name: "xyz",
        type: "type1",
        img: ""
    },
    {
        id: "1",
        createdAt: "2020-05-13",
        name: "xyz2",
        type: "type2",
        img: ""
    }
]

const resolvers = {
    Query: {
        pet() {
            return pets[0]
        },

        pets(_,{input}) {
            return pets.filter(pet => input.name === pet.name);
        }
    },

    Mutation: {
        addPet(_,{pet}) {
            return pet;
        }
    }
}

module.exports = {
    resolvers,
}

===============================================================================================
index.js

const { ApolloServer } = require('apollo-server')
const {typeDefs} = require('./schema');
const {resolvers} = require('./resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
})

==================================================================================================
package.json

{
  "name": "GraphQL",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "apollo-server": "^2.10.1",
    "nodemon": "^2.0.2"
  }
}

================================================================================================
devcontainer.json

{
    "name": "Frontend Masters Sample",
    "dockerFile": "Dockerfile",
    "appPort": [4000],
    "runArgs": ["-u", "node"],
    "settings": {
      "workbench.colorTheme": "Night Owl",
      // "workbench.colorTheme": "Hot Dog Stand",
      "terminal.integrated.shell.linux": "/bin/bash"
    },
    "postCreateCommand": "npm install",
    "extensions": [
      // "somekittens.hot-dog-stand",
      "sdras.night-owl",
      "dbaeumer.vscode-eslint",
      "esbenp.prettier-vscode"
    ]
}

================================================================================================
Dockerfile

FROM node:stretch
RUN npm install --global eslint prettier








