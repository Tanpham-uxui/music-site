export const getMusicList = (payload) =>{
  return{
    type: 'musicList/fetchData',
    payload
  }
}
export const setSearchText = (payload) => {
  return {
    type: 'filters/searchText',
    payload
  }
}