const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const filename = getNode(node.parent)
    const slug = createFilePath({ node, getNode, basePath: "pages" })
    console.log(slug)
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

/** Create Page */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  //   console.log(JSON.stringify(result, null, 4))

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
              slug: node.fields.slug
          }
      });
  })
}
