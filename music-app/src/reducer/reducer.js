import {useReducer} from "react";

export const initState = {
  musicList: [],
  filter: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'musicList/fetchData':
      return {
        ...state,
        musicList: action.payload
      }
      break
    default:
      break;
  }
}
export default reducer