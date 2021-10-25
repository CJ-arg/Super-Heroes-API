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
// const SEARCH_H_OK = "SEARCH_H_OK";

//reducer
export default function heroesReducer(state = dataInicial, action) {
  switch (action.type) {
    case SEARCH_H_OK:
      return { ...state, array: action.payload };
    case DETAIL_H_OK:
      return { ...state, detail: action.payload };
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
    console.log("elres", res.data);
  } catch (error) {
    console.log(error);
  }
};
