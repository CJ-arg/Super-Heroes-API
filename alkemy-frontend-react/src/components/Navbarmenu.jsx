import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './navbarmenu.css'
import Search from './Search';
// import camara from "../assets/images/camara.png"

const Navbarmenu = () => {
    const [showLinks, setShowLinks] = useState(false)
    // const camera = './img/camara.png'


    return (
        <div className="Nav">
            <div className='leftSide'>
                <div className='links' id={showLinks ? 'hidden' : ''}>
                    {/* <Link to='/'> <img className="portada" src={camara} alt='camara image' /></Link> */}
                    <a href='/Home'>Home </a>
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