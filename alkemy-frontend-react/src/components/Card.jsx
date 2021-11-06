import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { detailHeroeAction } from "../redux/actionReducers"
import "./card.css"

const Card = ({ id, title, url, powerstats, gob, heroLG, heroLB }) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className='card text-center bg-dark padding-20 '>
                <div className="card-body text-light ">
                    <h5 className={(gob === "good") ? "card-titleG" : "card-titleB"}>
                        {title}</h5>
                    <img src={url} alt="hero" className="card-img width=5 img-fluid" />
                    <p className='card-text text-primary'>Combat: {powerstats.combat} <br />
                        Durability: {powerstats.durability}<br />
                        Intelligence: {powerstats.intelligence}<br />
                        Power: {powerstats.power}<br />
                        Speed: {powerstats.speed}<br />
                        Strength: {powerstats.strength}</p>
                    <Link to='details'><button
                        className="btn btn-outline-secondary btn-sm rounded-0"
                        onClick={() => dispatch(detailHeroeAction(id))}
                    >Details</button></Link>
                    {/* <a href="#!" className="btn btn-outline-secondary btn-sm rounded-0">Discard</a> */}
                </div>
            </div >
            {(heroLG && heroLG.length < 3) ? <div className={(heroLG.length === 2) ? "specialButonTeam3" : "specialButonTeam2"}><Link to='search'><button
                className="btn btn btn-outline-dark btn-lg center "
            >Search your Good Team</button></Link> </div> : null}
            {(heroLB && heroLB.length < 3) ? <div className={(heroLB.length === 2) ? "specialButonTeam3b" : "specialButonTeam2b"}><Link to='search'><button
                className="btn btn btn-outline-dark btn-lg center "
            >Search your Bad Team</button></Link> </div> : null}
        </>
    )
}
export default Card
