import { Settings } from '@local/graphql/dist';
import { read, write } from '@local/data/schemas/settings';
import { BaseResolver } from '../../types/base-resolver';

const resolvers: BaseResolver<Settings> = {
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
