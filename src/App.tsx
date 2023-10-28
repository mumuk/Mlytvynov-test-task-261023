import React, { } from 'react'
import './styles.scss'
import AppRouter from './router/AppRouter'

// import { type ITab } from './intetfaces/ITab'
// import data from './server/db.json'

// const fakeFetchTabs = async (): Promise<ITab[]> => {
//   // @ts-expect-error type mismatch
//   const tabsData: ITab[] = data.tabs
//   return await new Promise<ITab[]>(resolve => {
//     setTimeout(() => {
//       resolve(tabsData)
//     }, 1000)
//   })
// }

const App: React.FC = () => {
  // useEffect(() => {
  //   const loadTabs = async (): Promise<void> => {
  //     try {
  //       // const fetchedTabs = await fetchTabs()
  //       const fetchedTabs = await fakeFetchTabs()
  //       setTabs(fetchedTabs)
  //     } catch (err) {
  //       if (err instanceof Error) {
  //         setError(err.message)
  //       } else {
  //         setError('An unknown error occurred.')
  //       }
  //     }
  //   }
  //
  //   void loadTabs()
  // }, [])
  return (
    <>

      <AppRouter/>
    </>
  )
}

export default App
