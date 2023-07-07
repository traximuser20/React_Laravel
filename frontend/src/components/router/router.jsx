import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home';
import Create from '../../pages/create';
import Users from '../../pages/users';
import View from '../../pages/view';
import Edit from '../../pages/edit';
import About from '../../pages/about';

const Router = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/view/:id" element={<View/>} />
        <Route path="/edit/:id" element={<Edit/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  )
}

export default Router