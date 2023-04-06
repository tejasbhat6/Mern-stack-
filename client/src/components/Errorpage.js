import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/Error.css'

const Errorpage = () => {
  return (
    <>
    <div id ="notfound">
        <div className='notfound'>
            <div className='notfound-404'>
                <h1>404</h1>
            </div>
            <h2>We are sorry,Page not found</h2>
            <p className='mb-5'>The page you are looking is not found</p>

            <NavLink to ="/">Back to HomePage</NavLink>
        </div>
    </div>
    </>
  )
}

export default Errorpage
