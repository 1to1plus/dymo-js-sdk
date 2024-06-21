import { defineConfig } from 'vite';

// @ts-ignore
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/dymo-js-sdk.ts'), // Adjust to your main TypeScript file
      name: 'DymoJsSdk',
      formats: ['es', 'cjs'],
      fileName: (format) => `dymo-js-sdk.${format}.js`,
    },
    rollupOptions: {
      external: [
        // List external dependencies here to prevent bundling
        'axios', 'lodash', 'xml2js', 'fast-xml-parser',
      ],
      output: {
        globals: {
          axios: 'axios',
          lodash: 'lodash',
          'xml2js': 'xml2js',
          'fast-xml-parser': 'fastXmlParser',
        },
      },
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      // @ts-ignore
      tsConfigFilePath: path.resolve(__dirname, 'tsconfig.json'),
    }),
  ],
});
