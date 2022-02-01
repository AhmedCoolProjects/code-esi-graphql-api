# CODE ESI BACKEND

## About the project

This graphql application is the backend API that manage queries and mutation on the database of [codeesi.com](https://codeesi.com)

## Used technical skills

- Javascript
- GraphQL
- Apollo Server
- Mongoose
- Heroku

## Types -Database Collections-:

- **Person.js:** Define the whole users data in our project and recognized by their _category("board", "member", "guest")_ and their _post("prof", "student", "laureate", "other")_
- **Organization.js:** Contains other clubs, organizations and entreprises that we are in collaboration with.
- **Activity.js:** competition,
  visit,
  collaboration,
  meeting,
  training,
  project,
  news,
  gaming,
  form,
  other,...

## Queries -Requesting data from DB-:

under `graphql/typeDefs.js` we can find all our GraphQL API Queries under _the Query type_

## Mutations -Operations to execute on DB- _CRUD_:

under `graphql/typeDefs.js` we can find all our GraphQL API Mutations under _the Mutation type_

## Resolvers -The Definition of all our Queries & Mutations types-:

under `graphql/resolvers.js` we can find all the translated queries and mutations to a valid mongodb functions.

## Deployement

The API is deployed on Heroku as an Apollo GraphQL Server, where we can communicate with using Apollo Studio or Apollo Client in the frontend application [codeesi.com](https://codeesi.com)
