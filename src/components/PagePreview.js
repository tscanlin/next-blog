import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

function PageLink(props) {
  return (
    <Link href={`post?fullUrl=${props.href}`} as={props.href}>
      <a className={`b black o-80 glow no-underline lh-solid ${props.className}`}>
        { props.children }
      </a>
    </Link>
  )
}

function PagePreview(props) {
  return (
    <div className="mb4 pb2 bb b--light-gray">
      <PageLink href={props.href} className="f3">
        { props.title }
      </PageLink>
      {props.preview && (
        <p className="mv1 o-60">
          { props.preview }
          <PageLink href={props.href}>
            <span> »</span>
          </PageLink>
        </p>
      )}
      {props.date && (
        <small className="db ttu o-40">
          <time key={ new Date(props.date).toISOString() }>
            { props.date }
          </time>
        </small>
      )}
    </div>
  )
}

PagePreview.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  preview: PropTypes.string,
  date: PropTypes.string,
}

export default PagePreview
