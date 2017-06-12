const SUMMARY_JSON = require('./content/summary.json')

module.exports = {
  exportPathMap: function() {
    const posts = {}
    SUMMARY_JSON.fileMap && Object.keys(SUMMARY_JSON.fileMap)
      .forEach((file) => {
        if (file.indexOf('content/posts') === 0) {
          const page = file.split('content').join('').split('.json').join('')
          posts[page] = {
            page: '/post',
            query: {
              fullUrl: page
            }
          }
        }
      })

    return Object.assign({}, {
      '/': { page: '/' }
    }, posts)
  }
}
