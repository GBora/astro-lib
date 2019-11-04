export default {
    input: 'src/main.js',
    output: {
      file: 'dist/astro-lib.js',
      format: 'umd',
      name: 'astro-lib',
      globals: {
          'moment': 'moment'
      },
      external: [ 'moment' ]
    }
  };