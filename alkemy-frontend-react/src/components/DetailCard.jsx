import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addGoodHeroeAction } from "../redux/actionReducers";


const DetailCard = () => {
  const dispatch = useDispatch()
  return (
    <div key={item.id} className=" card mb-3 width: 540px mb-2" >
      <div className="row g-0">
        <div className="col-md-4">
          <img src={item.image.url} className="img-fluid rounded-start" alt="Heroe details" /></div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.name}</p>
            <p>{item.appearance.weight[1]}</p>
            <p>{item.appearance.height[1]}</p>
            <p>{item.biography.aliases[0]}</p>
            <p>Hair color: {item.appearance["hair-color"]}</p>
            <p>Eye color: {item.appearance["eye-color"]} </p>
          </div>
          <Link to='/'>
            <button
              className="btn btn-dark btn-sm float-right"
              onClick={() => dispatch(addGoodHeroeAction(item.id))}
            >Add team </button></Link>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;

