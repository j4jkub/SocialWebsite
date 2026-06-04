import Tag from "./tag";
import { useNavigate } from "react-router";


export default function SideBarContent() {
  let navigate = useNavigate();

  const OnCreatePostClick = () => {
    navigate("/create-post");
  }

  return (
    <div className="side-bar-content">
      <button className="banner-button" onClick={OnCreatePostClick}>
        Create Post
      </button>
      <h3>Trending Tags</h3>
      <div className="side-bar-tags">
        <Tag tag="JavaScript" />
        <Tag tag="React" />
        <Tag tag="CSS" />
        <Tag tag="HTML" />
      </div>
    </div>
  );
}