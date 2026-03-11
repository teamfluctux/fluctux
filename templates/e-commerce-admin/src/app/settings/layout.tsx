import { SettingsSidebar } from "@/components/settings";
import { Settingsheader } from "@/components/settings/header/header";
import { SettingsWrapperProvider } from "@/components/settings/SettingsWrapper";
import { ScrollArea, WorkSpaceLinkList } from "@fluctux/ui";
import React from "react";

type SettingsLayoutPropsType = {
  children: React.ReactNode;
};

export default function Layout({ children }: SettingsLayoutPropsType) {
  return (
    <SettingsWrapperProvider>
      <div className="w-full h-screen overflow-hidden p-2 bg-background-color_900C">
        <div className="rounded-rounded_10C bg-background-color_950C border-border-color_2 overflow-hidden border w-full h-full flex justify-start items-start">
          <SettingsSidebar />
          <ScrollArea className="w-full h-full flex justify-center items-center">
            <div className="max-w-[800px] w-full h-full">
              <Settingsheader />
              {children}
            </div>
          </ScrollArea>
        </div>
      </div>
    </SettingsWrapperProvider>
  );
}
