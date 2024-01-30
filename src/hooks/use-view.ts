import { useContext } from 'react'

import { ViewContext, ViewType } from '@/components/provider/ViewProvider'

const useView = () => {
  const viewContext = useContext(ViewContext)

  const isGridView = viewContext?.currentView === 'grid'

  const toggleView = (clickedView: ViewType) => {
    if (clickedView === viewContext?.currentView) {
      return
    }

    if (isGridView) {
      viewContext?.setCurrentView('list')
    } else {
      viewContext?.setCurrentView('grid')
    }
  }

  return {
    isGridView,
    toggleView,
  }
}

export default useView
