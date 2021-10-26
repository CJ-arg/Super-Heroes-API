import React from "react";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
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
                <span className=" card-text">{item.name} <Link to='details'><button

                  className="btn btn-dark btn-sm "
                  onClick={() => dispatch(detailHeroeAction(item.id))}
                >Info</button></Link>  </span>
              </div>
            </div>
          </div>
        ))
      }





    </div>
  );
};

export default SearcList;
