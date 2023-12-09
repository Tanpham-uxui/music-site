import React, {useState} from "react";
import {Box, Typography} from "@mui/material";
import {Divider, Button, FormControl, FormLabel, Input, Stack} from "@mui/joy";
import thumbnailExample from '../../asset/image/thumbnail-example.jpg'
import FileService from "../services/fileService";
import SongList from "../SongList";
import {useDispatch} from "react-redux";
import filtersSlice from "../../slices/filtersSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
const schema = yup.object({
  songName: yup.string().required(),
  artist: yup.string().required(),
  album: yup.string().required(),
  musician: yup.string().required(),
}).required();
function Admin() {
  const [state, setState] = useState({
    tempThumbnail: "",
    audio: {},
    thumbnail: {}
  })
  const handleSelectThumbnail = (e) => {
    const tempThumbnail = URL.createObjectURL(e.target.files[0])
    setState({
      ...state,
      tempThumbnail: tempThumbnail,
      thumbnail: e.target.files[0]
    })
  }
  const handleSelectAudio = (e) => {
    setState({
      ...state,
      audio: e.target.files[0]
    })
  }
  const {tempThumbnail, thumbnail, audio} = state
  const handleUploadInformation = async () => {
    let uploadImage = await FileService.uploadImage(thumbnail)
    let uploadAudio = await FileService.uploadAudio(audio);
  }
  const dispatch = useDispatch()
  const {register, handleSubmit, reset, formState:{errors}} = useForm({
    resolver:yupResolver(schema)
  })
  return (
      <>
        <Divider>
          <Typography variant="h4">Admin Page</Typography>
        </Divider>
        <Stack direction={{xs: "column", sm: "row"}} spacing={2} alignItems="stretch" justifyContent="center">
          <Stack direction="column" spacing={2} sx={{width: "100%"}}>
            <FormControl>
              <FormLabel>Song Name</FormLabel>
              <Input placeholder="Song Name"/>
            </FormControl>
            <FormControl>
              <FormLabel>Artist Name</FormLabel>
              <Input placeholder="Artist Name"/>
            </FormControl>
            <FormControl>
              <FormLabel>Musician</FormLabel>
              <Input placeholder="Musician Name"/>
            </FormControl>
            <FormControl>
              <FormLabel>Album Name</FormLabel>
              <Input placeholder="Album Name"/>
            </FormControl>
            <FormControl>
              <FormLabel>Music</FormLabel>
              {/*<Input onClick={() => document.getElementById('fileAudio').click()}/>*/}
              <input id="fileAudio" type="file" accept="audio/*" className={"d-none"} onChange={handleSelectAudio}/>
            </FormControl>
          </Stack>
          <Stack direction="column" spacing={2} sx={{width: "100%"}}>
            <FormControl>
              <FormLabel>Thumbnail</FormLabel>
              <Box>
                <img role='button' width="100%" height="100%"
                     style={{borderRadius: "1rem"}}
                     src={tempThumbnail || thumbnailExample}
                     onClick={() => document.getElementById('fileImage').click()}/>
              </Box>
              <input id="fileImage" onChange={handleSelectThumbnail} type="file" accept="image/*" className={"d-none"}/>
            </FormControl>
          </Stack>
        </Stack>
        <Stack sx={{marginTop: "1rem"}}>
          <Button type="button" onClick={handleUploadInformation}>Upload</Button>
        </Stack>
        <Divider sx={{margin: "1rem"}}>
          <Typography variant="h6">Music List</Typography>
        </Divider>
        <FormControl sx={{marginY: "1rem"}}>
          <FormLabel>Search Song</FormLabel>
          <Input onInput={(e)=>dispatch(filtersSlice.actions.setSearchText(e.target.value))} placeholder="Search Song"/>
        </FormControl>
        <SongList/>
      </>
  )
}
export default Admin

