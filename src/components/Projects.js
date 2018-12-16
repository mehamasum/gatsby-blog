import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import '../assets/bootstrap.min.css'
import '../assets/site.css'
import '../styles/index.scss'
import 'rc-collapse/assets/index.css'
import Collapse, { Panel } from 'rc-collapse'
import { Grid, Row, Col } from 'react-bootstrap'
import Tag from '../components/Tag'
import ribbon from '../assets/winner-ribbon.png'
import classnames from 'classnames'

const getIcon = urlType => {
  switch (urlType) {
    case 'Github':
      return <i className="fa fa-github" />
    case 'Website':
      return <i className="fa fa-external-link" />
    case 'Publication':
      return <i className="fa fa-book" />
    default:
      return <i className="fa fa-link" />
  }
}

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeKey: ['2016', '2017', '2018'],
    }
  }
  onChange = activeKey => {
    this.setState({
      activeKey,
    })
  }

  shouldHighlight = (highlightedHash, projectHash) =>
    highlightedHash.split('#')[1] === projectHash

  render() {
    const { data } = this.props
    const projects = data.allProjectsJson.edges
      .map(p => p.node)
      .filter(p => !p.kid)
    let catCount = {}
    projects.forEach(post => {
      const cat = post.year
      if (!catCount[cat]) catCount[cat] = []
      catCount[cat].push(post)
    })

    return (
      <div>
        <Collapse onChange={this.onChange} activeKey={this.state.activeKey}>
          {Object.keys(catCount)
            .reverse()
            .map((key, index) => {
              const projects = catCount[key]
              return (
                <Panel header={`${key} (${projects.length})`} key={key}>
                  <Row className="row-eq-height">
                    {projects.map(project => {
                      return (
                        <Col
                          xs={12}
                          sm={6}
                          lg={4}
                          key={project.id}
                          style={{
                            paddingLeft: '0.75em',
                            paddingRight: '0.75em',
                            margin: 0,
                          }}
                        >
                          <div
                            id={project.hash}
                            className={
                              this.shouldHighlight(
                                this.props.hash,
                                project.hash
                              )
                                ? 'highlighted'
                                : ''
                            }
                            style={{
                              backgroundColor: 'white',
                              marginBottom: '1.5em',
                              height: 'calc(100% - 1.5em)',
                              boxShadow:
                                '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
                              transition: '0.3s',
                              borderRadius: '5px',
                            }}
                          >
                            {project.winner ? (
                              <aside
                                style={{
                                  position: 'absolute',
                                  zIndex: 1,
                                  width: '100%',
                                }}
                              >
                                <img
                                  alt="Winner"
                                  style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                  }}
                                  src={ribbon}
                                />
                              </aside>
                            ) : null}
                            <a href={project.url[0].url} target="_blank">
                              <img
                                src={
                                  project.thumbnail ||
                                  'https://picsum.photos/400/300/?random'
                                }
                                alt={project.name}
                                style={{
                                  width: '100%',
                                  borderRadius: '5px 5px 0 0',
                                }}
                              />
                            </a>
                            <div
                              style={{
                                padding: '1em',
                              }}
                            >
                              <h3
                                style={{
                                  marginTop: 0,
                                  textDecoration: 'none',
                                }}
                              >
                                <a
                                  href={project.url[0].url}
                                  target="_blank"
                                  style={{ textDecoration: 'none' }}
                                >
                                  {project.name}
                                </a>

                                <ul
                                  className="unorderedList"
                                  style={{
                                    height: '2rem',
                                    float: 'right',
                                  }}
                                >
                                  {project.url.map((url, index) => (
                                    <li key={index} className="inlineListItem">
                                      <a href={url.url} target="_blank">
                                        {getIcon(url.title)}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </h3>
                              <p>{project.description}</p>
                              <div>
                                <i className="fa fa-tag fa-flip-horizontal" />
                                {project.tags.map((tag, index) => (
                                  <Tag tag={tag} key={index} url="#" />
                                ))}
                              </div>
                            </div>
                          </div>
                        </Col>
                      )
                    })}
                  </Row>
                </Panel>
              )
            })}
        </Collapse>
      </div>
    )
  }
}

export default Projects
