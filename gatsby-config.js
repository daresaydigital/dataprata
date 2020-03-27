/* eslint-disable no-console */
const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Rebuilding using environment config: '${activeEnv}'`)
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Dataprata",
    description: `Information about how to communicate with family and friends over the Internet, started as a reaction on people being
    isolated during the COVID-19 crisis.`,
    keywords: "daresay, daresaydigital, gibon, dataprata, ringmera, gatsby, covid19, vitecherupp",
    siteUrl: "https://dataprata.se",
    author: {
      name: "Daresay",
      url: "https://daresay.co",
      email: "webadmin@daresay.co",
      twitter: "daresaydigital",
    },
    seo: {
      title: "Lär dig kommunicera över internet med vänner och anhöriga",
      description: "Information om hur du kan hålla kontakt med dina nära och kära under COVID-19 krisen.",
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
        siteUrl: "https://dataprata.se",
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-typescript",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",

        // WebApp Manifest Configuration
        appName: "Dataprata",
        appDescription: "Information om hur du kan hålla kontakt med dina nära och kära under COVID-19 krisen.",
        developerName: "Daresay",
        developerURL: "https://daresay.co",
        dir: "auto",
        lang: "sv-SE",
        background: "#333",
        theme_color: "#FFF543",
        display: "standalone",
        orientation: "any",
        start_url: "/sv",
        version: "1.0",

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: true,
        },
      },
    },
  ],
}
