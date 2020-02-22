const {gql} = require('apollo-server');

const typeDefs = gql`

    enum PetType {
        DOG
        CAT
        TIGER
    }

    interface Pet {
        id: String!,
        createdAt: String!,
        name: String!,
        type: PetType!,
        img: String!
    }

    input PetInput {
        name: String!,
        type: PetType
    }

    input AddPetInput {
        id: String!,
        createdAt: String!,
        name: String!,
        type: PetType!,
        img: String!
    }

    type Dog implements Pet {
        id: String!,
        createdAt: String!,
        name: String!,
        type: PetType!,
        img: String!
        dogBone: String!
    }

    type GenericPet implements Pet {
        id: String!,
        createdAt: String!,
        name: String!,
        type: PetType!,
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