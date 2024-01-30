'use client'

import React, { createContext, Dispatch, SetStateAction, useState } from 'react'

export type ViewType = 'grid' | 'list'

type Props = {
  children: React.ReactNode
}

type ViewContextType = {
  currentView: ViewType
  setCurrentView: Dispatch<SetStateAction<ViewType>>
}

export const ViewContext = createContext<ViewContextType | undefined>(undefined)

const ViewProvider = ({ children }: Props) => {
  const [currentView, setCurrentView] = useState<ViewType>('grid')

  return (
    <ViewContext.Provider value={{ currentView, setCurrentView }}>
      {children}
    </ViewContext.Provider>
  )
}

export default ViewProvider
