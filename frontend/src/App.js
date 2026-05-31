import logo from './logo.svg';
import './App.css';
import MainPage from './pages/mainPage';
import PostDetailsPage from './pages/postDetailsPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
