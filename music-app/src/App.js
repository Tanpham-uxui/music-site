import logo from './logo.svg';
import './App.css';
import SideBar from "./Component/SideBar";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import Home from "./Layout/Home";
import Songs from "./Layout/Songs";
const darkTheme = createTheme({
  palette:{
    mode:'dark'
  },
})
function App() {
  return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <div className="App">
          <SideBar>
            <Routes>
              <Route path='/'/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/songs' element={<Songs/>}/>
              <Route path='/albums'/>
              <Route path='/artists'/>
              <Route path='/liked'/>
              <Route path='/playlists'/>
            </Routes>
          </SideBar>
        </div>
      </ThemeProvider>

  );
}

export default App;
