import React from 'react'
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface WorkspaceLayoutProps {
    children: React.ReactNode
}

export default function Layout({children}: WorkspaceLayoutProps) {
  return  <PanelGroup direction="horizontal">
  <Panel defaultSize={30} minSize={20}>
    left
  </Panel>
  <PanelResizeHandle />
  <Panel defaultSize={30} minSize={20}>
    right
  </Panel>
</PanelGroup>
}