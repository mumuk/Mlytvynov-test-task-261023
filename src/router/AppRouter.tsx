import React, { lazy, Suspense } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate
} from 'react-router-dom'
import Header from '../layout/Header'
import Footer from '../layout/Footer.tsx'
import { type ITab } from '../intetfaces/ITab'

const createComponentsMap = (tabs: ITab[]): Record<string, React.LazyExoticComponent<any>> => {
  const componentsMap: Record<string, React.LazyExoticComponent<any>> = {}
  console.log('tabs', tabs)
  tabs.forEach((tab) => {
    componentsMap[tab.id] = lazy(async () => await import(`../tabs/${tab.id}.tsx`))
  })

  return componentsMap
}

const AppRouter: React.FC<{ tabs: ITab[] }> = ({ tabs }) => {
  const defaultTab = tabs[2]?.id
  const dynamicComponentsMap = createComponentsMap(tabs)

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
