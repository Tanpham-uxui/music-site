import React, {useState} from "react";
import {Button, IconButton, Table} from '@mui/joy'
import useFetch from "../Hook/useFetch";
import {Avatar, Typography} from "@mui/material";
import ReactAudioPlayer from "react-audio-player";
import {Play} from "./Icon/MusicLogo";
import PlaySong from "./PlaySong";
import MusicRowCard from "./Cards/MusicRowCard";


function SongList() {

  const songData = useFetch("https://jsonserver-tanuxuis-projects.vercel.app/Songs")
  const [playSong, setPlaySong] = useState(0)
  function handlePlaySong(e){
    const willPlaySong = document.getElementById("playingSong")
    setPlaySong(e)
    willPlaySong.play()
  }
   return (
      <Table>
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
          songData.map(song=>(
              <MusicRowCard key={song.id} song={song}/>
          ))
        }
        </tbody>
      </Table>
  )
}

export default SongList