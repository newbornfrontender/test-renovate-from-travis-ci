const files = ['index'];

export default {
  input: files.map((file) => `input/${file}.js`),

  output: {
    format: 'esm',
    dir: 'output',
    sourcemap: 'inline',
  },

  experimentalCodeSplitting: true,
};
