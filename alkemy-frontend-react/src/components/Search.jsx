import React, { useState } from 'react'
//importo para modulo react y hook para estado local y hook de redux para dispach de action
import { useDispatch } from 'react-redux'
//tambien trigo la action que busca
import axios from "axios";
import SearcList from './SearchList';
// import './searchBarcss.css'
import { searchHeroesAction } from '../redux/actionReducers'
import Navbarmenu from './Navbarmenu';


const Search = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const handleImputChange = (event) => {
    event.preventDefault();
    if (event.target.value.length >= 3)
      setName(event.target.value)
  };

  const handleOnClickSearch = (event, name) => {
    event.preventDefault();
    dispatch(searchHeroesAction(name))
  }
  const handleOnClickClear = (e) => {
    e.preventDefault();
    setName("")


  }


  return (
    <div >
      <Navbarmenu />
      <div className="container text-center  mt-3 mb-2">
        <input className="btn btn-dark m-1" type='text' placeholder='Search your heroe...' onChange={(e) => handleImputChange(e)} />
        <button className="btn btn-dark m-1" onClick={(e) => handleOnClickSearch(e, name)}>Search</button>
        <button className="btn btn-dark m-1" onClick={(e) => handleOnClickClear(e)}>Clear</button></div>


      <SearcList />

    </div>
  )
}
export default Search;