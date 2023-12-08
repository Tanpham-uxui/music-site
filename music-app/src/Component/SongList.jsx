import React from "react";
import {Table} from '@mui/joy'
import useFetch from "../Hook/useFetch";
import {Avatar, Typography} from "@mui/material";
import ReactAudioPlayer from "react-audio-player";


function SongList() {
  const songData = useFetch("https://jsonserver-tanuxuis-projects.vercel.app/Songs")
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
          songData.map((song)=>(
              <tr key={song.id}>
                <td><Avatar src={song.thumbnail}/></td>
                <td><Typography variant="body2">{song.songName}</Typography></td>
                <td><Typography variant="body2">{song.artist}</Typography></td>
                <td><Typography variant="body2">{song.musician}</Typography></td>
                <td><Typography variant="body2">{song.album}</Typography></td>
                <td><ReactAudioPlayer src={song.audio} controls/></td>
              </tr>

          ))
        }
        </tbody>
      </Table>
  )
}

export default SongList