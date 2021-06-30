const path = require('path')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const PostTemplate = path.resolve("src/templates/post.js")
    resolve(
      graphql(`
        {
          allContentfulPost(limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then((res) => {
          
          if (res.errors){
              reject(res.errors)
          }
          res.data.allContentfulPost.edges.forEach(edge => {
              createPage({
                  path: edge.node.slug,
                  component: PostTemplate,
                  context: {
                      slug: edge.node.slug
                  }
              })
          })
          return
      })
    )
  })
}
