// import React, { useState } from 'react'
// //importo para modulo react y hook para estado local y hook de redux para dispach de action

// // import { useDispatch, useSelector } from 'react-redux'
// //tambien trigo la action que busca
// import axios from "axios";
// import SearcList from './SearchList';
// // import './searchBarcss.css'
// // import { } from '../redux/actionReducers'

// const Search = () => {
//   // const dispatch = useDispatch();
//   const [name, setName] = useState("");

//   const handleImputChange = (event, name) => {
//     event.preventDefault();
//     if (event.target.value.length >= 3)
//       setName(event.target.value)
//   };
//   console.log(name)

//   const handleOnClickSearch = (event, name) => {
//     event.preventDefault();
//     axios.get("https://superheroapi.com/api/10159842194449266/search/" + name)
//       .then((resp) => {
//         const { data } = resp;

//         console.log(data.results);
//       })

//   }
//   const handleOnClickClear = (event) => {
//     event.preventDefault();
//     setName("")


//   }


//   return (
//     <div className='rightSide'>
//       <input type='text' placeholder='Search your heroe...' onChange={(e) => handleImputChange(e, name)} />
//       <button onClick={(e) => handleOnClickSearch(e, name)}>Search</button>
//       <button onClick={(e) => handleOnClickClear(e)}>Clear</button>
//       <SearcList />
//     </div>
//   )
// }
// export default Search;



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
  console.log(name)

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

      <input className="btn btn-dark" type='text' placeholder='Search your heroe...' onChange={(e) => handleImputChange(e)} />
      <button className="btn btn-dark" onClick={(e) => handleOnClickSearch(e, name)}>Search</button>
      <button className="btn btn-dark" onClick={(e) => handleOnClickClear(e)}>Clear</button>

      <SearcList />

    </div>
  )
}
export default Search;