import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

function Hero(props) {
  return (
    <div className={`relative tc ${props.backgroundClass}`}>
      <div className="mw7 center white pv4">
        <div className="pv4">
          <h1 className="f1 normal lh-title ma0 pa0">
            <Link href="/">
              <a className="white no-underline" href="/">
                {props.heroTitle}
              </a>
            </Link>
          </h1>
          <h4 className="normal o-70 ma0 pt2 pb3 ph1">
            {props.subtitle}
          </h4>
          <div>
            {props.topLinks && props.topLinks.length > 0 && (
              props.topLinks.map((link, i) => {
                return link.href.indexOf('http') === -1 ? (
                  <Link href={link.href} key={i}>
                    <a className="dib f6 white no-underline pa1 ma1" key={i}>
                      {link.text}
                    </a>
                  </Link>
                ) : (
                  <a className="dib f6 white no-underline pa1 ma1" href={link.href} key={i}>
                    {link.text}
                  </a>
                )
              })
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  backgroundClass: PropTypes.string,
  topLinks: PropTypes.array,
  heroTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

Hero.defaultProps = {
  backgroundClass: 'bg-mid-gray',
  topLinks: [],
  heroTitle: '',
  subtitle: '',
}

export default Hero
