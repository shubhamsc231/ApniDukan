import SearchBox from './SearchBox';
const Header = () => {
    return (
        <div className="header">
            <div className="title" >Flipkart</div>
            <div className="searchBox">
                <SearchBox />
            </div>
            <button className='loginButton'>Login</button>
            <div className='searchButton'>Become a Seller</div>
            <div className='searchButton'>More</div>
            <button className='searchButton'>CART</button>
        </div>)
}

export default Header;