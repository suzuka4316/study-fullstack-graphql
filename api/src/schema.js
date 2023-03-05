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
  }

  # Step 2: Create Query type
  type Query {
    pets: [Pet]!
  }
`

module.exports = typeDefs
