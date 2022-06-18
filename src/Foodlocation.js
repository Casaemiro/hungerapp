import React from 'react';
import introimg from "./images/home1.jpg";
const Foodlocation = () => {
    return (
        <div className="foodlocation">
            <div className="intro-image">
                <img className='myimg' src={introimg} alt="My name is Silas" />
            </div>
            <div className="intro-loc">
                <h2>Humanitaian Foundation</h2>
                <p className="intro-details-loc">
                    <strong>Location</strong> Molyko stadium <br/>
                        <strong>Time</strong> 10am to 1pm <br/>

                </p>
                <button className="Btn">Call</button>
            </div>
        </div>
    );
}

export default Foodlocation;