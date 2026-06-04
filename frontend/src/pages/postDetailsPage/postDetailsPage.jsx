import React from 'react';
import Banner from '../../components/banner';
import SearchBar from '../../components/searchBar';
import Post from '../../components/post';
import SideBar from '../../components/sideBar';
import'./postDetailsPage.css';
import backIcon from '../../assets/icons/arrow-left-svgrepo-com.svg';
import Comment from '../../components/comment';
import {useNavigate} from 'react-router-dom';
import {AuthModalProvider, ModalContext} from '../../context/authModal';
import { useContext } from 'react';

export default function PostDetailsPage() {
    let navigate = useNavigate();
    const {context, setContext} = useContext(ModalContext);

    const onCommentSubmit = (e) => {
        e.preventDefault();
        setContext((prev) => ({ ...prev, isOpen: true, title: "To comment on post you need to be logged in" }));
    }

    return (
        <div className="post-details-page">
            <Banner />
            <div className="main-content">
                <SearchBar />
                    <button className="back-button" onClick={() => navigate(-1)}>
                        <img className="back-icon" src={backIcon} alt="Back" />
                    </button>
                <div className="post-details-content">
                    <div>
                        <Post post={{ title: 'First Post', content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus volutpat mi, facilisis condimentum nibh aliquet non. Donec rutrum maximus ex, consectetur consectetur turpis viverra a. Praesent pulvinar dui at finibus posuere. Nam consequat scelerisque fringilla. Vivamus consectetur eros sed condimentum gravida. Aenean ante mauris, scelerisque vitae erat vitae, semper pretium libero. Maecenas eu mauris cursus, placerat mi sit amet, rutrum purus. Aliquam vestibulum, nibh et efficitur faucibus, ante purus maximus justo, et venenatis enim mi a arcu.Vivamus eu augue vel nulla fermentum eleifend. Aenean ut rhoncus orci. Ut sed posuere arcu. Sed velit mi, sodales ac placerat vitae, consequat eget leo. Suspendisse quam magna, faucibus ut justo eu, cursus aliquam eros. Morbi scelerisque a ante eu fringilla. Duis imperdiet maximus elit in feugiat. Pellentesque congue luctus odio, sed venenatis felis iaculis nec. Donec gravida euismod ipsum, et convallis quam tempus quis. Sed feugiat vitae mi ut accumsan. Nullam eu convallis sem, quis pulvinar erat. Fusce sodales, neque in rhoncus molestie, purus erat molestie nisl, id placerat felis nunc ut dolor.Etiam vel elementum eros. Nam id tellus libero. Vestibulum imperdiet dictum blandit. Phasellus ac lectus ut diam pretium mattis. In sit amet turpis eget est mollis tristique. Nulla id auctor nisl. Fusce consequat nibh dapibus, congue nibh non, tempus velit. Curabitur posuere tincidunt sapien, a lobortis diam vulputate id. Cras venenatis justo turpis. Cras ac finibus augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam sit amet risus tempor, iaculis sem vel, elementum dui. Vestibulum efficitur augue libero, at malesuada mauris maximus ut. Donec nec sapien ut urna accumsan mattis. Ut tristique diam nec nisi sagittis, quis laoreet ante fermentum. Maecenas a nunc tincidunt, luctus purus quis, auctor enim. Vivamus turpis augue, maximus in viverra id, congue ut nunc. Vestibulum vehicula tincidunt mattis. Curabitur mollis nibh eget dolor egestas, dapibus posuere ante lobortis. Suspendisse vitae mauris arcu. Aenean at tempus felis. Sed ornare metus mauris, vel dapibus ipsum elementum non. ", author: 'User1' }} />
                        <div className="comments-section">
                            <h3>Comments</h3>
                            <form className="comment-form">
                                <p className="comment-form-title">Leave a Comment</p>
                                <textarea placeholder="Write a comment..." />
                                <button type="submit" onClick={onCommentSubmit}>
                                    Post Comment
                                </button>
                            </form>
                            <Comment comment={{ author: 'User1', text: 'This is a comment on the first post.' }} />
                            <Comment comment={{ author: 'User2', text: 'This is another comment.' }} />
                            <Comment comment={{ author: 'User3', text: 'Yet another comment.' }} />
                            <Comment comment={{ author: 'User4', text: 'One more comment.' }} />
                            <Comment comment={{ author: 'User5', text: 'Final comment.' }} />
                            <Comment comment={{ author: 'User6', text: 'Last comment for now.' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}