import React from 'react'
import { Link } from "react-router"

type Props = {

}

export const Header = (props: Props) => {
  return (
   <header className="header">
        <div>
          <div className="header__brand">Movie App</div>
        </div>
        <nav className="header__nav">
         <Link to="/">Home / Elenco</Link>
        </nav>
      </header>

  )
}
