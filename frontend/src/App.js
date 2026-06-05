import logo from './logo.svg';
import './App.css';
import MainPage from '../src/pages/mainPage/mainPage';
import PostDetailsPage from './pages/postDetailsPage/postDetailsPage';
import CookieBanner from './components/cookieBanner';
import AuthModal from './context/authModal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import {AuthModalProvider} from './context/authModal';
import RegisterPage from './pages/registerPage/registerPage';
import CreatePostPage from './pages/createPostPage/createPostPage';

function App() {
  return (
    <div className="App">
        <CookieBanner />
        <BrowserRouter>
        <AuthModalProvider>
          <Routes>
            {/* <MainPage/> */}
            {/* <Route path="/profile/:id" component={ProfilePage} /> */}
            <Route path="/post/:postId" element={<PostDetailsPage />} />
            <Route path="/main-page" element={<MainPage/>} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/create-post" element={<CreatePostPage />} />
            <Route path="/" element={<MainPage/>} />
          </Routes>
          </AuthModalProvider>
        </BrowserRouter>
      </div>
  );
}

export default App;
