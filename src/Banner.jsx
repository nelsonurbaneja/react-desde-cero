import React from 'react';

const Banner = () => (
    <div className="main-banner img-container l-section diagonal" id="main-banner">
        <div className="ed-grid lg-grid-6">
            <div className="lg-cols-4 lg-x-2">
                <img className="main-banner__img" src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Post del banner" />
                <div className="main-banner__data s-center">
                <p className="t2 s-mb-0">Bienvenido a Desarrollo web </p>
                <p>Tu futuro esta en tus manos</p>
                <a href="#saber-mas" className="button">Saber más</a>
            </div>
            </div>
        </div>
    </div>
)

export default Banner;