import { useState, useEffect } from "react"
import { IntlShape, useIntl } from "gatsby-plugin-intl"

export type OS = "windows" | "mac" | "linux" | "ios" | "android"
type Browser = "chrome" | "edge" | "ie" | "firefox" | "safari" | "opera" | "other"

export type DeviceInfo = {
  mobile: "yes" | "no" | "unknown"
  os: OS | "unknown"
  browser: Browser | "unknown"
}

function isKnownOS(os: string): os is OS {
  return ["windows", "mac", "linux", "ios", "android"].includes(os)
}

/**
 * Pull the device information from the URI hash and verify that is known
 */
export function deviceFromURIHash(): DeviceInfo {
  const i: DeviceInfo = { mobile: "unknown", os: "unknown", browser: "unknown" }
  if (typeof window !== `undefined`) {
    const deviceFromHash = window.location.hash.toLocaleLowerCase().replace("/", "").replace("#", "")
    if (isKnownOS(deviceFromHash)) i.os = deviceFromHash
  }
  return i
}

/**
 * The device name for use in the UI
 * @param d the DeviceInfo
 * @param intl I18N translator
 */
export function localizedDeviceName(d: DeviceInfo, intl: IntlShape): string {
  let deviceTitle = "PC"
  if (d.os === "mac") {
    deviceTitle = "Mac"
  } else if (d.os === "ios") {
    deviceTitle = `iPhone ${intl.formatMessage({ id: "or" })} iPad`
  } else if (d.os === "android") {
    deviceTitle = "Android"
  } else if (d.os === "linux") {
    deviceTitle = "Linux"
  }
  return deviceTitle
}

/**
 * A React hook for translating the device name
 * @param d The device info
 */
export function useDeviceName(d: DeviceInfo): string {
  const intl = useIntl()
  const deviceName = localizedDeviceName(d, intl)
  return deviceName
}

/**
 * Proble device information synchronous
 */
export function probeDeviceInformation(): DeviceInfo {
  const i: DeviceInfo = { mobile: "unknown", os: "unknown", browser: "unknown" }
  if (typeof window === `undefined`) return i
  const platform = window.navigator.platform.toLowerCase()
  const agent = window.navigator.userAgent.toLowerCase()

  if (platform.includes("mac")) {
    i.os = "mac"
    i.mobile = "no"
  } else if (
    agent.includes("cfnetwork") ||
    agent.includes("iphone") ||
    agent.includes("ipad") ||
    platform.includes("iphone") ||
    platform.includes("ipad")
  ) {
    i.os = "ios"
    i.mobile = "yes"
  } else if (agent.includes("android") || platform.includes("android")) {
    i.os = "android"
    i.mobile = "yes"
  } else if (agent.includes("x11")) {
    i.os = "linux"
    i.mobile = "no"
  }

  if (agent.includes("edge") || agent.includes("edg")) {
    i.browser = "edge"
  } else if (agent.includes("opera") || agent.includes("presto")) {
    i.browser = "opera"
  } else if (agent.includes("chrome")) {
    i.browser = "chrome"
  } else if (agent.includes("safari")) {
    i.browser = "safari"
  } else if (agent.includes("gecko") || agent.includes("firefox")) {
    i.browser = "firefox"
  } else if (agent.includes("msie") || agent.includes("trident")) {
    i.browser = "ie"
  } else {
    i.browser = "other"
  }
  return i
}

/**
 * Hook for probing device information
 */
export function useDeviceInformation(defaultInfo: DeviceInfo = { mobile: "unknown", os: "unknown", browser: "unknown" }): DeviceInfo {
  const [info, setInfo] = useState<DeviceInfo>(defaultInfo)

  useEffect(() => {
    if (info) return
    setInfo(probeDeviceInformation())
  })

  return info
}
