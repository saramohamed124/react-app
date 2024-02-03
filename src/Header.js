// First Way to add image
// import logo_img from './logo.jpg'
// in function <img src={logo_img} alt='logo_img'/>


function Header(){
    return (
        <div>
        <ul>
            <li className="li">Home</li>
            <li>Career</li>
            <li>About Us</li>
            <li>Contact Us</li>
            {/* Second Way to add image */}
            {/* inner Style in React استايل داخلي */}
            <img src={require("./logo.jpg")} alt="logo" style={{width:'500px',marginTop:"50px"}} width="200px"/>
            {/* Second Way to add image (from external url) */}
            <img src="https://letsdrawthat.com/wp-content/uploads/images/cupcake/how-to-draw-a-cupcake.jpg.webp" alt="external-img"/>
        </ul>
        </div>
    );
};

export default Header;