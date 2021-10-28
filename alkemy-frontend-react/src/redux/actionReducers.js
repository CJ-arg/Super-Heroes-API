import axios from "axios";

//constant
const dataInicial = {
  array: [],
  goodOnes: [],
  badOnes: [],
  detail: [],
};
const SEARCH_H_OK = "SEARCH_H_OK";
const DETAIL_H_OK = "DETAIL_H_OK";
const GOODTEAM_H_OK = "GOODTEAM_H_OK";
const BADTEAM_H_OK = "BADTEAM_H_OK";

//reducer
export default function heroesReducer(state = dataInicial, action) {
  switch (action.type) {
    case SEARCH_H_OK:
      console.log(action.payload, "SEARCH_H_OK");
      return { ...state, array: action.payload };
    case DETAIL_H_OK:
      console.log(action.payload, "DETAIL_H_OK");
      return { ...state, detail: action.payload };
    case GOODTEAM_H_OK:
      console.log(action.payload, "GOODTEAM_H_OK");
      if (state.goodOnes.length >= 3) {
        console.log("no se pueden agragr mas de 3 heroes elimine uno ");
        return state;
      }
      // if (action.payload.id === ) {
      //   console.log("no se pueden agragr mas de 3 heroes elimine uno ");
      //   return state;
      // }
      return { ...state, goodOnes: [...state.goodOnes, action.payload] };
    case BADTEAM_H_OK:
      console.log(action.payload, "BADTEAM_H_OK");
      if (state.badOnes.length >= 3) {
        console.log("no se pueden agragr mas de 3 heroes elimine uno ");
        return state;
      }
      return { ...state, badOnes: [...state.badOnes, action.payload] };
    default:
      return state;
  }
}

//actions
export const searchHeroesAction = (name) => async (dispatch, getState) => {
  console.log("getstate", getState().searchList.goodOnes);
  try {
    const res = await axios.get(
      "https://superheroapi.com/api/10159842194449266/search/" + name
    );
    dispatch({
      type: SEARCH_H_OK,
      payload: res.data.results,
    });
    console.log(res.data.results);
  } catch (error) {
    console.log(error);
  }
};

export const detailHeroeAction = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://superheroapi.com/api/10159842194449266/" + id
    );
    dispatch({
      type: DETAIL_H_OK,
      payload: [res.data],
    });
  } catch (error) {
    console.log(error);
  }
};

export const addGoodHeroeAction = (id) => async (dispatch) => {
  // if ()
  //   let local = JSON.parse(localStorage.getItem('goodteam')

  // console.log(local,'local');
  try {
    const res = await axios.get(
      "https://superheroapi.com/api/10159842194449266/" + id
    );
    console.log("addgood", res.data);

    dispatch({
      type: GOODTEAM_H_OK,
      payload: res.data,
    });

    let local = JSON.parse(localStorage.getItem("goodteam"));

    console.log(local, "local");

    if (local === null) {
      localStorage.setItem(
        "goodteam",

        JSON.stringify([res.data])
      );
    } else if (local.length < 3) {
      localStorage.setItem(
        "goodteam",

        JSON.stringify([...local, res.data])
      );
    }
  } catch (error) {
    console.log(error);
  }
};
export const addBadHeroeAction = (id) => async (dispatch) => {
  // if ()
  //   let local = JSON.parse(localStorage.getItem('goodteam')

  // console.log(local,'local');
  try {
    const res = await axios.get(
      "https://superheroapi.com/api/10159842194449266/" + id
    );
    console.log("addbad", res.data);

    dispatch({
      type: BADTEAM_H_OK,
      payload: res.data,
    });

    let local = JSON.parse(localStorage.getItem("badteam"));

    console.log(local, "local");

    localStorage.setItem(
      "badteam",

      JSON.stringify([res.data])
    );
  } catch (error) {
    console.log(error);
  }
};
