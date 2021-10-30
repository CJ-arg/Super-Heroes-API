import React from "react";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addGoodHeroeAction, addBadHeroeAction } from "../redux/actionReducers"
import { detailHeroeAction } from "../redux/actionReducers"
import Details from "./Details";
import "./searchList.css"

const SearcList = () => {

  const heroes = useSelector(store => store.searchList.array)
  console.log(heroes, 'este');
  const dispatch = useDispatch();
  return (


    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4" >
      {
        heroes.map(item => (
          <div className="card" >
            <div key={item.id} className="gridcard" >
              <img src={item.image.url} className="card-img-top" alt="..." />
              <div className="card-body">
                <div></div>
                <Link to='/'>
                  <span className=" card-text">{item.name} </span><br />
                  {(item.biography.alignment === "good") ? <button
                    className="btn btn-dark btn-sm"
                    onClick={() => dispatch(addGoodHeroeAction(item.id))}
                  >Add good team </button> :
                    <button
                      className="btn btn-dark btn-sm "
                      onClick={() => dispatch(addBadHeroeAction(item.id))}
                    >Add bad team </button>
                  }
                  <Link to='details'>
                    <button

                      className="btn btn-dark btn-sm float-right"
                      onClick={() => dispatch(detailHeroeAction(item.id))}
                    >Info</button></Link>




                </Link>
              </div>
            </div>
          </div>
        ))
      }





    </div>
  );
};

export default SearcList;
