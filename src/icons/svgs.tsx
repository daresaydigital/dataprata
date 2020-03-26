import * as React from "react"
import { colors } from "../styles/variables"

interface IconProps {
  color?: string
  width?: number
  height?: number
}

export const Checkmark: React.FC<IconProps> = ({ color = "#333", width = "18", height = "18" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 18 18">
    <path
      fill={color}
      // eslint-disable-next-line max-len
      d="M7.907 14c.377 0 .673-.151.878-.464l5.01-7.941c.146-.23.205-.448.205-.65 0-.542-.398-.945-.937-.945-.366 0-.597.14-.823.504l-4.354 7.14L5.679 8.83c-.204-.257-.43-.369-.743-.369-.543 0-.936.403-.936.951 0 .247.07.46.274.7l2.778 3.47c.231.285.5.419.855.419z"
    />
  </svg>
)

export const WindowsIcon: React.FC<IconProps> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="49" fill="none" viewBox="0 0 80 49">
    <path
      fill={colors.black}
      // eslint-disable-next-line max-len
      d="M28.683 15.883l9.25-1.256.004 8.899-9.246.053-.008-7.696zm9.245 8.669l.008 8.907-9.246-1.268v-7.7l9.238.06zm1.122-10.09l12.265-1.785v10.736l-12.265.097v-9.048zm12.267 10.173l-.002 10.688-12.265-1.727-.017-8.98 12.284.02z"
    />
    <rect width="66" height="46" x="7" y="1" stroke={colors.black} strokeWidth="2" rx="3.429" />
    <path fill={colors.black} d="M0 44.429h80A4.571 4.571 0 0175.429 49H4.57A4.571 4.571 0 010 44.429z" />
  </svg>
)

export const MacIcon: React.FC<IconProps> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="49" fill="none" viewBox="0 0 80 49">
    <path
      fill={colors.black}
      // eslint-disable-next-line max-len
      d="M40.14 17.321c-.873 0-2.224-.988-3.647-.952-1.877.024-3.599 1.083-4.567 2.762-1.949 3.368-.502 8.344 1.399 11.082.932 1.334 2.033 2.834 3.491 2.786 1.4-.06 1.925-.905 3.623-.905 1.686 0 2.164.905 3.647.87 1.506-.025 2.463-1.358 3.384-2.703 1.064-1.548 1.506-3.047 1.53-3.13-.036-.013-2.93-1.12-2.965-4.453-.024-2.786 2.284-4.119 2.391-4.178-1.315-1.917-3.336-2.131-4.041-2.179-1.841-.143-3.384 1-4.245 1zm3.109-2.81c.777-.928 1.291-2.225 1.148-3.511-1.112.048-2.451.738-3.252 1.667-.718.821-1.34 2.142-1.172 3.404 1.231.095 2.499-.63 3.276-1.56"
    />
    <rect width="66" height="46" x="7" y="1" stroke={colors.black} strokeWidth="2" rx="3.429" />
    <path fill={colors.black} d="M0 44.429h80A4.571 4.571 0 0175.429 49H4.57A4.571 4.571 0 010 44.429z" />
  </svg>
)

