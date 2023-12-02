import logo from './logo.svg';
import './App.css';
import SideBar from "./Component/SideBar";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
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
          <SideBar/>
        </div>
      </ThemeProvider>

  );
}

export default App;
