import React, { Suspense } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate
} from 'react-router-dom'
import Header from '../layout/Header'
import Footer from '../layout/Footer.tsx'
import { ITab } from '../intetfaces/ITab'
import { useDynamicComponentsMap } from '../hooks/useDynamicComponentsMap.ts'

const getDefaultTab = (desiredId: string, tabs: ITab[]): string | undefined => {
  const exists = tabs.some(tab => tab.id === desiredId)
  return exists ? desiredId : tabs[0]?.id
}

const AppRouter: React.FC<{ tabs: ITab[] }> = ({ tabs }) => {
  const defaultTab = getDefaultTab('dummyList', tabs)
  const dynamicComponentsMap = useDynamicComponentsMap(tabs)

  return (
    <Router>

      <Header tabs={tabs}/>
      <Suspense fallback={<div>Loading...</div>}>

        <Routes>

          <Route path="/" element={<Navigate to={`/${defaultTab}`} replace/>}/>

          {tabs.map((tab: ITab) => {
            const Component = dynamicComponentsMap[tab.id]

            return (
              <Route
                key={tab.id}
                path={`/${tab.id}`}
                element={React.createElement(Component)}
              />)
          })}
        </Routes>

      </Suspense>
      <Footer/>

    </Router>
  )
}

export default AppRouter
