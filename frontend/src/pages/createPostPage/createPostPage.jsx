import Banner from "../../components/banner";
import {useEffect} from 'react';
import {ModalContext, AuthModalProvider} from '../../context/authModal';
import { useContext, useState } from "react";
import './createPostPage.css';
import Tag from "../../components/tag";

export default function CreatePostPage() {
    const { context, setContext } = useContext(ModalContext);
    const [selectedTags, setSelectedTags] = useState([]);
    const [newTag, setNewTag] = useState("");
    
    useEffect(() => {
        // setContext((prev) => ({ ...prev, isOpen: true, title: "Log in to your account" }));
    }, []);


    const OnSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    }
    
    return (
        <div className="create-post-page">
            <Banner />
            <h1>Create Post</h1>
            <div className="create-post-form-container">
                <form className="create-post-form" onSubmit={OnSubmit}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" required />
                    <label htmlFor="content">Content</label>
                    <textarea id="content" name="content" rows="10"></textarea>
                    <label htmlFor="image">Image</label>
                    <input type="file" id="image" name="image" accept="image/*" />
                    <label htmlFor="tags">Add Tag</label>
                    <div>
                        <input type="text" id="tags" name="tags" placeholder="Enter tags separated by commas" onChange={(e) => setNewTag(e.target.value)} />
                        <button type="button" onClick={() => {
                            setSelectedTags([...selectedTags, newTag])
                            setNewTag("")
                            }}>Add Tag</button>
                    </div>
                    <label>Selected Tags:</label>
                    <div className="selected-tags">
                        {selectedTags.map((tag, index) => (
                            <Tag key={index} tag={tag} />
                        ))}
                    </div>
                    <button type="submit">Submit</button>

                </form>
            </div>
        </div>
    );
}