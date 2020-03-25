import * as React from "react"

interface IconProps {
  color?: string
  width?: number
  height?: number
}

export const Checkmark: React.FC<IconProps> = ({ color, width, height }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width || "18"} height={height || "18"} fill="none" viewBox="0 0 18 18">
    <path
      fill={color || "#333"}
      // eslint-disable-next-line max-len
      d="M7.907 14c.377 0 .673-.151.878-.464l5.01-7.941c.146-.23.205-.448.205-.65 0-.542-.398-.945-.937-.945-.366 0-.597.14-.823.504l-4.354 7.14L5.679 8.83c-.204-.257-.43-.369-.743-.369-.543 0-.936.403-.936.951 0 .247.07.46.274.7l2.778 3.47c.231.285.5.419.855.419z"
    />
  </svg>
)
