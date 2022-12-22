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
          endpoint:
            '`http://localhost:${process.env.NEXT_PUBLIC_GRAPHQL_PORT}`',
          fetchParams: {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        },
        omitOperationSuffix: true,
        skipTypename: true,
      },
    },
  },
};

export default config;
