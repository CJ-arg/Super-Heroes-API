import React, { useState } from 'react';
import './navbarmenu.css'

const Navbarmenu = () => {
    const [showLinks, setShowLinks] = useState(false)

    return (
        <div className="Nav">
            <div className='leftSide'>
                <div className='links' id={showLinks ? 'hidden' : ''}>
                    <a href='/home'>Home </a>
                    <a href='/search'> Build</a>
                    <a href='/about'>About </a></div>
                <button onClick={() => setShowLinks(!showLinks)}>  Open  </button>
            </div>
            <div className="resetContainer">
                <a href='/Home'><button className="btn btn-outline-warning " onClick={() => localStorage.clear()}> Reset  </button></a></div>
        </div>
    )
}

export default Navbarmenu