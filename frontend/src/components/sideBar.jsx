import './style.css';
import Tag from './tag';
import SideBarContent from './sideBarContent';


export default function SideBar() {

    return (
        <div className="side-bar">
            <SideBarContent />
            {/* <div className="side-bar-content">
                <h3>Trending Tags</h3>
                <Tag tag="JavaScript" />
                <Tag tag="React" />
                <Tag tag="CSS" />
                <Tag tag="Webdev" />
                <Tag tag="Programming" />
                <Tag tag="Frontend" />
                <Tag tag="Backend" />
            </div> */}
        </div>
    );
}
