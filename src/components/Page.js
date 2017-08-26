import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'
import Tracking from './Tracking'

function Page(props) {
  return (
    <div>
      <Header
        siteTitle={props.siteTitle}
        description={props.description}
        stylesheets={props.stylesheets}
      />
      <main className="lh-copy">
        <Hero
          heroTitle={props.heroTitle}
          subtitle={props.description}
          topLinks={props.topLinks}
          backgroundClass={props.backgroundClass}
        />

        {props.body}

        <Footer copyright={props.copyright} />
        {props.siteId && (
          <Tracking siteId={props.siteId} />
        )}
      </main>
    </div>
  )
}

Page.propTypes = {
  heroTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stylesheets: PropTypes.array,
  topLinks: PropTypes.array,
  siteId: PropTypes.string.isRequired,
}

Page.defaultProps = {
  heroTitle: '',
  description: '',
  stylesheets: [
    'https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css'
  ],
  backgroundClass: 'bg-dark-gray',
}

export default Page
