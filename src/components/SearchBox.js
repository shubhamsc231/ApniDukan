import { useState } from "react";
const SearchBox = () => {
    const [searchValue, setSearchValue] = useState('');
    console.log(searchValue);
    function handleChange(e) {
        setSearchValue(e.target.value);
    }
    function handleSubmit() {
        alert(searchValue);
        setSearchValue('');
    }
    function handleKeyDown(e) {
        if (e.key == "Enter")
            handleSubmit();
    }
    return (
        <div className="searchBox">
            <input className="searchInput" type="text" placeholder="Search for products, brands and more" value={searchValue} onChange={(e) => handleChange(e)} onKeyDown={(e) => handleKeyDown(e)} />
            <button onClick={(e) => handleSubmit()} className="searchButton">Search</button>
        </div>
    )
}
export default SearchBox;