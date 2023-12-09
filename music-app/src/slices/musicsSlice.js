import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const musicsSlice = createSlice({
    name: 'musicList',
    initialState: {
        status: 'idle',
        musics: []
    },
    reducers: {
        fetchMusics: (state, action) => {
            state = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMusicThunkAction.pending,(state, action)=>{
            state.status= 'loading'
        })
            .addCase(fetchMusicThunkAction.fulfilled, (state, action) => {
            state.status = 'idle'
            state.musics = [...action.payload]
        })
    }
})

export const fetchMusicThunkAction = createAsyncThunk(
    'musicList/fetchMusicThunkAction',
    async() => {
        let musicRes = await fetch('https://jsonserver-navy.vercel.app/Songs')
        let data = await musicRes.json()
        return data
    }
)
export default musicsSlice