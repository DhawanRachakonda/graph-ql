npm init
npm start

mutation {

  addPet(pet:{id: "2", createdAt:"54", name: "pet2", type:DOG, img: "img"}) {

    name,
    type

  }

}

// Get pets

{

  pets(input:{name: "xyz2"}) {

    name, type

  }

}

// Get extra attribute for a particular type.

{

  pets(input:{name: "xyz2"}) {

    name,
    type,
    __typename,
    ... on Dog {
      dogBone
    }

  }

}

#Relationships
// me
{

  me {
    name,
    pets {
      name
    }
  }

}

// pets


{

  pet {
    user {
      pets {
        user {
          pets {
            user {
              pets {
                user {
                  email
                }
              }
            }
          }
        }
      }
    }
  }
}