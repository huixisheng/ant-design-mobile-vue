module.exports = {
  chainWebpack: config => {

    config.module
      .rule('js')
      // test: /\.m?jsx?$/,
      .set('test', /\.m?(j|t)sx?$/);

    config.resolve
      .extensions
      .add('.tsx');
  }
}
