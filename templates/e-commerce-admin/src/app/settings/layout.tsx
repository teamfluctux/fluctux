import { SettingsSidebar } from "@/components/settings";
import { Settingsheader } from "@/components/settings/header";
import { SettingsWrapperProvider } from "@/components/settings/SettingsWrapper";
import { ScrollArea } from "@fluctux/ui";
import React from "react";
import { ChildLoading } from "./ChildLoading";

type SettingsLayoutPropsType = {
  children: React.ReactNode;
};

export default function Layout({ children }: SettingsLayoutPropsType) {
  return (
    <SettingsWrapperProvider>
      <div className="w-full h-screen overflow-hidden p-2 bg-background-color_900C">
        <div className="rounded-2xl bg-background-color_950C border-border-color_2 overflow-hidden border w-full h-full flex justify-start items-start">
          <SettingsSidebar />
          <ScrollArea className="w-full h-full flex justify-center items-center">
            <ChildLoading>
              <div className="max-w-[800px] w-full h-full px-3">
                <Settingsheader />
                {children}
              </div>
            </ChildLoading>
          </ScrollArea>
        </div>
      </div>
    </SettingsWrapperProvider>
  );
}