export const IosIcon: React.FC<IconProps> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="48" fill="none" viewBox="0 0 80 48">
    <path
      fill={colors.black}
      fillRule="evenodd"
      // eslint-disable-next-line max-len
      d="M63 18h1a2 2 0 012 2v24a2 2 0 01-2 2H52a2 2 0 01-2-2V20a2 2 0 012-2h1a2 2 0 002 2h6a2 2 0 002-2zm-2-2h3a4 4 0 014 4v24a4 4 0 01-4 4H52a4 4 0 01-4-4V20a4 4 0 014-4h9z"
      clipRule="evenodd"
    />
    <path
      fill={colors.gray.light}
      stroke={colors.black}
      strokeWidth="2"
      d="M17.7 1h29.6C48.72 1 50 2.268 50 4v40c0 1.732-1.28 3-2.7 3H17.7c-1.42 0-2.7-1.268-2.7-3V4c0-1.732 1.28-3 2.7-3z"
    />
    <rect width="2" height="4" x="13" y="8" fill={colors.black} rx="1" />
    <rect width="2" height="4" x="13" y="14" fill={colors.black} rx="1" />
    <path fill={colors.black} d="M16 42H49V46H16z" />
    <circle cx="32.5" cy="45" r="1.5" fill={colors.gray.light} />
    <path
      fill={colors.black}
      // eslint-disable-next-line max-len
      d="M32.601 18.597c-.63 0-1.606-.718-2.633-.692-1.356.017-2.6.787-3.3 2.008-1.407 2.45-.362 6.07 1.011 8.06.674.97 1.468 2.06 2.522 2.026 1.01-.043 1.39-.658 2.616-.658 1.218 0 1.563.658 2.634.632 1.088-.017 1.779-.987 2.444-1.965A8.714 8.714 0 0039 25.731c-.026-.009-2.116-.814-2.142-3.238-.017-2.026 1.65-2.995 1.728-3.039-.95-1.394-2.41-1.55-2.92-1.584-1.33-.104-2.443.727-3.065.727zm2.245-2.043c.562-.675.933-1.619.83-2.554-.804.035-1.77.537-2.35 1.212-.517.597-.967 1.558-.846 2.476.89.07 1.805-.459 2.366-1.134"
    />
  </svg>
)

export const AndroidIcon: React.FC<IconProps> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="48" fill="none" viewBox="0 0 80 48">
    <path
      fill={colors.black}
      fillRule="evenodd"
      // eslint-disable-next-line max-len
      d="M49 44V21h16v23a2 2 0 01-2 2H51a2 2 0 01-2-2zm2-28a4 4 0 00-4 4v24a4 4 0 004 4h12a4 4 0 004-4V20a4 4 0 00-4-4H51zm4 26a1 1 0 100 2h4a1 1 0 100-2h-4z"
      clipRule="evenodd"
    />
    <path
      fill={colors.gray.light}
      stroke={colors.black}
      strokeWidth="2"
      d="M16.7 1h29.6C47.72 1 49 2.268 49 4v40c0 1.732-1.28 3-2.7 3H16.7c-1.42 0-2.7-1.268-2.7-3V4c0-1.732 1.28-3 2.7-3z"
    />
    <rect width="2" height="6" x="49" y="6" fill={colors.black} rx="1" />
    <path fill={colors.black} d="M15 44H48V46H15z" />
    <path fill={colors.black} d="M15 2H48V4H15z" />
    <path
      fill={colors.black}
      // eslint-disable-next-line max-len
      d="M36.391 21.013l1.493-2.563a.301.301 0 00-.521-.3l-1.513 2.595a9.298 9.298 0 00-3.85-.813 9.298 9.298 0 00-3.85.813l-1.513-2.595a.303.303 0 00-.414-.11.297.297 0 00-.11.41l1.494 2.563C25.032 22.395 23.288 24.977 23 28h18c-.288-3.023-2.032-5.605-4.609-6.987zm-8.524 4.483a.751.751 0 01-.754-.748c0-.413.339-.747.754-.747.418 0 .755.336.755.747a.75.75 0 01-.755.748zm8.264 0a.751.751 0 01-.755-.748c0-.413.34-.747.755-.747.417 0 .754.336.754.747a.75.75 0 01-.754.748z"
    />
  </svg>
)

export const ArrowIcon: React.FC<IconProps> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" fill="none" viewBox="0 0 24 20">
    <path
      fill="#333"
      // eslint-disable-next-line max-len
      d="M24 10.006c0-.508-.22-1.04-.564-1.374L15.481.594C15.09.198 14.623 0 14.181 0c-1.09 0-1.813.755-1.813 1.759 0 .57.233 1.003.576 1.337l2.794 2.824 2.526 2.216H1.924C.772 8.136 0 8.892 0 10.006c0 1.115.772 1.858 1.924 1.858h16.352l-2.537 2.216-2.795 2.812c-.331.346-.576.78-.576 1.337 0 1.003.723 1.771 1.814 1.771.441 0 .895-.198 1.287-.582l7.967-8.05c.343-.334.564-.867.564-1.362z"
    />
  </svg>
)
