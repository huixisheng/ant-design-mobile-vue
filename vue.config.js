module.exports = {
  chainWebpack: (config) => {

    config.module
      .rule('js')
      // test: /\.m?jsx?$/,
      .set('test', /\.m?(j|t)sx?$/);

    config.resolve
      .extensions
      .add('.tsx');

    // console.log(config);
    if (config.get('mode') === 'production') {
      config
      .entry('index')
      .add('./index.js')
      .end();

      config
        .entryPoints
        .delete('app');
    }
  }
}
