const {gql} = require('apollo-server');

const typeDefs = gql`

    enum PetType {
        DOG
        CAT
        TIGER
    }

    type User {
        name: String!,
        email: String!,
        pets: [Pet]!
    }

    interface Pet {
        id: String!,
        createdAt: String!,
        name: String!,
        type: PetType!,
        img: String!,
        user: User!
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
        img: String!,
        dogBone: String!,
        user: User!
    }

    type GenericPet implements Pet {
        id: String!,
        createdAt: String!,
        name: String!,
        type: PetType!,
        img: String!,
        user: User!
    }

    type Query {
        me: User!,
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