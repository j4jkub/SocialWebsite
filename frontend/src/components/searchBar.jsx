import './style.css';
import clearSearchIcon from '../assets/icons/close-svgrepo-com.svg';
import {useState} from 'react';

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="search-bar">
            <form>
                <input className="search-input" type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                {searchTerm && 
                    <button className="clear-search-button" onClick={() => setSearchTerm('')}>
                        <img  className="clear-search-icon" src={clearSearchIcon} alt="Clear Search" />
                    </button>}
            </form>
            {searchTerm &&
            <div className="search-results">
                <div className="search-result-item">Search results for "{searchTerm}"</div>
                {/* <div className="search-result-item">Search result 2 for "{searchTerm}"</div> */}
                {/* <div className="search-result-item">Search result 3 for "{searchTerm}"</div> */}
            </div>
            }

        </div>
    )
}