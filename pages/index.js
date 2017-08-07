import React from 'react'
import Page from '../src/components/Page'
import PagePreview from '../src/components/PagePreview'
import { formatDate } from '../src/utils/date'
import { makeUrl, filterPosts } from '../src/utils/content'

import CONFIG from '../content/index.json'
import SUMMARY_JSON from '../content/summary.json'

function Index(props) {
  return (
    <div>
      <Page
        siteTitle={`${CONFIG.siteTitle} - Index`}
        heroTitle={CONFIG.siteTitle}
        description={CONFIG.description}
        stylesheets={CONFIG.stylesheets}
        topLinks={CONFIG.topLinks}
        backgroundClass={CONFIG.backgroundClass}
        body={Body({ summaryJson: SUMMARY_JSON })}
        copyright={CONFIG.copyright}
        siteId={CONFIG.siteId}
      />
    </div>
  )
}

function Body(props) {
  const postList = filterPosts(props.summaryJson)
  return (
    <div className="center mw6 pa3 pa4-ns">
      {postList.map((article, i) => {
        const href = makeUrl(article)
        const date = formatDate(article.date)
        return (
          <PagePreview
            title={article.title}
            preview={article.preview}
            date={date}
            href={href}
            key={i}
          />
        )
      })}
    </div>
  )
}

export default Index
