import { useTaskBar } from '@fluctux/hooks'
import { TabsRndType } from '@fluctux/types'
import { cn, LUCIDE_WORKSPACE_ICON_SIZE } from '@fluctux/ui'
import { Maximize, Minimize, Minus, X } from 'lucide-react'
import React, { useState } from 'react'
import { Rnd } from 'react-rnd'

export default function RndWindow({ tabs }: {
    tabs: {
        [key: string]: {
            tabs: TabsRndType[]
        }
    }
}) {
    const {
        isDragStart,
        setIsDragStart,
        updateTabInCategory,
        handleCloseTab,
        parentRef,
        handleMaxMinTabSize
    } = useTaskBar()

    const [enabledTopWindow, setEnabledTopWindow] = useState(false)
    const [enabledLeftWindow, setEnabledLeftWindow] = useState(false)
    const [enabledRightWindow, setEnabledRightWindow] = useState(false)
    const [enabledBottomWindow, setEnabledBottomWindow] = useState(false)
    const [enabledFullWindow, setEnabledFullWindow] = useState(false)
    return <>
        {/* windows placeholders */}
        <div className={cn("w-full h-full absolute hidden opacity-[20%] top-0 left-0 p-2 z-10", enabledFullWindow && "animate-fadeUpWinPlaceHolder flex")}>
            <div className="w-full h-full bg-background-indigo_primary rounded "></div>
        </div>

        <div className={cn("w-full h-1/2 absolute hidden opacity-[20%] top-0 left-0 z-10 p-2", enabledTopWindow && "animate-fadeUpWinPlaceHolder flex")}>
            <div className="w-full h-full bg-background-indigo_primary rounded "></div>
        </div>

        <div className={cn("w-1/2 h-full absolute hidden opacity-[20%] top-0 left-0 z-10 p-2", enabledLeftWindow && "animate-fadeUpWinPlaceHolder flex")}>
            <div className="w-full h-full bg-background-indigo_primary rounded "></div>
        </div>

        <div className={cn("w-1/2 h-full absolute hidden opacity-[20%] top-0 right-0 z-10 p-2", enabledRightWindow && "animate-fadeUpWinPlaceHolder flex")}>
            <div className="w-full h-full bg-background-indigo_primary rounded "></div>
        </div>

        <div className={cn("w-full h-1/2 absolute hidden opacity-[20%] bottom-0 left-0 z-10 p-2", enabledBottomWindow && "animate-fadeUpWinPlaceHolder flex")}>
            <div className="w-full h-full bg-background-indigo_primary rounded "></div>
        </div>
        {
            Object.entries(tabs).map(([key, category]) => {
                if (!key) return
                return category.tabs.map((tab, j) => {
                    return <Rnd
                        onMouseDown={() => updateTabInCategory(key, tab.id!, { isActive: true })}
                        key={j}
                        size={tab.size}
                        position={tab.position}
                        minWidth={280}
                        minHeight={300}
                        bounds="parent"
                        onResize={(e, direction, ref, delta, pos) => {
                            setIsDragStart(true)
                            updateTabInCategory(key, tab.id!, {
                                size: { width: ref.offsetWidth, height: ref.offsetHeight },
                                position: pos
                            });
                        }}

                        onResizeStop={(e, direction, ref, delta, pos) => {
                            setIsDragStart(false)
                        }}
                        onDrag={(e, d) => {

                            updateTabInCategory(key, tab.id!, { isActive: true })


                            if (d.y < 30 && d.y !== 0 && d.x !== 0 && d.x + d.node.offsetWidth !== parentRef.current?.offsetWidth!) {
                                // full window
                                setEnabledFullWindow(true)

                                setEnabledBottomWindow(false)
                                setEnabledLeftWindow(false)
                                setEnabledRightWindow(false)
                                setEnabledTopWindow(false)
                            } else if (d.y === 0 && d.x !== 0 && tab.size?.height !== parentRef.current?.offsetHeight! && d.x + d.node.offsetWidth !== parentRef.current?.offsetWidth!) {
                                // top window
                                setEnabledTopWindow(true)

                                setEnabledFullWindow(false)
                                setEnabledBottomWindow(false)
                                setEnabledLeftWindow(false)
                                setEnabledRightWindow(false)

                            } else if (d.x === 0 && d.y !== 0 && tab.size?.width !== parentRef.current?.offsetWidth! && d.y + d.node.offsetHeight !== parentRef.current?.offsetHeight) {
                                // left window
                                setEnabledLeftWindow(true)

                                setEnabledFullWindow(false)
                                setEnabledBottomWindow(false)
                                setEnabledRightWindow(false)
                                setEnabledTopWindow(false)
                            } else if (d.y !== 0 && d.x + d.node.offsetWidth === parentRef.current?.offsetWidth! && d.y + d.node.offsetHeight !== parentRef.current?.offsetHeight && tab.size?.width !== parentRef.current?.offsetWidth) {
                                // right window
                                setEnabledRightWindow(true)

                                setEnabledFullWindow(false)
                                setEnabledBottomWindow(false)
                                setEnabledLeftWindow(false)
                                setEnabledTopWindow(false)
                            } else if (d.y + d.node.offsetHeight === parentRef.current?.offsetHeight && d.x !== 0 && d.x + d.node.offsetWidth !== parentRef.current?.offsetWidth && tab.size?.height !== parentRef.current?.offsetHeight) {
                                // bottom window
                                setEnabledBottomWindow(true)

                                setEnabledFullWindow(false)
                                setEnabledLeftWindow(false)
                                setEnabledRightWindow(false)
                                setEnabledTopWindow(false)
                            }
                            else {
                                setEnabledFullWindow(false)
                                setEnabledBottomWindow(false)
                                setEnabledLeftWindow(false)
                                setEnabledRightWindow(false)
                                setEnabledTopWindow(false)
                            }



                        }}
                        onDragStart={() => setIsDragStart(true)}
                        onDragStop={(e, d) => {
                            updateTabInCategory(key, tab.id!, { position: { x: d.x, y: d.y } });
                            setIsDragStart(false);
                            setEnabledFullWindow(false)
                            setEnabledBottomWindow(false)
                            setEnabledLeftWindow(false)
                            setEnabledRightWindow(false)
                            setEnabledTopWindow(false)


                            if (d.y < 30 && d.y !== 0 && d.x !== 0) {
                                // full window
                                updateTabInCategory(key, tab.id!, {
                                    size: {
                                        width: parentRef.current?.offsetWidth || 700,
                                        height: parentRef.current?.offsetHeight || 500
                                    },
                                    position: { x: 0, y: 0 },
                                    isMaximized: true
                                });
                            } else if (d.y === 0 && d.x !== 0 && tab.size?.height !== parentRef.current?.offsetHeight! && d.x + d.node.offsetWidth !== parentRef.current?.offsetWidth!) {
                                // top window
                                updateTabInCategory(key, tab.id!, {
                                    size: {
                                        width: parentRef.current?.offsetWidth || 700,
                                        height: (parentRef.current?.offsetHeight || 500) / 2
                                    },
                                    position: { x: 0, y: 0 },
                                    isMaximized: false
                                });
                            } else if (d.x === 0 && d.y !== 0 && tab.size?.width !== parentRef.current?.offsetWidth! && d.y + d.node.offsetHeight !== parentRef.current?.offsetHeight) {
                                // left window
                                updateTabInCategory(key, tab.id!, {
                                    size: {
                                        width: (parentRef.current?.offsetWidth || 700) / 2,
                                        height: parentRef.current?.offsetHeight || 500
                                    },
                                    position: { x: 0, y: 0 },
                                    isMaximized: false
                                });
                            }
                            else if (d.y + d.node.offsetHeight === parentRef.current?.offsetHeight && d.x !== 0 && d.x + d.node.offsetWidth !== parentRef.current?.offsetWidth && tab.size?.height !== parentRef.current?.offsetHeight) {
                                // bottom window
                                updateTabInCategory(key, tab.id!, {
                                    size: {
                                        width: parentRef.current?.offsetWidth || 700,
                                        height: (parentRef.current?.offsetHeight || 500) / 2
                                    },
                                    position: { x: 0, y: parentRef.current?.offsetHeight - (parentRef.current?.offsetHeight || 500) / 2 },
                                    isMaximized: false
                                });
                            }
                            else if (d.y !== 0 && d.x + d.node.offsetWidth === parentRef.current?.offsetWidth! && d.y + d.node.offsetHeight !== parentRef.current?.offsetHeight && tab.size?.width !== parentRef.current?.offsetWidth) {
                                // right window
                                updateTabInCategory(key, tab.id!, {
                                    size: {
                                        width: (parentRef.current?.offsetWidth || 700) / 2,
                                        height: parentRef.current?.offsetHeight || 500
                                    },
                                    position: { x: parentRef.current?.offsetWidth! - (parentRef.current?.offsetWidth || 700) / 2, y: 0 },
                                    isMaximized: false
                                });
                            }


                        }}
                        dragHandleClassName="drag-handle"
                        className={cn("border border-border-color_2 animate-fadeUp rounded overflow-hidden cursor-[default_!important] transition-all bg-background-color_2 shadow-xl ", tab.isActive ? "z-50" : "z-1", isDragStart && "transition-none", tab.isActive && !tab.isMaximized && "border-border-primary_indigo", tab.isMaximized && "border-none")}
                    >
                        <div className="h-[30px] border-b border-border-color_2 fx-flex-between-ic pl-2 pr-1 backdrop-blur-lg drag-handle">
                            <h3 className="font-medium text-workspace_2">My Issue</h3>
                            <div className="fx-flex-cr gap-2">
                                <span className="hover:bg-background-color_5 p-[2px] rounded-tiny cursor-pointer">
                                    <Minus size={LUCIDE_WORKSPACE_ICON_SIZE} />
                                </span>
                                <span className="hover:bg-background-color_5 p-[2px] rounded-tiny cursor-pointer"  >
                                    {
                                        !tab.isMaximized &&
                                        <Maximize onClick={(e) => {
                                            e.preventDefault()
                                            handleMaxMinTabSize(tab.id!, key)

                                        }} size={16} />
                                    }
                                    {
                                        tab.isMaximized &&
                                        <Minimize onClick={(e) => {
                                            e.preventDefault()
                                            handleMaxMinTabSize(tab.id!, key)

                                        }} size={16} />

                                    }
                                </span>

                                <span onClick={() => handleCloseTab(key, tab.id!)} className="p-[2px] cursor-pointer rounded-tiny hover:bg-red-600">
                                    <X size={LUCIDE_WORKSPACE_ICON_SIZE} />
                                </span>
                            </div>
                        </div>
                        <div >
                            {tab.label}
                        </div>
                    </Rnd>

                })

            })
        }
    </>
}


