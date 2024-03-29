import React from 'react';
import { logo } from "./assets";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home, CreatePost } from './pages';


const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center
    bg-white sm:px-8 px-4 border-b border-b-[#e6ebf4]'>
        <Link to='/ai-image-generation/'>
          <img src={logo} alt='Logo' className="w-28 object-contain" />
        </Link>
        <Link to='/ai-image-generation/create-post' className='font-inter font-medium
        bg-[#6469ff] text-white py-2 px-4 rounded-md'>
        Create
        </Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(180vh-73px)]'>
        <Routes>
          <Route path="/ai-image-generation/" element={<Home />} />
          <Route path="/ai-image-generation/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App