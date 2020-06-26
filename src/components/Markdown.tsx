// Usage:
// import { Markdown } from "../components/Markdown"
// <Markdown id="hello" />

import * as React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { useState, FC, useEffect } from "react"

interface MarkdownProps {
  id: string
}

const Placeholder = () => null

export const Markdown: React.FC<MarkdownProps> = ({ id }) => {
  const { locale } = useIntl()
  // While the component is loading, we'll render a fallback placeholder.
  // (The Placeholder is a component that renders nothing).
  const [Component, setComponent] = useState<FC>(() => Placeholder)
  // After the initial render, kick off a dynamic import to fetch
  // the real component, and set it into our state.
  useEffect(() => {
    /* eslint-disable */
    import(`../intl/md/${locale}/${id}`).then((Thing) => {
      setComponent(() => Thing.default)
    })
    /* eslint-enable */
  }, [])
  return <Component />
}
