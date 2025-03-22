'use client'
import React from 'react'
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface WorkspaceLayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: WorkspaceLayoutProps) {
  return <PanelGroup direction="horizontal" id={"workspace-layout"}>
    <Panel defaultSize={18} minSize={18} maxSize={25} >
      <div className='w-full fx-primary-bg h-screen border-r fx-border-color'>

      </div>
    </Panel>
    <PanelResizeHandle />
    <Panel defaultSize={82}>
      <div className='w-full fx-secondary-bg h-screen'>

      </div>
    </Panel>
  </PanelGroup>
}