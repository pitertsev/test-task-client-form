module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/sass/main.sass";'
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/test-task-client-form/'
    : '/',
}
