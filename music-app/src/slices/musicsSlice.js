import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import async from "async";

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
            .addCase(addNewMusicThunkAction.pending,(state,action)=>{

            })
            .addCase(addNewMusicThunkAction.fulfilled , (state, action)=> {
                state.musics.push(action.payload)
            })
    }
})

export const fetchMusicThunkAction = createAsyncThunk(
    'musicList/fetchMusicThunkAction',
    async() => {
        let musicRes = await fetch('https://jsonserver-navy.vercel.app/Songs')
        let data = await musicRes.json()
        data = data.sort(function (item_1, item_2){
            return Number (item_2.id - item_1.id)
        })
        return data
    }
)
export const addNewMusicThunkAction = createAsyncThunk('musicList/addNewMusicThunkAction',
    async(newMusic)=>  {
    let newMusicRes = await fetch('https://jsonserver-navy.vercel.app/Songs',{
        method: 'Post',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(newMusic)
    })
        let data = await newMusicRes.json()

        return data
    } )
export default musicsSlice