import { Layers, LayoutDashboard } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const SidebarBottom = () => {
    return <>
        <div className='h-[calc(100%-107px)] w-full overflow-y-auto custom-scrollbar'>
            <div className='h-[1200px]'>
                <ul className='p-2 '>
                    <Link href='#'>
                        <li className='text-workspace_2 font-medium text-text-color_4 group fx-flex-cl gap-2 px-2 py-1 hover:bg-background-color_2 rounded-tiny hover:text-text-color_1' >
                            <div className='text-text-svg_default group-hover:text-text-color_1'>
                                <LayoutDashboard size={16} />
                            </div>
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <Link href='#'>
                        <li className='text-workspace_2 font-medium text-text-color_4 group fx-flex-cl gap-2 px-2 py-1 hover:bg-background-color_2 rounded-tiny hover:text-text-color_1' >
                            <div className='text-text-svg_default group-hover:text-text-color_1'>
                                <Layers size={16} />
                            </div>
                            <span>Views</span>
                        </li>
                    </Link>
                </ul>

            </div>
        </div>
    </>
}


