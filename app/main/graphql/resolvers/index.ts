import settings from './settings';
import { Resolvers } from '../../../graphql';

export const resolvers: Resolvers = {
  Query: {
    ...settings.queries,
  },
};
