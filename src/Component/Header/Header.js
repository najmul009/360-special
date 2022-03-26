import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div>
            
            <section>
    <nav className="navbar navbar-expand-lg navbar-light header">
        <div className="container ">
            <a className="navbar-brand fs-2 fw-bold text-white" href="/logo"> 360 Special</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold nav-info">
                    <li className="nav-item d-flex d-flex justify-content-center ">
                        <a className="nav-link active text-white" aria-current="page" href="/home">Home</a>
                    </li>
                    <li className="nav-item d-flex d-flex justify-content-center ">
                        <a className="nav-link text-white" href="/about">About Us </a>
                    </li>
                    <li className="nav-item d-flex d-flex justify-content-center ">
                        <a className="nav-link text-white" href="/contact">Contact</a>
                    </li>
                    <li className="nav-item d-flex d-flex justify-content-center ">
                        <a className="nav-link text-white" href="/cart">Cart</a>
                    </li>


                </ul>

            </div>
        </div>
    </nav>
</section>

        </div>
    );
};

export default Header;