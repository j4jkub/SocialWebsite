import Post from '../../components/post';
import SearchBar from '../../components/searchBar';
import SideBar from '../../components/sideBar';
import Banner from '../../components/banner';

import './mainPage.css';

export default function MainPage() {
  return (
    <div className="main-page">
        <Banner />
        <div className="main-content">
            <SearchBar />
            <div className="content">
                <div className="posts">
                    <Post post={{ title: 'First Post', content: 'This is the content of the first post.' }} />
                    <Post post={{ title: 'Second Post', content: 'This is the content of the second post.' }} />
                    <Post post={{ title: 'Second Post', content: 'This is the content of the second post.' }} />
                

                </div>
                <SideBar />
            </div>
        </div>
    </div>
  );
}