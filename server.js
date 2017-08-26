const { createServer } = require('http')
const { parse } = require('url')
const { join } = require('path')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// Root files.
const rootStaticFiles = [
  '/favicon.ico',
  '/assets',
]

// Build path map for aliases.
const SUMMARY_JSON = require('./content/summary.json')
const pathMap = {}
SUMMARY_JSON.fileMap && Object.keys(SUMMARY_JSON.fileMap)
  .forEach((file) => {
    const obj = {}
    const src = SUMMARY_JSON.fileMap[file]
    obj.page = src.page
    obj.filePath = file
    src.paths && src.paths.forEach((path) => {
      pathMap[path] = obj
    })
  })

app.prepare()
.then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl
    if (rootStaticFiles.filter((file) => pathname.indexOf(file) > -1).length > 0) {
      // Code path for static assets.
      const path = join(__dirname, 'static', pathname)
      app.serveStatic(req, res, path)
    } else if (pathMap.hasOwnProperty(pathname)) {
      // Code path for routing via frontmatter
      query.filePath = pathMap[pathname].filePath
      app.render(req, res, '/' + pathMap[pathname].page, query)
    } else if (pathname.indexOf('/posts') === 0) {
      // Code path for posts in content/posts
      query.fullUrl = pathname
      app.render(req, res, '/post', query)
    } else {
      // Default code path
      handle(req, res, parsedUrl)
    }
  })
  .listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
