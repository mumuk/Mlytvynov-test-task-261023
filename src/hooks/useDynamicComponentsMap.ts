import React, { lazy } from 'react'
import { ITab } from '../intetfaces/ITab'

export const useDynamicComponentsMap = (tabs: ITab[]): Record<string, React.LazyExoticComponent<any>> => {
  const componentsMap: Record<string, React.LazyExoticComponent<any>> = {}

  tabs.forEach((tab) => {
    componentsMap[tab.id] = lazy(async () => await import(`../tabs/${tab.id}.tsx`))
  })

  return componentsMap
}
