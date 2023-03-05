module.exports = {
  // Step 3: define resolvers
  Query: {
    // top level resolver because it belongs to type Query
    pets(_, { input }, context) { // initial value, arguments, context passed in server
      return context.models.Pet.findMany(input)
    },
    pet(_, {input}, context) {
      return context.models.Pet.findOne(input)
    }
  },
  // Mutation: {

  // },
  //// each type can have it's own default resolver. it runs after the top resolvers run
  // Pet: {
  //   img(pet) {
  //     return pet.type === 'DOG'
  //       ? 'https://placedog.net/300/300'
  //       : 'http://placekitten.com/300/300'
  //   }
  // },
  // User: {

  // }
}

// Arguments - allow clients to pass variable along with Queries that will be used in resolvers
