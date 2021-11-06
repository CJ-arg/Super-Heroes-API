import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BadHeroes from "./BadHeroes";
import GetATeam from "./GetATeam";
import GetBadTeam from "./GetBadTeam";
import GoodHeroes from "./GoodHeroes";
import './home.css'
import { withRouter } from "react-router";

const Home = () => {
  const [goodList, setGoodList] = useState([])
  const [badList, setBadList] = useState([])
  const [power, setPower] = useState(false)
  const [intelligence, setIntelligence] = useState(0);
  const goodHeroes = useSelector(store => store.searchList.goodOnes)
  const badHeroes = useSelector(store => store.searchList.badOnes)
  // const goodHeroes = useSelector(store => store.searchList.goodOnes)
  // console.log(goodHeroes, 'goodHeroes');
  // const dispatch = useDispatch();

  const setProperties = () => {
    if (goodHeroes.length === 3 && badHeroes.length === 3) {
      let arrayHeroes = [...goodHeroes, ...badHeroes];
      const arrayIntelValue = arrayHeroes.map(heroe => {
        if (heroe.powerstats.intelligence === "null") {
          return 0;
        } else {
          return parseInt(heroe.powerstats.intelligence);
        }
      });
      let intelHeroesValue = arrayIntelValue.reduce((acumulador, elementoActual) => acumulador + elementoActual);
      setIntelligence(intelHeroesValue);
    }
  }
  useEffect(() => {
    const dataG = localStorage.getItem('goodteam')
    // console.log(dataG);
    setGoodList(JSON.parse(dataG));
    const dataB = localStorage.getItem('badteam')
    setBadList(JSON.parse(dataB))
    if ((badList && badList.length === 3) && (goodList && goodList.length === 3)) {
      setPower(true)
    }
    setProperties();
  }, [goodHeroes, badHeroes])
  return (
    <>
      <div className="homeContainer">
        {
          intelligence ? <h1 className="  text-center text-uppercase" >
            Intelligence: {intelligence}</h1> : <h1 className="  text-center text-uppercase" >
            Build Your Own team</h1>
        }
        {goodList ? <GoodHeroes goodHeroes={goodList} />
          : <GetATeam />}
        {badList ? <BadHeroes badHeroes={badList} />
          : <GetBadTeam />}
      </div>

    </>
  );
};

export default withRouter(Home);



