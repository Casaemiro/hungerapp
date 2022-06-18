const Navbar = () => {
    const handleChange = (event) => {
        event.preventDefault();
        let name = document.querySelector(".about");
        name.style.backgroundColor = "red"
        console.log(name)
    }
    return ( 
        <div className="top-nav" id="topest">
        <h1>FightHunger</h1>
        <div className="links">
        <a href="#foot1">Donate</a>
        <a href="#ty">find food</a>
            <a href=".aboutus-section">mission</a>
            <a href="/" onClick={handleChange}>contact</a>
        </div>
    </div>
     );
}
 
export default Navbar;