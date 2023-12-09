const initState = []

const musicReducer = (state = initState, action) => {
  switch (action.type) {
    case 'musicList/fetchData':
      return [...action.payload]
      break
    default:
      return state
      break
  }
}

export default musicReducer