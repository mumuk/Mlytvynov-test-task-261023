import { ITab } from '../intetfaces/ITab'

export const fetchTabs = async (): Promise<ITab[]> => {
  try {
    const response = await fetch('http://localhost:3001/tabs')
    return await response.json()
  } catch (error) {
    console.error('Error fetching tabs:', error)
    throw error
  }
}
