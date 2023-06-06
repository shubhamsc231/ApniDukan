import { useState } from "react";
const SearchBox = () => {
    const [searchValue, setSearchValue] = useState('');

    function handleChange(e) {
        setSearchValue(e.target.value);
    }
    function handleSubmit() {
        setSearchValue('');
    }
    function handleKeyDown(e) {
       if(e.key=="Enter")
        handleSubmit();
    }
    return (
        <div className="searchBox">
            <input className="searchInput" type="text" placeholder="Search for products, brands and more" value={searchValue} onChange={(e) => handleChange(e)} onKeyDown={(e) => handleKeyDown(e)}/>
            <button onClick={() => handleSubmit()} className="searchButton">Search</button>
        </div>
    )
}
export default SearchBox;