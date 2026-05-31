import logo from './logo.svg';
import './App.css';
import MainPage from '../src/pages/mainPage/mainPage';
import PostDetailsPage from './pages/postDetailsPage/postDetailsPage';
import CookieBanner from './components/cookieBanner';
import AuthModal from './context/authModal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import {AuthModalProvider} from './context/authModal';

function App() {
  return (
    <AuthModalProvider>
      <div className="App">
        <CookieBanner />
        <BrowserRouter>
          <Routes>
            {/* <MainPage/> */}
            {/* <Route path="/profile/:id" component={ProfilePage} /> */}
            <Route path="/post" element={<PostDetailsPage />} />
            <Route path="/mainPage" element={<MainPage/>} />
            <Route path="/" element={<MainPage/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthModalProvider>
  );
}

export default App;
