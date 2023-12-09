const initState = {
  searchText: ''
}


const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case'filters/searchText': {
      return {
        ...state,
        searchText: action.payload
      }
    }
      break;
    default:
      return state
      break
  }
}

export default filterReducer