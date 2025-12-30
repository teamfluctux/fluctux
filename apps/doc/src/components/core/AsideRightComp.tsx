"use client"
import { FxButton } from '@fluctux/ui'
import React from 'react'

export const AsideRightComp = () => {
  return (
<div className="border-l border-border-color_1  h-screen shrink-0 sticky top-0 w-[300px]">
        <div className=" sticky top-0 w-full h-[64px]  border-b border-border-color_1 flex justify-end gap-3 items-center px-5">
          <FxButton variant="secondary" size="md_2">
            Open App
          </FxButton>
          <FxButton size="md_2">Login</FxButton>
        </div>
      </div>
  )
}


