import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: {
      index: './cli/index.ts',
      server: './cli/server.ts',
    },
    outDir: 'dist/cli',
    silent: true,
    noExternal: ['open-editor', 'execa', 'fractional-indexing', 'lodash-es'],
    clean: true,
    sourcemap: true,
    async onSuccess() {
      // eslint-disable-next-line no-console
      console.log('cli: build successful');
    },
  },
  {
    entry: ['./reactDevtools/bootstrap.ts'],
    silent: true,
    outDir: './public/reactDevtools',
    bundle: true,
    target: 'es6',
    format: 'iife',
    replaceNodeEnv: true,
    clean: true,
    async onSuccess() {
      // eslint-disable-next-line no-console
      console.log('reactDevtools: build successful');
    },
  },
]);