import React, {useEffect, useState} from "react";
import {Button, IconButton, Table} from '@mui/joy'
import MusicRowCard from "./Cards/MusicRowCard";
import {useDispatch, useSelector} from "react-redux";
import {Box} from "@mui/material";
import {getMusicList} from "../reducer/actions";


function SongList() {

  // const songData = useFetch("https://jsonserver-tanuxuis-projects.vercel.app/Songs")
  const musicList = useSelector((data) => data.musicList)
  const {searchText} = useSelector((data) => data.filters)
  const dispatch = useDispatch()
  useEffect(() => {
    async function getMusic() {
      let musicRest = await fetch('https://jsonserver-tanuxuis-projects.vercel.app/Songs')
      let data = await musicRest.json()
      dispatch(getMusicList(data))
    }

    getMusic()
  }, [])
  const queryMusicList = () => {
    let queryMusic = [...musicList]
    if (searchText) {
      queryMusic = queryMusic.filter((m) => m.songName.toLowerCase().includes(searchText.toLowerCase()))
    }
    return queryMusic

  }
  const remainMusicList = queryMusicList()
  return (
      <Box>
        <Table hoverRow>
          <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Song</th>
            <th>Artist</th>
            <th>Musician</th>
            <th>Album</th>
            <th>btn</th>
          </tr>
          </thead>
          <tbody>
          {
            remainMusicList.map(song => (
                <MusicRowCard key={song.id} song={song}/>
            ))
          }
          </tbody>
        </Table>
      </Box>
  )
}

export default SongList