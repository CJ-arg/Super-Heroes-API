import React from 'react'
import Card from './Card'
import { useSelector, useDispatch } from 'react-redux'

const BadHeroes = () => {
    const badHeroes = useSelector(store => store.searchList.badOnes)
    console.log(badHeroes, 'badHeroes');
    const dispatch = useDispatch();
    return (
        <div className='container d-flex justify-content-center align-items-center gap-5 bg-info'>
            <div className="row p-5">
                {
                    badHeroes.map(card => (
                        <div key={card.id}  ><Card title={card.name} url={card.image.url} /></div>
                    ))


                }

            </div>
        </div>

    )
}

export default BadHeroes
