import React, {useState, useEffect} from 'react'
import './styles.scss'
import AppRouter from './router/AppRouter'
// import {fetchTabs} from './api/'
import {ITab} from './intetfaces/ITab'
import data from './server/db.json'

const fakeFetchTabs = (): Promise<ITab[]> => {
  // @ts-ignore
  const tabsData: ITab[] = data.tabs;
  return new Promise<ITab[]>(resolve => {
    setTimeout(() => {
      resolve(tabsData);
    }, 1000);
  });
}


const App: React.FC = () => {
  const [tabs, setTabs] = useState<[] | ITab[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadTabs = async () => {
      try {
        // const fetchedTabs = await fetchTabs()
        const fetchedTabs = await fakeFetchTabs()
        setTabs(fetchedTabs)

      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('An unknown error occurred.')
        }
      }
    }

    loadTabs()
  }, [])
  return (
    <>

      {error && <p>{error}</p>}
      {tabs.length > 0 && <AppRouter tabs={tabs}/>}
    </>
  )
}

export default App
