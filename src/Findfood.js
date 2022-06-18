const Findfood = () => {
    return ( 
        <div className="findfood" id="ty">
            <form className="findform">
            <label>Enter your location to find available free food providers in your area</label>
                <input type={'text'} name="location" className="search-food" placeholder="Enter your location"/>
                <button type="submit">SEARCH</button>
            </form>
        </div>
     );
}
 
export default Findfood;