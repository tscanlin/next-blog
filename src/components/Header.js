import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

function Header(props) {
  return (
    <Head>
      <title>{props.siteTitle}</title>
      <meta name="description" content={props.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {props.stylesheets && props.stylesheets.length > 0 && props.stylesheets.map((stylesheet, i) => {
        return <link key={i} rel="stylesheet" href={stylesheet} />
      })}
      <style>{`
          body {
            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
          }
      `}</style>
    </Head>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stylesheets: PropTypes.array,
}

export default Header
