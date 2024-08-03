import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Mengimpor CSS kustom
// import logo from './assets/image/head-image.png'; // Pastikan Anda memiliki gambar ini di direktori yang benar

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand d-flex align-items-center" href="#">
                <img src={props.logo} alt="logo" height="40" width="40" className="d-inline-block align-top" />
                <span>Rayhan Kimi</span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/rayhankimi">GitHub</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.linkedin.com/in/rayhan-kimi-nabiel-athallah-897721245/">LinkedIn</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://open.spotify.com/user/5prfrj9o5sga74t50nzigx4ps">Spotify</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;