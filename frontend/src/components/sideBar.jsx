import './style.css';
import Tag from './tag';

export default function SideBar() {
    return (
        <div className="sidebar">
            <h3>Trending Tags</h3>
            <Tag tag="JavaScript" />
            <Tag tag="React" />
            <Tag tag="CSS" />
            <Tag tag="Webdev" />
            <Tag tag="Programming" />
            <Tag tag="Frontend" />
            <Tag tag="Backend" />
        </div>
    );
}
