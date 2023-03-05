module.exports = {
  // Step 3: define resolvers
  Query: {
    // top level resolver because it belongs to type Query
    pets(_, __, context) { // initial value, arguments, context passed in server
      return context.models.Pet.findMany()
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
