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

  const goodHeroes = useSelector(store => store.searchList.goodOnes)
  const badHeroes = useSelector(store => store.searchList.badOnes)

  // const goodHeroes = useSelector(store => store.searchList.goodOnes)
  // console.log(goodHeroes, 'goodHeroes');
  // const dispatch = useDispatch();
  useEffect(() => {
    const dataG = localStorage.getItem('goodteam')
    setGoodList(JSON.parse(dataG))
    const dataB = localStorage.getItem('badteam')
    setBadList(JSON.parse(dataB))
    if ((badList && badList.length === 3) && (goodList && goodList.length === 3)) {
      setPower(true)
    }
  }, [goodHeroes, badHeroes])

  console.log(power, goodHeroes, badHeroes, 'oodHome');

  return (
    <>


      <div className="homeContainer">
        {
          power ? <h1 className="  text-center text-uppercase" >
            powem</h1> : <h1 className="  text-center text-uppercase" >
            Build Your Own team</h1>
        }


        {goodList ? <GoodHeroes />
          : <GetATeam />}

        {badList ? <BadHeroes />
          : <GetBadTeam />}

      </div>

    </>
  );
};

export default withRouter(Home);


