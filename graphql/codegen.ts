import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: '../app/main/graphql/schema.graphql',
  generates: {
    'dist/index.ts': {
      documents: './operations/**/*.graphql',
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-resolvers',
        'typescript-react-query',
        {
          add: {
            content: "export * from '@tanstack/react-query'",
          },
        },
      ],
      config: {
        fetcher: {
          endpoint: 'localhost:4000',
        },
        omitOperationSuffix: true,
        skipTypename: true,
      },
    },
  },
};

export default config;
