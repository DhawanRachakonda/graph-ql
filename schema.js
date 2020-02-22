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