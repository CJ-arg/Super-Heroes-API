import React, { useEffect, useState } from 'react'
import Card from './Card'
import "./goodHeroes.css"
import { useSelector, useDispatch } from 'react-redux'
import { detailHeroeAction } from "../redux/actionReducers"
import Search from './Search'
import { Link } from 'react-router-dom'

const GoodHeroes = () => {
  const goodHeroes = useSelector(store => store.searchList.goodOnes)
  console.log(goodHeroes, 'goodHeroes');
  const dispatch = useDispatch();

  // const [goodList, setGoodList] = useState([])
  // const [badList, setBadList] = useState([])

  // useEffect(() => {
  //   const dataG = localStorage.getItem('goodteam')
  //   setGoodList(JSON.parse(dataG))
  //   const dataB = localStorage.getItem('badteam')
  //   setBadList(JSON.parse(dataB))
  // }, [])
  // console.log(goodList, badList, 'data');



  return (
    <div className="container">

      {goodHeroes.length ?

        goodHeroes.map(card => (
          <div className="row row-cols-1 row-cols-md-3 g-4">

            <div key={card.id}  ><Card title={card.name} id={card.id} url={card.image.url} gob={card.biography.alignment} powerstats={card.powerstats} /></div>

          </div>
        ))
        :
        <div className=" contText">

          <div className=" noCardText">
            <h2>It's time to recreate the ancient struggle of good against evil</h2> <p>There are a few RULES the team maximun number is 6 Heroes. The Good and the Bad side have 3
              places each. Select your favourites  heroes using your mind your heart and also maths... </p>
            <Link to='search'><button

              className="btn btn btn-outline-light btn-lg goToSearch"

            >Get a Team</button></Link> </div>
        </div>


      }
    </div>





  )
}

export default GoodHeroes



  // const [goodList, setGoodList] = useState([])
  // const [badList, setBadList] = useState([])


  // const goodHeroes = useSelector(store => store.searchList.goodOnes)
  // console.log(goodHeroes, 'goodHeroes');
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const dataG = localStorage.getItem('goodteam')
  //   setGoodList(JSON.parse(dataG))
  //   const dataB = localStorage.getItem('badteam')
  //   setGoodList(JSON.parse(dataB))
  // }, [])
  // console.log(goodList, 'data');