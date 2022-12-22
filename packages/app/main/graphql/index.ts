import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloServer } from '@apollo/server';
import { write, read } from '@local/data/schemas/settings';
import { resolvers } from './resolvers';
import getPort from '../helpers/get-port';
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
    // Choose a port
    const port = getPort();

    // Write the port to our config
    await write({
      ...(await read()),
      port: port.toString(),
    });

    // Start the apollo server
    const { url } = await startStandaloneServer(server, {
      listen: { port },
      context: async () => ({ time: new Date().getTime() }),
    });

    console.log(`main -> gql -> server listening at: ${url}`);
  },
};
