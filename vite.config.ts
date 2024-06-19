import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
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
});
