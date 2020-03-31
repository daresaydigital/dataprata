import * as React from "react"
import { graphql } from "gatsby"

import styled from "@emotion/styled"
import { Page } from "../components/Page"
import { Container } from "../components/Container"
import { IndexLayout } from "../layouts"
import { Display } from "../components/typography"

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
      }
    }
  }
}

const BodyDiv = styled.div`
  margin-top: 32px;
  p {
    margin-bottom: 32px;
    line-height: 1.8;
    font-size: 16px;
  }
  blockquote {
    margin-top: -20px;
    p {
      margin: 0;
      font-size: 90%;
    }
  }
  h2 {
    margin: 42px 0 16px 0;
  }
`

export const PageTemplate: React.FC<PageTemplateProps> = ({ data }) => (
  <IndexLayout pageTitleID={data.markdownRemark.frontmatter.title} crumbs={[]}>
    <Page>
      <Container>
        <Display>{data.markdownRemark.frontmatter.title}</Display>
        {/* eslint-disable-next-line react/no-danger */}
        <BodyDiv dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Container>
    </Page>
  </IndexLayout>
)

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`

export default PageTemplate
