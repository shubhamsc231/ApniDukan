import Header from "../components/Header";

const Home = () => {
    //const list=["Grocery","Mobile","Fashion","Electric","Home","Travel"]
    const list=[{name:"Grocery",image:"https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"},{name:"Grocery",image:"https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"}]
    return (
        <>
            <Header />
            <div className="itemlist">
                
               <ul>
                {list.map((item)=>{
                    return <li><a><img src={item.image}/><br/>{item.name}</a></li>
                })}
                </ul> 

            </div>
        </>
    )
}
export default Home;