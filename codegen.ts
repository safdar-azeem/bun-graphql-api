import type { CodegenConfig } from '@graphql-codegen/cli'
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files'

const config = {
	overwrite: true,
	schema: './src/schema/**/*.graphql',

	generates: {
		'src/graphql/': defineConfig(),
	},
	hooks: {
		afterAllFileWrite: ['bun prettier --write'],
	},
} satisfies CodegenConfig

export default config
