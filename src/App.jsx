import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Miras from './CreatePage/Miras'
import Todo from './CreatePage/Todo';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Miras />}/>
        <Route path="/Todo" element={<Todo/>}/> 
      </Routes>
    </BrowserRouter>
  );
}


export default App
