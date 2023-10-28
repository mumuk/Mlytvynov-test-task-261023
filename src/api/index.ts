import { ITab } from '../intetfaces/ITab'
import data from '../server/db.json'

export const fetchTabs = async (): Promise<ITab[]> => {
  try {
    const response = await fetch('http://localhost:3001/tabs')
    return await response.json()
  } catch (error) {
    console.error('Error fetching tabs:', error)
    throw error
  }
}

export const fakeFetchTabs = async (): Promise<ITab[]> => {
  // @ts-expect-error type mismatch
  const tabsData: ITab[] = data.tabs
  return await new Promise<ITab[]>(resolve => {
    setTimeout(() => {
      resolve(tabsData)
    }, 1000)
  })
}
