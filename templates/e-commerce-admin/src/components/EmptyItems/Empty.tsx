"use client"
import React, { createContext, useContext, useState } from 'react'

type EmptyContextType = {
    emptyTitle: React.ReactNode
    setEmptyTitle: (children: React.ReactNode) => void
}

const EmptyContext = createContext<EmptyContextType | null>(null)
const useEmptyContext = () => {
    const context = useContext(EmptyContext)
    if(!context) 
        throw new Error("EmptyContext Components must be used within EmptyContext.Provider")
}


export const Empty = () => {
    const [emptyTitle, setEmptyTitle] = useState<React.ReactNode>(null)
  return (
    <EmptyContext.Provider value={{emptyTitle, setEmptyTitle}}>
      <div className='w-full h-full flex justify-center items-center'>

      </div>
    </EmptyContext.Provider>
  )
}

