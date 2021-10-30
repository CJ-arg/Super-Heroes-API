import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BadHeroes from "./BadHeroes";
import GetATeam from "./GetATeam";
import GetBadTeam from "./GetBadTeam";
import GoodHeroes from "./GoodHeroes";
import './home.css'


const Home = () => {
  const [goodList, setGoodList] = useState([])
  const [badList, setBadList] = useState([])
  const goodHeroes = useSelector(store => store.searchList.goodOnes)
  console.log(goodHeroes, 'goodHeroesHome');

  // const goodHeroes = useSelector(store => store.searchList.goodOnes)
  // console.log(goodHeroes, 'goodHeroes');
  // const dispatch = useDispatch();
  useEffect(() => {
    const dataG = localStorage.getItem('goodteam')
    setGoodList(JSON.parse(dataG))
    const dataB = localStorage.getItem('badteam')
    setBadList(JSON.parse(dataB))
  }, [goodHeroes])


  return (
    <>


      <div className="homeContainer">
        <h1 className="  text-center text-uppercase" >
          Build Your Own team</h1>

        {goodList ? <GoodHeroes />
          : <GetATeam />}

        {badList ? <BadHeroes />
          : <GetBadTeam />}






      </div>







    </>
  );
};

export default Home;
