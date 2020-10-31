import React, { Component } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

export default class SEO extends Component {
  render() {
    const { title, desc, banner, pathname, article } = this.props
    return (
      <StaticQuery
        query={query}
        render={props => {
          const {
            site: {
              buildTime,
              siteMetadata: {
                title: defaultTitle,
                titleAlt,
                shortName,
                author,
                siteLanguage,
                logo,
                siteUrl,
                pathPrefix,
                description: defaultDescription,
                banner: defaultBanner,
                twitter,
                fbAppId,
              },
            },
          } = props

          return (
            <React.Fragment>
              <Helmet>
                <title>Hi, I'm Meha Masum. I'm a software engineer based in Dhaka.</title>
                <meta name="title" content="Hi, I'm Meha Masum. I'm a software engineer based in Dhaka." />
                <meta name="description" content="Check out Mehedi Hasan Masum's projects, work experience and more." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={siteUrl} />
                <meta property="og:title" content="Hi, I'm Meha Masum. I'm a software engineer based in Dhaka." />
                <meta property="og:description" content="Check out Mehedi Hasan Masum's projects, work experience and more." />
                <meta property="og:image" content={`${siteUrl}/meta-img.jpg`} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={siteUrl} />
                <meta property="twitter:title" content="Hi, I'm Meha Masum. I'm a software engineer based in Dhaka." />
                <meta property="twitter:description" content="Check out Mehedi Hasan Masum's projects, work experience and more." />
                <meta property="twitter:image" content={`${siteUrl}/meta-img.jpg`} />
              </Helmet>

            </React.Fragment>
          )
        }}
      />
    )
  }
}

SEO.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  banner: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  desc: null,
  banner: null,
  pathname: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        defaultTitle: title
        titleAlt
        shortName
        author
        siteLanguage
        logo
        siteUrl: url
        pathPrefix
        defaultDescription: description
        defaultBanner: banner
        twitter
        fbAppId
      }
    }
  }
`
