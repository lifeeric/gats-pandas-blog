import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export default function Home({ data }) {
  return (
    <Layout>
      <h1>Amazing Pandas Eating Things</h1>
      <h4>{data.allMarkdownRemark.totalCount}</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={css`
              text-decoration: none;
              color: inherit;
            `}
          >
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}

              <span
                css={css`
                  color: #bbb;
                `}
              >
                — {node.frontmatter.date}
              </span>
            </h3>

            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </Layout>
  )
}

/** GraphQL */
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            title
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
