import { read, write } from '@local/data/schemas/settings';

const resolvers = {
  queries: {
    settings: async function getSettings() {
      const settings = await read();

      return settings;
    },
  },
  mutations: {
    login: async (_parent, args) => {
      console.log(`auth -> login -> ${args.licenseKey}`);

      await write({
        ...(await read()),
        licenseKey: args.licenseKey,
      });

      return read();
    },
  },
};

export default resolvers;
