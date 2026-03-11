import React from 'react'
import { Link } from 'react-router-dom'


export const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark z-3 p-5 rounded-3">
                <div className="container">
                    <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link active ms-3" aria-current="page" to="/music">Music</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active ms-3" aria-current="page" to="/movies">Anime</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active ms-3" aria-current="page" to="/nose">Series</Link>
                            </li>
                        </ul>
                        <div>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">🔔</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
