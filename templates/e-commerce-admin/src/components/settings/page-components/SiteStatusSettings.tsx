"use client"

import { useEffect } from "react"
import { useSettingsStore } from "../SettingsWrapper"

export const SiteStatusSettings = () => {
    const {setTitle} = useSettingsStore()
    useEffect(() => {
        setTitle("Site Status")
    }, [])
  return <div>SiteStatusSettings</div>
}