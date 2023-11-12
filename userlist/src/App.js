
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Login,Registaion, Home } from './Pages';
import { createContext, useState } from 'react';

const UserContext =  createContext()

function App() {

  const [isUserLogin, setUserLogin] = useState(false)
  return (
    // <div className='app fluid-container'>
    <UserContext.Provider value={{isUserLogin, setUserLogin}} >
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Registaion/>}/>
    <Route path='/user' element={<Home/>} />
    </Routes>
    </BrowserRouter>
    </UserContext.Provider>
     
    // </div>
  );
}

export default App;
export {UserContext}
