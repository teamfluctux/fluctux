import { FxButton, LUCIDE_WORKSPACE_ICON_SIZE, LUCIDE_WORKSPACE_SECONDARY_ICON_SIZE, Popover, PopoverContent, PopoverTrigger } from '@fluctux/ui'
import { Bookmark, ChevronLeft, ChevronRight, FileText, Forward, Link2 } from 'lucide-react'
import React from 'react'

export const Header = () => {
  return (
    <div className='pl-[320px] border-b h-[60px] w-full fixed top-0 left-0 z-40 border-border-color_1 bg-background-color_950C'>
    <div className='flex justify-between items-center px-5 w-full h-full  '>
        <div className='flex justify-between items-center gap-5 w-fit'>

          
          <div className="flex-shrink-0 flex justify-end items-center gap-2 w-fit">
              <FxButton
                variant="secondary"
                className="w-[28px] h-[28px] rounded  p-0"
                >
                <ChevronLeft size={LUCIDE_WORKSPACE_ICON_SIZE} />
              </FxButton>
              <FxButton
                variant="secondary" 
                className="w-[28px] h-[28px] rounded  p-0"
                >
                <ChevronRight size={LUCIDE_WORKSPACE_ICON_SIZE} />
              </FxButton>
            </div>
            <div className="w-full text-workspace_2 flex justify-start items-center gap-2  font-weight_450">
            <span>Getting Started</span>
            <span>/</span>
            <span>Hello world</span>
          </div>
                  </div>
          <div className="flex justify-start items-center gap-2">
            <FxButton
              className="rounded flex justify-center items-center p-0 w-[30px] h-[30px]"
              variant="ghost_zinc"
            >
              <Bookmark size={LUCIDE_WORKSPACE_SECONDARY_ICON_SIZE} />
            </FxButton>

            <Popover>
              <PopoverTrigger asChild className="outline-none">
                <FxButton
                  className="px-3 rounded flex justify-center items-center gap-1 text-text-color_2 hover:text-text-color_1"
                  variant="secondary"
                >
                  <span className="text-workspace_2 font-medium">Share</span>
                  <Forward size={LUCIDE_WORKSPACE_SECONDARY_ICON_SIZE} />
                </FxButton>
              </PopoverTrigger>
              <PopoverContent
                className="w-[200px] rounded h-fit bg-background-color_925C border border-border-color_1 p-1 leading-7"
                align="end"
              >
                <FxButton size="sm" variant="ghost_zinc" className="w-full px-2 rounded-tiny justify-start text-text-color_2 hover:!text-text-color_1 hover:!bg-background-color_800C ">
                  <Link2 size={LUCIDE_WORKSPACE_ICON_SIZE} />
                  <span>Copy Link</span>
                </FxButton>
                <FxButton size="sm" variant="ghost_zinc" className="w-full px-2 rounded-tiny justify-start text-text-color_2 hover:!text-text-color_1 hover:!bg-background-color_800C ">
                  <FileText size={LUCIDE_WORKSPACE_ICON_SIZE} />
                  <span>Download PDF</span>
                </FxButton>
               
              </PopoverContent>
            </Popover>
             <FxButton size="sm" >
            Sign in
          </FxButton>

            
          </div>
          </div>
      
    </div>
  )
}