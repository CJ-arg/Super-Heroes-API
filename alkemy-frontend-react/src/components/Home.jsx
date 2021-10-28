import React, { useEffect, useState } from "react";
import BadHeroes from "./BadHeroes";
import GoodHeroes from "./GoodHeroes";
import './home.css'





const Home = () => {
  const [goodList, setGoodList] = useState([])
  const [badList, setBadList] = useState([])


  // const goodHeroes = useSelector(store => store.searchList.goodOnes)
  // console.log(goodHeroes, 'goodHeroes');
  // const dispatch = useDispatch();

  useEffect(() => {
    const dataG = localStorage.getItem('goodteam')
    setGoodList(JSON.parse(dataG))
    const dataB = localStorage.getItem('badteam')
    setBadList(JSON.parse(dataB))
  }, [])
  console.log(goodList, badList, 'data');



  return (
    <>


      <div className="homeContainer">
        <h1 className="  text-center text-uppercase" >
          Build Your Own team</h1>
        <GoodHeroes />
        <BadHeroes />
      </div>







    </>
  );
};

export default Home;
