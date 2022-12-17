import { Settings } from '../../../../graphql';

export default {
  queries: {
    settings: () => ({
      discordWebhook: '',
      licenseKey: '',
    }),
  },
  // mutations: {
  //   updateSettings: ()
  // },
};

const queries = {};
