const Navbar = () => {
    const handleChange = (event) => {
        event.preventDefault();
        let name = document.querySelector(".about");
        // name.style.backgroundColor = "red"
        name.style.marginLeft = "35%"
        name.style.width = "50%"
        name.style.transitionDurration = "300ms"
        console.log(name)
    }
    return ( 
        <div className="top-nav" id="topest">
        <h1>FightHunger</h1>
        <div className="links">
        <a href="#foot1">Donate</a>
        <a href="#ty">find food</a>
            <a href="#ert">mission</a>
            <a href="#yu" onClick={handleChange}>contact</a>
        </div>
    </div>
     );
}
 
export default Navbar;