import * as React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import "modern-normalize"

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

export const IndexLayout: React.FC<Props> = ({ children, pageTitle }) => (
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
          title={`${data.site.siteMetadata.title} - ${pageTitle} - ${data.site.siteMetadata.seo.title}`}
          meta={[
            { name: "title", content: data.site.siteMetadata.seo.title },
            { name: "description", content: data.site.siteMetadata.seo.description },
            { name: "keywords", content: data.site.siteMetadata.keywords },
            { name: "image", content: img },
            { property: "og:type", content: "website" },
            { property: "og:url", content: data.site.siteMetadata.siteUrl },
            { property: "og:title", content: data.site.siteMetadata.seo.title },
            { property: "og:description", content: data.site.siteMetadata.seo.description },
            { property: "og:image", content: "" },
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
            { property: "twitter:image", content: img },
          ]}
        >
          <link href="https://fonts.googleapis.com/css?family=Inter:400,600,700&display=swap" rel="stylesheet" />
          <script type="text/javascript">{`
var sdkInstance="appInsightsSDK";window[sdkInstance]="appInsights";var aiName=window[sdkInstance],aisdk=window[aiName]||function(e){function n(e){t[e]=function(){var n=arguments;t.queue.push(function(){t[e].apply(t,n)})}}var t={config:e};t.initialize=!0;var i=document,a=window;setTimeout(function(){var n=i.createElement("script");n.src=e.url||"https://az416426.vo.msecnd.net/scripts/b/ai.2.min.js",i.getElementsByTagName("script")[0].parentNode.appendChild(n)});try{t.cookie=i.cookie}catch(e){}t.queue=[],t.version=2;for(var r=["Event","PageView","Exception","Trace","DependencyData","Metric","PageViewPerformance"];r.length;)n("track"+r.pop());n("startTrackPage"),n("stopTrackPage");var s="Track"+r[0];if(n("start"+s),n("stop"+s),n("setAuthenticatedUserContext"),n("clearAuthenticatedUserContext"),n("flush"),!(!0===e.disableExceptionTracking||e.extensionConfig&&e.extensionConfig.ApplicationInsightsAnalytics&&!0===e.extensionConfig.ApplicationInsightsAnalytics.disableExceptionTracking)){n("_"+(r="onerror"));var o=a[r];a[r]=function(e,n,i,a,s){var c=o&&o(e,n,i,a,s);return!0!==c&&t["_"+r]({message:e,url:n,lineNumber:i,columnNumber:a,error:s}),c},e.autoExceptionInstrumented=!0}return t}(
{
  instrumentationKey:"${process.env.INSTRUMENTATION_KEY}"
}
);window[aiName]=aisdk,aisdk.queue&&0===aisdk.queue.length&&aisdk.trackPageView({});
        `}</script>
        </Helmet>
        <LayoutMain>{children}</LayoutMain>
      </LayoutRoot>
    )}
  />
)
