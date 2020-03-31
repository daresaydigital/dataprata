import * as React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import "modern-normalize"
import { ApplicationInsights } from "@microsoft/applicationinsights-web"

import "../styles/normalize"
import img from "../content/dataprata.png"

import { LayoutRoot } from "../components/LayoutRoot"
import { LayoutMain } from "../components/LayoutMain"

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
      siteUrl: string
      author: {
        name: string
        url: string
        email: string
        twitter: string
      }
      seo: {
        title: string
        description: string
      }
    }
  }
}

interface Props {
  pageTitle: string
}

const useAnalytics = (): boolean => process.env.ANALYTICS === "true"

const hotJarScript = (): JSX.Element => (
  <script>{`
(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:${process.env.HOTJAR_ID},hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  `}</script>
)

const tagManagerScript = (): JSX.Element => <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG}`} />

const gtagScript = (): JSX.Element => (
  <script>{`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${process.env.GTAG}');
  `}</script>
)

interface AnalyticsContext {
  trackEvent: (name: string) => void
}

let analytics: AnalyticsContext = {
  trackEvent: (name: string) => {
    // eslint-disable-next-line no-console
    console.log(`Should be tracking event in production: ${name}`)
  },
}
if (useAnalytics()) {
  const appInsights = new ApplicationInsights({
    config: {
      instrumentationKey: process.env.INSTRUMENTATION_KEY,
    },
  })
  try {
    appInsights.loadAppInsights()
    appInsights.trackPageView()
    analytics = {
      trackEvent: (name) => {
        try {
          appInsights.trackEvent({ name })
        } catch (error) {
          // To bad :/
        }
        try {
          gtag("event", name)
        } catch (error) {
          // To bad :/
        }
      },
    }
  } catch (error) {
    // To bad :/
  }
}

export const AppContext = React.createContext<AnalyticsContext>(analytics)
export const IndexLayout: React.FC<Props> = ({ children, pageTitle }) => {
  return (
    <AppContext.Provider value={analytics}>
      <StaticQuery
        query={graphql`
          query IndexLayoutQuery {
            site {
              siteMetadata {
                title
                description
                siteUrl
                author {
                  name
                  url
                  email
                  twitter
                }
                seo {
                  title
                  description
                }
              }
            }
          }
        `}
        render={(data: StaticQueryProps) => (
          <LayoutRoot>
            <Helmet
              title={pageTitle}
              titleTemplate={`${data.site.siteMetadata.title} - %s`}
              defaultTitle={data.site.siteMetadata.title}
              meta={[
                { name: "title", content: data.site.siteMetadata.seo.title },
                { name: "description", content: data.site.siteMetadata.seo.description },
                { name: "keywords", content: data.site.siteMetadata.keywords },
                { name: "image", content: `${data.site.siteMetadata.siteUrl}${img}` },
                { property: "og:type", content: "website" },
                { property: "og:site_name", content: data.site.siteMetadata.title },
                { property: "og:url", content: data.site.siteMetadata.siteUrl },
                { property: "og:title", content: data.site.siteMetadata.seo.title },
                { property: "og:description", content: data.site.siteMetadata.seo.description },
                { property: "og:image", content: `${data.site.siteMetadata.siteUrl}${img}` },
                { property: "twitter:card", content: "summary_large_image" },
                { property: "twitter:url", content: data.site.siteMetadata.siteUrl },
                {
                  name: `twitter:creator`,
                  content: data.site.siteMetadata.author.twitter,
                },
                { property: "twitter:title", content: data.site.siteMetadata.seo.title },
                {
                  property: "twitter:description",
                  content: data.site.siteMetadata.seo.description,
                },
                { property: "twitter:image", content: `${data.site.siteMetadata.siteUrl}${img}` },
              ]}
            >
              <link href="https://fonts.googleapis.com/css?family=Inter:400,600,700&display=swap" rel="stylesheet" />
              {useAnalytics() && tagManagerScript()}
              {useAnalytics() && gtagScript()}
              {useAnalytics() && hotJarScript()}
            </Helmet>
            <LayoutMain>{children}</LayoutMain>
          </LayoutRoot>
        )}
      />
    </AppContext.Provider>
  )
}
