import React from 'react'
import Card from './Card'
import { useSelector, useDispatch } from 'react-redux'
import { detailHeroeAction } from "../redux/actionReducers"
import { Link } from 'react-router-dom'

const BadHeroes = () => {
    const badHeroes = useSelector(store => store.searchList.badOnes)

    const dispatch = useDispatch();
    return (
        // <div className='container d-flex justify-content-center align-items-center gap-5 bg-info'>
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 " >

                {badHeroes.length ?
                    badHeroes.map(card => (
                        <div className="mb-5" key={card.id}  ><Card title={card.name} id={card.id} url={card.image.url} powerstats={card.powerstats} /></div>
                    ))
                    :
                    <div className=" contText">
                        <div className=" noCardText">
                            <h2>Here you will have the evil side of tour TEAM</h2> <p>There are a few RULES the team maximun number is 6 Heroes. The Good and the Bad side have 3
                                places each. Select your favourites  heroes using your mind your heart and also maths... </p>
                            <Link to='search'><button
                                className="btn btn btn-outline-light btn-lg goToSearch"
                            >Get a BAD Team</button></Link> </div>
                    </div>


                }

            </div></div>



    )
}

export default BadHeroes
