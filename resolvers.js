const pets = [
    {
        id: "0",
        createdAt: "2020-05-13",
        name: "xyz",
        type: "CAT",
        img: ""
    },
    {
        id: "1",
        createdAt: "2020-05-13",
        name: "xyz2",
        type: "DOG",
        img: "",
        dogBone: "south west"
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
    },

    Pet: {
        __resolveType(pet) {
            if(pet.dogBone) return "Dog"
            return "GenericPet"
        }
    }
}

module.exports = {
    resolvers,
}