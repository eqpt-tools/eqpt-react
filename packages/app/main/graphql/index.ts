import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloServer } from '@apollo/server';
import { resolvers } from './resolvers';
// @ts-ignore not sure about this one
import schema from './schema.graphql';

interface ApolloContext {
  time: number;
}

// Create the apollo server
const server = new ApolloServer<ApolloContext>({
  typeDefs: schema,
  resolvers,
});

// Export the listen method, which is called by our main process
export default {
  listen: async () => {
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
      context: async () => ({ time: new Date().getTime() }),
    });

    console.log(`main -> gql -> server listening at: ${url}`);
  },
};
