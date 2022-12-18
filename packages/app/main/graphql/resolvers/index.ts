import { Resolvers } from '@local/graphql';
import settings from './settings';

export const resolvers: Resolvers = {
  Query: {
    ...settings.queries,
  },
  Mutation: {
    ...settings.mutations,
  },
};
