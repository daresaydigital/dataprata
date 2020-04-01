import * as React from "react"
import { useIntl } from "gatsby-plugin-intl"

import styled from "@emotion/styled"
import { Container } from "../components/Container"
import { IndexLayout } from "../layouts"
import { Display, Paragraph } from "../components/typography"
import { colors } from "../styles/variables"
import { Crumb } from "../components/Crumbs"

const crumbs: Crumb[] = [
  {
    id: "homepageCrumb",
    target: "/",
  },
  {
    id: "devicePageCrumb",
    target: "/device",
  },
  {
    id: "servicePageCrumb",
    target: "/service",
  },
  {
    id: "messengerpageCrumb",
    target: "/teams",
  },
]

const StyledDiv = styled.div`
  margin-bottom: 16px;
  .link {
    color: ${colors.black};
    letter-spacing: -0.2px;
  }
`

const MessengerPage: React.FC = () => {
  const intl = useIntl()
  const [loading, setLoading] = React.useState(true)
  const [device, setDevice] = React.useState("mac")

  React.useEffect(() => {
    const deviceFromHash = window.location.hash.toLocaleLowerCase()
    let deviceTitle = "Mac"
    if (deviceFromHash.includes("ios")) {
      deviceTitle = `iPhone ${intl.formatMessage({ id: "or" })} iPad`
    }
    setDevice(deviceTitle)
    setLoading(false)
  })

  return (
    <IndexLayout pageTitleID="messengerpageTitle" showCTA={false} crumbs={crumbs}>
      <Container>
        {!loading && (
          <>
            <div style={{ marginBottom: 24 }}>
              <Display>
                {intl.formatMessage({ id: "messengerpageTitle" })} {device}
              </Display>
            </div>
            <StyledDiv>
              <Paragraph color={colors.gray.dark}>{intl.formatMessage({ id: "comingSoon" })}</Paragraph>
            </StyledDiv>
          </>
        )}
      </Container>
    </IndexLayout>
  )
}

export default MessengerPage
