import {legacy_createStore as createStore} from "redux";
import rootReducer from "../reducer/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
const composerEnhancer = composeWithDevTools()
const store = createStore(rootReducer, composerEnhancer)

export default store
