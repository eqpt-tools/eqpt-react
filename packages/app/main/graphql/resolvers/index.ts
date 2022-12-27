import { Resolvers } from '@local/graphql';
import settings from './settings';
import products from './products';

export const resolvers: Resolvers = {
  Query: {
    ...settings.queries,
    ...products.queries,
  },
  Mutation: {
    ...settings.mutations,
    ...products.mutations,
  },
};
