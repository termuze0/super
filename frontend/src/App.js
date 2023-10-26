
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


import  HomePage  from "./Pages/Home/HomePage";
import  Login  from "./Pages/Auth/Login";
import Registration from './Pages/Auth/Registration';
import Reset from './Pages/Auth/Reset';
import Validate from './Pages/Auth/Validate';
import Change from './Pages/Auth/Change';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Registration />} />
            <Route path="/Reset" element={<Reset />} />
            <Route path="/Validate" element={<Validate />} />
            <Route path="/Change" element={<Change />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
