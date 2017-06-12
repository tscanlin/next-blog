export function makeUrl(article) {
  return `${article.dir.split('content').join('')}/${article.base.split('.json').join('')}`
}

export function filterArticles(summaryJson) {
  return summaryJson && summaryJson.fileMap && Object.keys(summaryJson.fileMap)
    .filter((file) => {
      if (file.indexOf('content/posts') === 0) {
        return true
      }
    }).map((file) => {
      return summaryJson.fileMap[file]
    }).sort((a, b) => {
      return a.date < b.date
    })
}
