import { NavLink } from 'react-router-dom'
import { type ITab } from '../intetfaces/ITab'
import React from 'react'

interface NavbarProps {
  tabs: ITab[]
}

const Navbar: React.FC<NavbarProps> = ({ tabs }) => {
  return (
    <nav className="navbar navbar-expand-lg   navbar-dark bg-dark h-100 pb-0">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {tabs
            .sort(
              (a: { order: number }, b: { order: number }) => a.order - b.order
            )
            .map((tab: ITab) => (
              <li
                key={tab.id}
                className="nav-item ms-1 rounded-top-2 rounded-bottom-0 bg-dark border border-danger border-bottom-0"
              >
                <NavLink className="nav-link text-light" to={`/${tab.id}`}>
                  {tab.title}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
