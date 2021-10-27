import React from 'react'
import Card from './Card'
import { useSelector, useDispatch } from 'react-redux'
import { detailHeroeAction } from "../redux/actionReducers"

const BadHeroes = () => {
    const badHeroes = useSelector(store => store.searchList.badOnes)
    console.log(badHeroes, 'badHeroes');
    const dispatch = useDispatch();
    return (
        // <div className='container d-flex justify-content-center align-items-center gap-5 bg-info'>
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 " >

                {
                    badHeroes.map(card => (
                        <div className="mb-5" key={card.id}  ><Card title={card.name} id={card.id} url={card.image.url} powerstats={card.powerstats} /></div>
                    ))


                }

            </div></div>



    )
}

export default BadHeroes
