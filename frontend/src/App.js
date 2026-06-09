import logo from './logo.svg';
import './App.css';
import MainPage from '../src/pages/mainPage/mainPage';
import PostDetailsPage from './pages/postDetailsPage/postDetailsPage';
import CookieBanner from './components/cookieBanner';
import AuthModal from './context/authModal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import {AuthModalProvider} from './context/authModal';
import {AuthProvider} from './context/authContext';
import RegisterPage from './pages/registerPage/registerPage';
import CreatePostPage from './pages/createPostPage/createPostPage';
import UserProfilePage from './pages/userProfilePage/userProfilePage';

function App() {
  return (
    <div className="App">
        <CookieBanner />
        <BrowserRouter>
          <AuthProvider>
            <AuthModalProvider>
              <Routes>
                <Route path="/main-page" element={<MainPage/>} />
                <Route path="/profile/:userId" element={<UserProfilePage/>} />
                <Route path="/post/:postId" element={<PostDetailsPage />} />
                <Route path="/create-post" element={<CreatePostPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/" element={<MainPage/>} />
              </Routes>
            </AuthModalProvider>
          </AuthProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
