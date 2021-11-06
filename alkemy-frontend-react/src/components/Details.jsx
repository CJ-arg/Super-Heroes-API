// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addGoodHeroeAction, addBadHeroeAction } from "../redux/actionReducers"
import "./details.css"
import Navbarmenu from "./Navbarmenu";

const Details = () => {
  const goodHeroes = useSelector(store => store.searchList.detail)
  console.log(goodHeroes, 'goodHeroes');
  const dispatch = useDispatch();
  return (
    <div className="contDetail">
      {
        goodHeroes.map((item) => (
          <div className="containerDetail">
            <div key={item.id} className="card1 mb-3 detailcard " >
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={item.image.url} className="img-fluid rounded-start" alt="Heroe details" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className={(item.biography.alignment === "good") ? "card-titleG" : "card-titleB"}>
                      {item.name}</h3>
                    {/* <p>{item.name}</p> */}
                    <p>{item.appearance.weight[1]}</p>
                    <p>{item.appearance.height[1]}</p>
                    <p>{item.biography.aliases[0]}</p>
                    <p>Hair color: {item.appearance["hair-color"]}</p>
                    <p>Eye color: {item.appearance["eye-color"]}</p>
                    <p>{item.biography.alignment}</p>
                  </div>
                  <Link to='/'>
                    {(item.biography.alignment === "good") ? <button
                      className="btn btn-dark btn-sm float-right"
                      onClick={() => dispatch(addGoodHeroeAction(item.id))}
                    >Add good team </button> :
                      <button
                        className="btn btn-dark btn-sm float-right"
                        onClick={() => dispatch(addBadHeroeAction(item.id))}
                      >Add bad team </button>
                    }
                  </Link>

                </div>
              </div>
            </div>
          </div>
        ))
      }



    </div >
  );
};

export default Details;



