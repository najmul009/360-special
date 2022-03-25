import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div>
            
            <section>
    <nav class="navbar navbar-expand-lg navbar-light header">
        <div class="container ">
            <a class="navbar-brand fs-2 fw-bold text-white" href="/logo"> 360 Special</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold nav-info">
                    <li class="nav-item d-flex d-flex justify-content-center ">
                        <a class="nav-link active text-white" aria-current="page" href="/home">Home</a>
                    </li>
                    <li class="nav-item d-flex d-flex justify-content-center ">
                        <a class="nav-link text-white" href="/about">About Us </a>
                    </li>
                    <li class="nav-item d-flex d-flex justify-content-center ">
                        <a class="nav-link text-white" href="/contact">Contact</a>
                    </li>
                    <li class="nav-item d-flex d-flex justify-content-center ">
                        <a class="nav-link text-white" href="/cart">Cart</a>
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