
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "./graphql.schema.json",
  documents: ['src/**/*.tsx'],
  generates: {
    "./src/gql": {
      preset: "client",
      plugins: []
    },
  }
};

export default config;
