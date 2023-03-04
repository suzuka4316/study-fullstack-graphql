const gql = require("graphql-tag")
const { ApolloServer } = require("apollo-server")

// Type Definition
const typeDefs = gql`
  type User {
    email: String! # this field on the user is expected to always have a value
    avatar: String
    friends: [User]! # []! - friends is always an array with value in it. [User!] - inside the array the value has to be User type
  }

  # Query Definition - description of how a client can access this type
  type Query {
    me: User! # non-null User
  }
`

// Resolver
const resolvers = {
  // has to be the same name as type definition
  Query: {
    me() {
      return {
        email: "test@email.com",
        avatar: "http://test.png",
        friends: [],
      }
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen(4000).then(() => console.log("on port 4000"))
