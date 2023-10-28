import { useEffect, useState } from 'react'
import { fakeFetchTabs } from '../api'
import { ITab } from '../intetfaces/ITab.ts'

export const useTabs = (): {
  tabs: ITab[] | []
  error: string | null
} => {
  const [tabs, setTabs] = useState<[] | ITab[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadTabs = async (): Promise<void> => {
      try {
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

    void loadTabs()
  }, [])

  return {
    tabs,
    error
  }
}
