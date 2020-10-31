import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo/SEO'

import avatar from '../assets/images/avatar.jpg'
import resumeFile from '../assets/files/Resume_Mehedi-Hasan-Masum_CSEDU.pdf'

import '../styles/portfolio.scss'

class Index extends React.Component {
  render() {
    const { data } = this.props
    const projects = data.allProjectsJson.edges
      .map(p => p.node)
      .filter(p => p.type === 'personal' && !!p.winner)

    return (
      <React.Fragment>
        <SEO />

        <div className="container">
          <div className="my-3">
            <nav className="nav justify-content-end">
              <a className="nav-link" target="_blank" href="/blog">
                <i aria-hidden="true" className="fa fa-rss" /> Blog
            </a>

              <a className="nav-link" target="_blank" href={resumeFile}>
                <i aria-hidden="true" className="fa fa-print" /> Resume
            </a>

            </nav>
          </div>
          <div className="row">
            <div className="col-md-4 col-lg-3 offset-lg-1 mb-5">
              <img src={avatar} alt="Profile Picture" className="avatar" />
              <h1 className="mt-4">Mehedi Hasan Masum</h1>
              <div className="my-2">Software Engineer at <br /><a href="http://newscred.com">Newscred</a></div>
              <div className="my-4">
                <div>
                  <i aria-hidden="true" className="fa fa-map-marker" />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div>
                  <i aria-hidden="true" className="fa fa-phone" />
                  <span className="cryptedtel" />
                </div>
                <div>
                  <i aria-hidden="true" className="fa fa-envelope" />
                  <span className="cryptedmail" />
                </div>
              </div>
              <ul className="my-2 fa-2x social-info">
                <li>
                  <a href="https://stackoverflow.com/users/4135289/mehamasum" title="StackOverflow profile">
                    <i aria-hidden="true" className="fa fa-stack-overflow" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/mehamasum" title="Github profile">
                    <i aria-hidden="true" className="fa fa-github" />
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/mehamasum" title="LinkedIn profile">
                    <i aria-hidden="true" className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-8 col-lg-7 mb-5">
              <div className="quote">
                <div className="quote-container">
                  <blockquote>
                    <p>
                      Programmer and lifelong learner.<br /> Led my team to 5 international hackathon titles back in college.
                    <br /> Love AI and open source. Believer of ‘Roll up your sleeves and get the job done’.<br />
                    </p>
                  </blockquote>
                </div>
              </div>
              <div className="bio-section">
                <div>
                  <div className="preference-label mb-1 mt-2">
                    <span>My interests</span>
                  </div>
                  <div>
                    <span className="tag interested-tag">running</span>
                    <span className="tag interested-tag">fresh-food</span>
                    <span className="tag interested-tag">pop music</span>
                    <span className="tag interested-tag">tv series</span>
                    <span className="tag interested-tag">cricket</span>
                    <span className="tag interested-tag">travel</span>
                  </div>
                </div>
              </div>
              <div className="bio-section">
                <div>
                  <div className="preference-label mb-1 mt-2">
                    <span>I want to work with</span>
                  </div>
                  <div>
                    <span className="tag">python</span>
                    <span className="tag">rest</span>
                    <span className="tag">graphql</span>
                    <span className="tag">node.js</span>
                    <span className="tag">react</span>
                  </div>
                </div>
                <div>
                  <div className="preference-label mb-1 mt-2">
                    <span>I prefer not to work with</span>
                  </div>
                  <div>
                    <span className="tag disliked-tag">android</span>
                    <span className="tag disliked-tag">jquery</span>
                  </div>
                </div>
              </div>
              <hr />
              <section className="resume-section my-4 mt-5">
                <h4>Work</h4>
                <div className="row my-3" id="work">
                  <div className="col-12">
                    <article>
                      <header className="my-2">
                        <h5>
                          Software Engineer at <a href="https://newscred.com/" target="_blank" rel="noopener noreferrer">Newscred Inc.</a>
                        </h5>
                        <div className="my-1">
                          <address>Dhaka, Bangladesh</address><time>Since August 2019</time>
                        </div>
                      </header>
                      <p className="my-2">
                        Working as a full-stack engineer in developing the <a href="https://get.newscred.com/gartner-mq-cmp-2019/">world's leading content
                        marketing platform</a>
                      </p><ul>
                        <li>As a part of the Publishing team, we've revamped Newscred's content publishing and social scheduling experience to allow users to distribute content across all downstream channels (Social Media, CMSs, Feeds) quickly
                        and intuitively</li>
                        <li>Led the research and development efforts on delivering multi-format File Annotator that allows NewsCred users to markup uploaded files with highlights, notes and other annotation tools</li>
                      </ul>
                      <p />
                      <footer className="my-3">
                        <div className="preference-label mb-1">
                          <span>Worked with</span>
                        </div>
                        <span className="tag">node.js</span>
                        <span className="tag">react</span>
                        <span className="tag">expressjs</span>
                        <span className="tag">mongodb</span>
                        <span className="tag">oauth2</span>
                        <span className="tag">facebook-graph-api</span>
                        <span className="tag">twitter-api</span>
                        <span className="tag">linkedin-api</span>
                        <span className="tag">youtube-api</span>
                        <span className="tag">xml-rpc</span>
                      </footer>
                    </article>
                  </div>
                  <div className="col-12">
                    <article>
                      <header className="my-2">
                        <h5>
                          Software Engineer at <a href="http://codemarshal.com/" target="_blank" rel="noopener noreferrer">CodeMarshal</a>
                        </h5>
                        <div className="my-1">
                          <address>Dhaka, Bangladesh</address><time>Feb 2018 to July 2019</time>
                        </div>
                      </header>
                      <p className="my-2">
                        Worked as a full-stack engineer on different CodeMarshal projects
                    </p><ul>
                        <li>Front- and back-end engineering work on an Edu-game platform. Developed a web-based gaming environment with ReactJS, Redux and PixiJS. Implemented a real-time messaging backend from scratch.</li>
                        <li>Co-authored the core REST architecture package (suite of reusable Django apps) for usage in different CodeMarshal products using Django Rest Framework.</li>
                        <li>Co-authored shared ReactJS component library, showcased by a style guide app, added tests, prepared documentation.</li>
                        <li>Built Continuous Integration &amp; Continuous Delivery pipelines for the shared libraries.
                      </li>
                      </ul>
                      <p />
                      <footer className="my-3">
                        <div className="preference-label mb-1">
                          <span>Worked with</span>
                        </div>
                        <div>
                          <span className="tag">django-rest-framework</span>
                          <span className="tag">django-channels</span>
                          <span className="tag">react</span>
                          <span className="tag">redux</span>
                          <span className="tag">pixi</span>
                          <span className="tag">postgresql</span>
                          <span className="tag">celery</span>
                          <span className="tag">redis</span>
                        </div>
                      </footer>
                    </article>
                  </div>
                  <div className="col-12">
                    <article>
                      <header className="my-2">
                        <h5>
                          Research Assitant at <a href="http://cse.du.ac.bd/robolab" target="_blank" rel="noopener noreferrer">Robolab, Dept. of CSE, Univ. of Dhaka</a>
                        </h5>
                        <div className="my-1">
                          <address>Dhaka, Bangladesh</address><time>July 2016 to July 2018</time>
                        </div>
                      </header>
                      <p className="my-2">
                        Front- and back-end engineering and Machine Learning R&amp;D for <a href="https://github.com/RoboPi-CSEDU">Rupai</a>, a graphically programmable robotics kit, funded by Ministry of Education, Govt. of Bangladesh.
                    </p>
                      <footer className="my-3">
                        <div className="preference-label mb-1">
                          <span>Worked with</span>
                        </div>
                        <div>
                          <span className="tag">python2</span>
                          <span className="tag">opencv</span>
                          <span className="tag">tensorflow</span>
                          <span className="tag">keras</span>
                          <span className="tag">blockly</span>
                          <span className="tag">php</span>
                        </div>
                      </footer>
                    </article>
                  </div>
                </div>
              </section>
              <section className="resume-section my-4">
                <h4>Projects</h4>
                <div className="row my-3" id="projects">
                  {
                    projects.map(project => (
                      <div id={project.hash} className="col-lg-6 col-xs-12">
                        <article>
                          <header className="my-2">
                            <h5>
                              <a href="${project.url[0].url}" target="_blank" rel="noopener" title="${project.url[0].title}">
                                {project.name}
                              </a>
                            </h5>

                            <div className="my-1"><time>{project.year}</time></div>

                            <div className="my-1">
                              {project.winner ? project.winner.map(win =>
                                <div>
                                  <i aria-hidden="true" className="fa fa-trophy"></i>
                                  <span> <a href="${win.url}">{win.platform}</a></span>
                                </div>
                              ) : ''}
                            </div>
                          </header>
                          <p className="my-2">
                            {project.description}
                          </p>
                          <footer className="my-3">
                            <div className="preference-label mb-1">
                              <span>Built with</span>
                            </div>
                            {project.tags.map(tag => <span className="tag">{tag}</span>)}
                          </footer>
                        </article>
                      </div>
                    ))
                  }
                </div>
              </section>
              <section className="resume-section my-4">
                <h4>Education</h4>
                <div className="row my-3" id="education">
                  <div className="col-12">
                    <article>
                      <header className="my-2">
                        <h5>
                          BSc in Computer Science
                      </h5>
                        <div className="my-1">
                          <span><a href="http://www.cse.du.ac.bd/" target="_blank" rel="noopener noreferrer">University of Dhaka</a></span> &nbsp;
                        <address>Dhaka, Bangladesh</address><time>Batch of 2018</time>
                        </div>
                      </header>
                      <p className="my-2">
                        <strong className="text-secondary">CGPA</strong>&nbsp;
                      <span>3.81 / 4.0</span>
                        <br />
                        <strong className="text-secondary">Thesis</strong>&nbsp;
                      <span>M. H. Masum, T. S. Rifat, S. M.
                        Tareeq, H. Heickal, <a href="https://dl.acm.org/citation.cfm?id=3290535">A
                          Framework for Developing Graphically
                          Programmable Low-cost Robotics Kit for Classroom Education.</a>
                        </span>
                        <br />
                      </p><ul>
                        <li>Represented University of Dhaka in <a href="https://icpc.baylor.edu/regionals/finder/dhaka-2015">2015
                          ACM-ICPC Asia Dhaka</a> On Site Regional Contest (Team: DU_Introspection).
                      </li>
                        <li>University scholarship for academic excellence in 2014</li>
                        <li>National Education Board scholarship for 2013 Higher Secondary School Certificate result.</li>
                      </ul>
                      <p />
                    </article>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="my-5 text-center copyright">
            © {new Date().getFullYear()} · Meha Masum · All rights reserved </div>
        </div>
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

    allProjectsJson {
      edges {
        node {
          id
          hash
          name
          type
          year
          url {
            title
            url
          }
          description
          thumbnail
          winner {
            platform
            title
          }
          tags
        }
      }
    }
  }
`
