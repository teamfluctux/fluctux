import React from 'react'
import { FxFavIcon } from '@fluctux/ui'

export const AppSidebar = () => {
  return (
    <div className='w-full h-full border-r border-border-color_1 bg-background-color_900C'>
      <div className='w-full h-fit p-5 flex justify-between items-center'>
        <div className='flex justify-start items-center gap-2'>
        <FxFavIcon size='sm' variant='theme'/>
        <h1 className='text-read_16 font-semibold text-text-color_2'>Docs</h1>

        </div>
      </div>
    </div>
  )
}
