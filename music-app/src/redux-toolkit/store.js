import {configureStore} from "@reduxjs/toolkit";
import musicsSlice from "../slices/musicsSlice";
import filtersSlice from "../slices/filtersSlice";

const store = configureStore({
  reducer: {
    musicListReducer:musicsSlice.reducer
    , filtersReducer:filtersSlice.reducer
  }
})

export default store