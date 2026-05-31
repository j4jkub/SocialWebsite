import './style.css';

export default function SearchBar() {
    return (
        <div className="search-bar">
            <form>
                <input className="search-input" type="text" placeholder="Search..." />
            </form>
        </div>
    )
}