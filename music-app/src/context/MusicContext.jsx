import {createContext, useReducer} from "react";
import reducer, {initState} from "../reducer/reducer";

export const MusicContext = createContext();
function MusicProvider({children}){
  const [state, dispatch] = useReducer(reducer,initState)
  return(
      <MusicContext.Provider value={{reducer,initState}}>
        {children}
      </MusicContext.Provider>
  )
}
export default MusicProvider