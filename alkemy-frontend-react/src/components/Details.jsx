import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'

const Details = () => {



  const heroe = useSelector(store => store.searchList.detail)

  console.log(heroe, 'este3');
  return (
    <div>
      {
        heroe.map((item) => (
          <div className="card" >

            <div key={item.id} className="gridcard" >
              <img src={item.image.url} className="card-img-top" alt="..." />
              <div className="card-body">
                {/* <span className=" card-text">{item.name}<button

                  className="btn btn-dark btn-sm "
                  onClick={() => dispatch(detailHeroeAction(item.id))}
                >Info</button></span> */}
              </div>
            </div>
          </div>
        ))
      }



    </div>
  );
};

export default Details;
