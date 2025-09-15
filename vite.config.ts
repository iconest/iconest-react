import { defineConfig } from 'vite';
import { resolve } from 'path';
import { globSync } from 'glob';
import path from 'path';

// Get all TypeScript files in src except index.ts
const entries = globSync('src/**/*.tsx').reduce((acc, file) => {
  const name = path.basename(file, '.tsx');
  acc[name] = resolve(__dirname, file);
  return acc;
}, {});

// Add the main index file
entries['index'] = resolve(__dirname, 'src/index.ts');

export default defineConfig({
  build: {
    lib: {
      entry: entries,
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        format: 'es',
        entryFileNames: '[name].js',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
  },
});
