import SearchBox from './SearchBox';
const Header = () => {
    return (
        <div className="header">
            <div className="title" >Flipkart</div>
            <div className="searchBox">
                <SearchBox />
            </div>
            <button className='loginButton'>Login</button>
            <div >Become a Seller</div>
            <div>More</div>
            <button className='searchButton'>CART</button>
        </div>)
}

export default Header;