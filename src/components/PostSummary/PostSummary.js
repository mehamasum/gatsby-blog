import React from 'react'
import Tag from '../Tag/Tag'
import { Link } from 'gatsby'
import '../../styles/post.scss'

class Summary extends React.Component {
  render() {
    const { post } = this.props
    const title = post.frontmatter.title || post.fields.slug
    return (
      <div>
        <h1 className="postPreviewHeading">
          <Link to={post.fields.slug}>{title}</Link>
        </h1>

        <small>
          {post.frontmatter.date} in{' '}
          <Link to={`/blog/categories/${post.frontmatter.category}`}>
            {post.frontmatter.category}
          </Link>
          {` • ${post.timeToRead} min read`}
        </small>

        <p>{post.frontmatter.spoiler}</p>
      </div>
    )
  }
}

export default Summary
