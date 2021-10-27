import React from 'react'
import Card from './Card'
import { useSelector, useDispatch } from 'react-redux'
import { detailHeroeAction } from "../redux/actionReducers"

const GoodHeroes = () => {
  const goodHeroes = useSelector(store => store.searchList.goodOnes)
  console.log(goodHeroes, 'goodHeroes');
  const dispatch = useDispatch();
  return (
    // <div className='container d-flex justify-content-center align-items-center gap-5 bg-info'>
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 " >

        {
          goodHeroes.map(card => (
            <div className="mb-5" key={card.id}  ><Card title={card.name} id={card.id} url={card.image.url} gob={card.biography.alignment} powerstats={card.powerstats} /></div>
          ))


        }

      </div></div>



  )
}

export default GoodHeroes

