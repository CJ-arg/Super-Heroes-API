import React from "react";
import BadHeroes from "./BadHeroes";
import GoodHeroes from "./GoodHeroes";
import './home.css'
import Navbarmenu from "./Navbarmenu";
import SearcList from "./SearchList";




const Home = () => {
  return (
    <>
      <Navbarmenu />

      <div className="homeContainer">
        <h1 className=" text-center text-uppercase" >
          Build Your Own team</h1>

        <GoodHeroes />
        <BadHeroes />

      </div>
    </>
  );
};

export default Home;
