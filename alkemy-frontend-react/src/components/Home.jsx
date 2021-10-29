import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        <div className=" contText">


          <div className=" noCardText">
            <h2>It's time to recreate the ancient struggle of good against evil</h2> <p>There are a few RULES the team maximun number is 6 Heroes. The Good and the Bad side have 3
              places each. Select your favourites  heroes using your mind your heart and also maths... </p>
            <Link to='search'><button

              className="btn btn btn-outline-light btn-lg goToSearch"

            >Get a Team</button></Link> </div></div>


        <GoodHeroes />
        <BadHeroes />
      </div>







    </>
  );
};

export default Home;
