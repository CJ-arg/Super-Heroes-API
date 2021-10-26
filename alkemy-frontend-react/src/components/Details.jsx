// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addGoodHeroeAction } from "../redux/actionReducers"
import "./details.css"
import Navbarmenu from "./Navbarmenu";



const Details = () => {

  const goodHeroes = useSelector(store => store.searchList.detail)
  console.log(goodHeroes, 'goodHeroes');
  const dispatch = useDispatch();

  const eye = "item.eye-color"
  const hair = `item.hair-color`



  return (
    <div>
      <Navbarmenu />
      {
        goodHeroes.map((item) => (
          <div className="container  text-center detailcard" >

            <div key={item.id} className=" card border-primary width: 18rem mb-2" >
              <img src={item.image.url} className="card-img-center width=100 img-fluid " alt="Heroe details" />
              <div className="card-body">
                <p>{item.name}</p>
                <p>{item.appearance.weight[1]}</p>
                <p>{item.appearance.height[1]}</p>
                <p>{item.biography.aliases[0]}</p>
                <p>{hair}</p>
                <p>{eye}</p>
                <p></p>
                <Link to='/'>




                  <button

                    className="btn btn-dark btn-sm float-right"
                    onClick={() => dispatch(addGoodHeroeAction(item.id))}
                  >Add team </button></Link>
              </div>
            </div>
          </div>
        ))
      }



    </div >
  );
};

export default Details;
