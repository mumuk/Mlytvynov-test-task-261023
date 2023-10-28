import React, { lazy, Suspense, useEffect, useState } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate
} from 'react-router-dom'
import Header from '../layout/Header'
import Footer from '../layout/Footer.tsx'
import { type ITab } from '../intetfaces/ITab'
// import {fetchTabs} from '../api'

import data from '../server/db.json'

const fakeFetchTabs = async (): Promise<ITab[]> => {
  // @ts-expect-error type mismatch
  const tabsData: ITab[] = data.tabs
  return await new Promise<ITab[]>(resolve => {
    setTimeout(() => {
      resolve(tabsData)
    }, 1000)
  })
}

const createComponentsMap = (tabs: ITab[]): Record<string, React.LazyExoticComponent<any>> => {
  const componentsMap: Record<string, React.LazyExoticComponent<any>> = {}
  console.log('tabs', tabs)
  tabs.forEach((tab) => {
    componentsMap[tab.id] = lazy(async () => await import(`../tabs/${tab.id}.tsx`))
  })

  return componentsMap
}

const AppRouter: React.FC = () => {
  const [tabs, setTabs] = useState<ITab[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // fetchTabs()
    fakeFetchTabs()
      .then(data => {
        setTabs(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching tabs:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

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
              />
            )
          })}
        </Routes>
      </Suspense>
      <Footer/>
    </Router>
  )
}

export default AppRouter
