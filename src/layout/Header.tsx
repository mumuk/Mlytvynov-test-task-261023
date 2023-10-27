import React from 'react'
import Navbar from './Navbar'
import { ITab } from '../intetfaces/ITab'

type HeaderProps = {
  tabs: ITab[]
}
const Header: React.FC<HeaderProps> = ({ tabs }) => {
  return (
    <header className="bg-primary rounded-bottom-3 mb-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="text-secondary ">Header</h1>
          <div className="hello mt-auto">
            <Navbar tabs={tabs} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
