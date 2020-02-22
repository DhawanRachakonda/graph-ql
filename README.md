npm init
npm start

mutation {

  addPet(pet:{id: "2", createdAt:"54", name: "pet2", type:"xyz3", img: "img"}) {

    name

  }

}

// Get pets

{

  pets(input:{name: "xyz2"}) {

    name, type

  }

}