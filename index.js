import { ApolloServer } from "apollo-server";
import { config } from "dotenv";
config();
import db from "./utils/mongodb.js";
import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers.js";

db.on("error", () => {
  console.error("database connection error");
});
db.once("open", () => {
  console.log("connected to database");
});

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
