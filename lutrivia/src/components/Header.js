import React, { Fragment } from 'react'

const Header = (props) => {

  return (
    <Fragment>
      <h1>Lutrivia</h1>
      <div className="new-game">
        <button>New Game</button>
        Score: 1
      </div>
    </Fragment>
  )

}

export default Header;