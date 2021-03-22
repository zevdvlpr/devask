import { makeExecutableSchema } from 'graphql-tools';

import { ViwerResolver, ViwerTypes } from './modules/viewer';

export const schema = makeExecutableSchema({
  resolvers: [ViwerResolver],
  typeDefs: [ViwerTypes],
});
