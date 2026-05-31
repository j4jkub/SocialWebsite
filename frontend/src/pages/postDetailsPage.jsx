import React from 'react';
import Banner from '../components/banner';
import SearchBar from '../components/searchBar';
import Post from '../components/post';
import SideBar from '../components/sideBar';
import './postDetailsPage.css';

export default function PostDetailsPage() {
    return (
        <div className="main-page">
            <Banner />
            <div className="main-content">
                {/* <SearchBar /> */}
                <div className="content">
                    <div>
                        <Post post={{ title: 'First Post', content: 'This is the content of the first post.' }} />
                        <div className="comments-section">
                            <h3>Comments</h3>
                            <Comment />
                            <Comment />
                            <Comment />
                            <Comment />
                            <Comment />
                            <Comment />
                        </div>
                    </div>
                    {/* <SideBar /> */}
                </div>
            </div>
        </div>
    );
}
function Comment() {
    return (
        <div className="comment">
            <p><strong>User1:</strong></p> 
            <p> This is a comment on the first post.</p>
            <button>like</button>
        </div>
    )
}