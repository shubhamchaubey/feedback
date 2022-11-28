import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {

  return (
    <>
      <header style={{backgroundColor: 'rgba(0,0,0,0.4)', color: '#ff6a95'}}>
        <div className='container'>
        <Link to='/'>
        <h2>{props.text}</h2>
        </Link>
        </div>
      </header>
    </>
  )
}

export default Header
