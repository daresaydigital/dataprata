import { useState, useEffect } from "react"

export type DeviceInfo = {
  desktop?: boolean
  os?: "windows" | "mac" | "linux" | "ios" | "android"
  browser?: "chrome" | "edge" | "firefox" | "safari" | "opera" | "other"
}

export function useDeviceInformation(): DeviceInfo {
  const [info, setInfo] = useState<DeviceInfo>({})

  useEffect(() => {
    const i: DeviceInfo = {}
    const userOS = window.navigator.platform.toLocaleLowerCase()

    if (userOS.includes("mac")) {
      i.os = "mac"
      i.desktop = true
    } else if (userOS.includes("iphone") || userOS.includes("ipad")) {
      i.os = "ios"
    } else if (userOS.includes("linux") || userOS === null || userOS.includes("android")) {
      i.os = "android"
    }
    setInfo(i)
  })

  return info
}
