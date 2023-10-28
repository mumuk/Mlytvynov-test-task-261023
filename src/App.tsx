import React from 'react'
import './styles.scss'
import AppRouter from './router/AppRouter'
import { useTabs } from './hooks/useTabs.ts'

const App: React.FC = () => {
  const {
    tabs,
    error
  } = useTabs()

  return (
    <>
      {(error != null) && <p>{error}</p>}
      {tabs.length > 0 && <AppRouter tabs={tabs}/>}
    </>
  )
}

export default App
