import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom'
import HomePage from 'scenes/homePage';
import LoginPage from 'scenes/loginPage';
import ProfilePage from 'scenes/profilePage';
import {useMemo} from 'react';
// use useSelector to grab info from the redux store
import { useSelector } from 'react-redux';
import {ThemeProvider} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme }  from '@mui/material/styles';
import {themeSettings} from "./theme";
import Navbar from 'scenes/navbar';

function App() {
  // get the mode state from redux state
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <div className="App">
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Routes>
              <Route path="/" element={<LoginPage />}/>
              <Route path="/home" element={<HomePage />}/>
              <Route path="/profile/:userId" element={<ProfilePage />}/>
              {/* <Route path="/home" element={isAuth ? <HomePage /> : <Navigate to="/"/>}/> */}
              {/* <Route path="/profile/:userId" element={isAuth ? <ProfilePage /> : <Navigate to="/"/>}/> */}
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
