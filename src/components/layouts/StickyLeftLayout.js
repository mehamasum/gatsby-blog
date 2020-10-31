import React from 'react'
import { Row, Col } from 'react-bootstrap'
import SEO from '../../components/seo/SEO'
import Footer from '../layouts/Footer'
import '../../styles/index.scss'
import '../../styles/post.scss'
import { Link } from 'gatsby'
import { ThemeContext } from '../ThemeContextWrapper'
import CodeStyle from '../styles/Code'
import GlobalStyle from '../styles/Global'
import Switch from 'react-switch'
import Emoji from '../../components/Emoji'
import Navbar from '../../components/layouts/Navbar'

class Layout extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, setTheme }) => (
          <React.Fragment>
            <SEO />
            <GlobalStyle theme={theme} />
            <CodeStyle theme={theme} />
            <Navbar
              location={this.props.location}
              style={{
                background: theme.primary.background,
                color: theme.primary.text.normal,
              }}
            />

            <div
              className="indexRoot"
              style={{
                background: theme.primary.background,
                color: theme.primary.text.normal,
                transition: 'color 0.5s ease-out, background 0.5s ease-out',
              }}
            >
              <div>
                <Row>
                  <Col xs={12} md={3} mdOffset={1} className="stickySidebar">
                    <div>
                      <label>
                        <Switch
                          onColor="#7fc4ff"
                          checked={theme.id === 'dark'}
                          onChange={e => {
                            setTheme(e ? 'dark' : 'light')
                          }}
                          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                          checkedIcon={
                            <svg height="100%" width="100%" fill="#000000" className="switchIcon" focusable="false" viewBox="0 0 24 24" ariaHidden="true"><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path></svg>
                          }
                          uncheckedIcon={
                            <svg height="100%" width="100%" fill="#FFEB3B" className="switchIcon" focusable="false" viewBox="0 0 24 24" ariaHidden="true"><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path></svg>
                          }
                        />
                      </label>
                    </div>
                    {this.props.hideIntro ? null : (
                      <React.Fragment>
                        <h1
                          style={{
                            fontSize: '2.5em',
                          }}
                        >
                          <Link to="/blog" style={{ color: 'inherit' }}>
                            {'<Learning in'}
                            <br />
                            {'public/>'}
                          </Link>
                        </h1>
                        <h3>
                          Personal Blog by <Link to="/">Meha Masum</Link>
                        </h3>

                        <hr />
                      </React.Fragment>
                    )}

                    {this.props.sidebar}
                  </Col>

                  <Col xs={12} md={7}>
                    {this.props.children}
                  </Col>
                </Row>
              </div>
            </div>
            <Footer
              style={{
                background: theme.primary.background,
                color: theme.primary.text.normal,
              }}
            />
          </React.Fragment>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Layout
