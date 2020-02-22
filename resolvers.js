const user = {
    name: "Dhawan Rachakonda",
    email: "r.dhawan27@icloud.com",
    pet: []
}

const pets = [
    {
        id: "0",
        createdAt: "2020-05-13",
        name: "xyz",
        type: "CAT",
        img: "",
        user: 1
    },
    {
        id: "1",
        createdAt: "2020-05-13",
        name: "xyz2",
        type: "DOG",
        img: "",
        dogBone: "south west",
        user: 1
    }
]

const resolvers = {
    Query: {
        me() {
            return user;
        },
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
    },

    User: {
        pets(user) {
            return pets;
        }
    },

    Dog: {
        user() {
            return user
        }
    },

    GenericPet: {
        user() {
            return user;
        }
    }
}

module.exports = {
    resolvers,
}