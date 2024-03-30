
import React from 'react';
import Navbar from './Components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Project from './Components/Project.jsx';
import Contacts from './Components/Contacts.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          {' '}
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: '/about',
      element: (
        <>
          {' '}
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: '/project',
      element: (
        <>
          <Navbar />
          <Project />
        </>
      ),
    },
    {
      path: '/contacts',
      element: (
        <>
          <Navbar />
          <Contacts />
        </>
      ),
    },
    
  ]);
  return (
    <>
      {/* Wrap RouterProvider and Navbar in a single parent element */}
      <RouterProvider router={router} />{' '}
    </>
  );
}

export default App;