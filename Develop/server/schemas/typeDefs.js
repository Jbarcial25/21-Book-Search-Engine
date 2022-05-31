const { gql } = require('apollo-server-express');


const typeDefs = gql `
    type Book {
        authors: [String],
        description: String,
        bookId: ID!
        image: String!
        link: String!
        title: String!
    }

    type User {
        _Id: ID!
        username: String!
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    input BookInput {
        authors: [String]
        description: String!
        bookId: String!
        image: String
        tittle: String!
        link: String
    }

    type Auth {
        toke: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookData: BookInput): User
        removeBook(bookId: ID!): User
    }
`;



module.exports = typeDefs