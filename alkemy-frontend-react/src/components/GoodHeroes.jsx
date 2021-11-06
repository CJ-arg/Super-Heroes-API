import React from 'react'
import Card from './Card'
import "./goodHeroes.css"
import { Link } from 'react-router-dom'

const GoodHeroes = ({ goodHeroes }) => {

  return (
    // <div className='container d-flex justify-content-center align-items-center gap-5 bg-info'>
    <div className="container ">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 " >
        {goodHeroes.length ?
          goodHeroes.map(card => (
            <div className="mb-5" key={card.id}  ><Card title={card.name} id={card.id} url={card.image.url} gob={card.biography.alignment} powerstats={card.powerstats} /></div>
          ))
          :
          <div className=" contText">
            <div className=" noCardText">
              <h2>It's time to recreate the ancient struggle of good against evil</h2> <p>There are a few RULES the team maximun number is 6 Heroes. The Good and the Bad side have 3
                places each. Select your favourites  heroes using your mind your heart and also maths... </p>
              <Link to='search'><button
                className="btn btn btn-outline-light btn-lg goToSearch"
              >Get a GOOD Team</button></Link> </div>
          </div>
        }
      </div>
    </div>
  )
}

export default GoodHeroes



