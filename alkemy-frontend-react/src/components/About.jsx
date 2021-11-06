import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        < div className=" contText">
            <div className=" noCardText">
                <h2>This app was crated by Carlos Janon as a challenge for Alkemy </h2> <p>CHALLENGE FRONTEND
                    React 🚀 Objetivo
                    Desarrollar una aplicación para crear un equipo de superhéroes que consumirá una API externa y
                    mostrará diferentes atributos a nivel individual de cada miembro y del equipo consolidado.</p>
                <p>● Email: challenge@alkemy.org</p>
                <p> ● Password: react</p>
                <Link to='login'><button
                    className="btn btn btn-outline-light btn-lg goToSearch"
                >Login</button></Link></div>
        </div>
    )
}
export default About
