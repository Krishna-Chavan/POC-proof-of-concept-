import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">BuyHomes</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Buy
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Sell</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Rent</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Mortgage</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Find Realtors&reg;</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">My Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">News & Insights</a>
                        </li> */}
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                            </a>

                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Buy
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#"><h6>Home For Sale</h6></a></li>
                                <li><a className="dropdown-item" href="#">London Homes for sale</a></li>
                                {/* <li><hr className="dropdown-divider" /></li> */}
                                <li><a className="dropdown-item" href="#">London New Homes Communities</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sell
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#"><h6>Home Selling</h6></a></li>
                                <li><a className="dropdown-item" href="#">Seller's Marketplace</a></li>
                                {/* <li><hr className="dropdown-divider" /></li> */}
                                <li><a className="dropdown-item" href="#">See What Your Home Is Worth</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Rent
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#"><h6>Apartments For Rent</h6></a></li>
                                <li><a className="dropdown-item" href="#">Apartments for Rent in London</a></li>
                                {/* <li><hr className="dropdown-divider" /></li> */}
                                <li><a className="dropdown-item" href="#">Houses for Rent in London</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Mortgage
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#"><h6>Mortgage Rates</h6></a></li>
                                <li><a className="dropdown-item" href="#">Get Pre-Approved</a></li>
                                {/* <li><hr className="dropdown-divider" /></li> */}
                                <li><a className="dropdown-item" href="#">Home Equity Financing Rates</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Find Realtors&reg;
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#"><h6>Find REALTORS®</h6></a></li>
                                <li><a className="dropdown-item" href="#">Top Rated London REALTORS®</a></li>
                                {/* <li><hr className="dropdown-divider" /></li> */}
                                <li><a className="dropdown-item" href="#">Search For Real Estate Agent</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                My Home
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                News & Insights
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#"><h6>News</h6></a></li>
                                <li><a className="dropdown-item" href="#">The Latest News</a></li>
                                {/* <li><hr className="dropdown-divider" /></li> */}
                                <li><a className="dropdown-item" href="#">Housing Trends</a></li>
                            </ul>
                        </li>
                        {/* <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li> */}
                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <form className="container-fluid justify-content-start">
                            <button className="btn btn-sm btn-outline-secondary me-2" type="button">Manage rentals</button>
                            <button className="btn btn-sm btn-outline-secondary" type="button">Advertise</button>
                        </form>
                    </ul>
                    {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
                    <li className="d-flex">
                        <Link className="nav-link active" id="login" aria-current="page" to="/login">Log in</Link>
                        <Link className="nav-link active" id="sign-up" aria-current="page" to="/signup">Sign up</Link>
                    </li>
                </div>
            </div>
        </nav>
    )
}
