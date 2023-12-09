import {combineReducers} from "redux";
import musicReducer from "./musicSlice";
import filterReducer from "./filterSlice";

const rootReducer = combineReducers({
  musicList: musicReducer,
  filters: filterReducer
})
export default rootReducer;