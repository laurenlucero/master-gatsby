import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

// console.log(process.env.SANITY_TOKEN);

export default {
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: `https://gatsby.pizza`,
    description: `The best pizza place in Hamilton!`
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // name of plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'nc6x2t0n',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      }
    }
  ]
}