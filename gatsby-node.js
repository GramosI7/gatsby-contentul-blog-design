const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      cours: allContentfulCourse {
        edges {
          node {
            title
            desc
            slug
            image {
              fluid(quality: 100, maxWidth: 1920) {
                src
              }
            }
          }
        }
      }
    }
  `)
  data.cours.edges.forEach(({ node }) => {
    createPage({
      path: `cours/${node.slug}`,
      component: path.resolve("./src/templates/Course.js"),
      context: {
        singleSlug: node.slug,
      },
    })
  })
}
