import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

function Hero(props) {
  return (
    <div className={`relative tc ${props.backgroundClass}`}>
      <div className="relative mw7 center white pv4">
        <div className="absolute top-0 right-0">
          {props.topLinks && props.topLinks.length > 0 && (
            props.topLinks.map((link, i) => {
              return (
                <Link href={link.href} key={i}>
                  <a className="dib f6 white no-underline pa1 ma1" key={i}>
                    {link.text}
                  </a>
                </Link>
              )
            })
          )}
        </div>
        <div className="pv4">
          <h1 className="f1 normal lh-title ma0 pa0">
            <Link prefetch href="/">
              <a className="white no-underline" href="/">
                {props.siteTitle}
              </a>
            </Link>
          </h1>
          <h4 className="normal o-70 ma0 pt2 pb3 ph1">
            {props.subtitle}
          </h4>
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  backgroundClass: PropTypes.string,
  topLinks: PropTypes.array,
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

Hero.defaultProps = {
  backgroundClass: 'bg-mid-gray',
  topLinks: [],
  siteTitle: '',
  subtitle: '',
}

export default Hero
