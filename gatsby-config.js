module.exports = {
  siteMetadata: {
    title: "Ring mera",
    description: "Information about how to communicate with family and friends during the covid-19 crisis.",
    keywords: "daresay, daresaydigital, gibon, ringmera, gatsby, covid19, vitecherupp",
    siteUrl: "https://ringmera.se",
    author: {
      name: "Daresay",
      url: "https://daresay.co",
      email: "webadmin@daresay.co",
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1rem",
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`sv`],
        // language file path
        defaultLanguage: `sv`,
        // option to redirect to `/sv` when connecting `/`
        redirect: true,
      },
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://ringmera.se",
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-typescript",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
  ],
}
