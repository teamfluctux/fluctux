import React from "react";
import { GeneralSettings } from "@/components";
import { SETTINGS_TITLE_DESC } from "@/constants";

export async function generateMetadata() {
  const metaData = SETTINGS_TITLE_DESC["/settings"];
  return {
    title: metaData?.title,
    desc: metaData?.desc,
  };
}

export default function GeneralSettingsPage() {
  return <GeneralSettings />;
}
