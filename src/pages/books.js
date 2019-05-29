import React from 'react'
import { Link, graphql } from 'gatsby'
import { Row, Col } from 'react-bootstrap'
import SEO from '../components/seo/SEO'
import Navbar from '../components/layouts/Navbar'
import '../styles/portfolio.scss'

class Index extends React.Component {
  render() {
    const { data } = this.props
    const books = data.allBooksJson.edges.map(p => p.node)

    return (
      <React.Fragment>
        <SEO
          article={false}
          title={`Meha Masum's Books`}
          desc={`Mehedi Hasan Masum's profile, software portfolio and personal blog`}
          pathname={this.props.location.pathname}
        />

        <Navbar location={this.props.location} />

        <main className="indexRoot container">
          <Row>
            <Col xs={12} md={8} mdOffset={2}>
              <section className="resume-section">
                <h1>Books</h1>
                <Row style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {books.map((book, index) => {
                    return (
                      <Col
                        id={book.hash}
                        key={book.hash}
                        xs={12}
                        style={{ paddingLeft: 0, flex: '1 1 auto' }}
                      >
                        <article key={book.id}>
                          <div className="postPreview">
                            <div className="postPreviewThumbnail">
                              <div
                                className="backgroundCover sizeFull"
                                style={{
                                  backgroundImage: `url(${book.cover})`,
                                }}
                              />
                            </div>

                            <div>
                              <h1 className="postPreviewHeading">
                                {book.name}
                              </h1>

                              {book.wip ? (
                                <strong>Work in progress</strong>
                              ) : null}

                              <p>Language: {book.lang}</p>

                              <p>{book.description}</p>

                              <div style={{ marginTop: '0.5em' }}>
                                {book.tags.map((tag, index) => (
                                  <span
                                    key={`${book.name}${index}`}
                                    className="post-tag"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </article>
                      </Col>
                    )
                  })}
                </Row>

                <hr style={{ margin: '2em 0' }} />

                <section>
                  <h2>Interested in publishing?</h2>
                  <p>Contact me</p>
                  <div aria-hidden="true">
                    <a href="tel:+8801521112085" title="Make a phone call">
                      <i aria-hidden="true" className="fa left-icon fa-phone" />
                      +880 152 111 20 85
                    </a>
                  </div>

                  <div aria-hidden="true">
                    <a
                      href="#"
                      className="cryptedmail"
                      onClick={() => {
                        window.location.href = 'mailto:mehamasum@gmail.com'
                        return false
                      }}
                      title="Send email"
                    >
                      <i
                        aria-hidden="true"
                        className="fa left-icon fa-envelope"
                      />
                    </a>
                  </div>
                </section>
              </section>
            </Col>
          </Row>
        </main>
      </React.Fragment>
    )
  }
}

export default Index

export const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        blogTitle
        blogSlogan
      }
    }

    allBooksJson {
      edges {
        node {
          id
          hash
          name
          year
          description
          tags
          wip
          lang
          cover
        }
      }
    }
  }
`
