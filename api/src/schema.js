const { gql } = require('apollo-server')

// Step 1: Create type definitions based on db schema
const typeDefs = gql`
  type User {
    id: ID! # unique identifier
    username: String!
  }

  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: String!
    img(height: String, width: String): String
  }

  # Input type is just like any other type but can be used only for argument
  input PetInput {
    name: String
    type: String
  }

  # Step 2: Create Query type
  type Query {
    pets(input: PetInput): [Pet]! # All arguments must be defined in Schema. You can put scalar or Input type, not custom type
    pet(input: PetInput): Pet
  }
`

module.exports = typeDefs
