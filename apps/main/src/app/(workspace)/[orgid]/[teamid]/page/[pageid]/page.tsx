import { ICON_DEFAULT_COLOR } from '@/constants/workspace'
import { FxButton, LUCIDE_WORKSPACE_ICON_SIZE } from '@fluctux/ui'
import { Settings } from 'lucide-react'
import React from 'react'

export default function WorkspacePage() {
  return (
    <div className='flex justify-center items-start h-screen'>

      <div className='w-full h-full overflow-y-auto custom-scrollbar'>
        <div className="wpage-header w-full h-[40px] sticky top-0 border-b border-border-color_1 fx-flex-center">
          <div className='w-full'>

          </div>

          <div className=''>
            <FxButton variant='secondary' radius='tiny' className="group w-[30px] h-[30px] fx-flex-center rounded-[5px] ">

            <Settings  size={LUCIDE_WORKSPACE_ICON_SIZE} className=' text-text-svg_default group-hover:text-text-color_1' />
            </FxButton>
          </div>
        </div>
        <div>
          <div className='h-[1500px]'></div>
        </div>
      </div>

      <div className='w-[250px] transition flex-shrink-0 border-l border-border-color_1 h-full bg-background-color_2'>

      </div>
    </div>
  )
}


