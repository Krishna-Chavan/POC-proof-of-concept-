import React from 'react'
import './Home.css'

export default function Home() {
    return (
        <div>
            <div>
                <img className="image-im" src="../home.jpg"  alt="Home image" />
                <h1 className="text-h1">To Each Their Home.<sup>SM</sup></h1>
                <h4 className="text-h2">Let's find a home that's perfect for you</h4>
                <div className="form-im">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                </div>
                <div className="form-im1">
                    <button class="btn btn-outline-danger" type="submit">Search</button>
                </div>
            </div>
        </div>
    )
}
