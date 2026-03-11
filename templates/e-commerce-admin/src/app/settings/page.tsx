"use client"
import { GeneralSettings } from "@/components";
import { useSettingsStore } from "@/components/settings/SettingsWrapper";
import React, { useEffect } from "react";



export default function GeneralSettingsPage() {
       const {setTitle} = useSettingsStore()
        useEffect(() => {
            setTitle("General Settings")
        }, [])
  return <GeneralSettings/>;
}
