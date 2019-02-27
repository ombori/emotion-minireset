module.exports = function (api) {
  api.cache.forever();

  const presets = [];

  if (process.env['MODULES'] === 'false') {
    presets.push(['@babel/preset-env', { modules: false }]);
  } else {
    presets.push('@babel/preset-env');
  }

  return {
    presets,
    plugins: [
      ['babel-plugin-inline-import', { 'extensions': ['.css'] }]
    ],
  };
}
