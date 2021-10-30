import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { detailHeroeAction } from "../redux/actionReducers"

const Card = ({ id, title, url, powerstats, gob }) => {
    console.log(title);
    const dispatch = useDispatch();
    return (

        <div className='card text-center bg-dark padding-20 '>
            <div className="card-body text-light ">
                <h5 className={(gob === "good") ? "card-titleG" : "card-titleB"}>
                    {/* <h6 className='card-title'> */}
                    {title}</h5>
                {/* </h6> */}
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

                <a href="#!" className="btn btn-outline-secondary btn-sm rounded-0">Discard</a>


            </div>

        </div >
    )
}

export default Card
