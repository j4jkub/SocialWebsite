import Post from '../../components/post';
import SearchBar from '../../components/searchBar';
import SideBar from '../../components/sideBar';
import Banner from '../../components/banner';
import './mainPage.css';
import axios from 'axios';
import {useEffect, useState} from 'react';

export default function MainPage() {

    const [posts, setPosts] = useState([]);
    const [nextPage, setNextPage] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/posts/')
            .then(response => {
                console.log("Fetched posts:", response.data);
                setPosts(response.data.results);
                setNextPage(response.data.next);
            })
            .catch(error => {
                console.error("Error fetching posts:", error);
            });
    }, []);

    return (
        <div className="main-page">
            <Banner />
            <div className="main-content">
                <SearchBar />
                <div className="content">
                    <div className="posts">
                        {posts.length > 0 && posts.map(post => (
                            <Post key={post.id} post={post} />
                        ))}
                    </div>
                    <SideBar />
                </div>
            </div>
        </div>
    );
}