module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      '@babel/preset-typescript', // Add this preset
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
  };
};
