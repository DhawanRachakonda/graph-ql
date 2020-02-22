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