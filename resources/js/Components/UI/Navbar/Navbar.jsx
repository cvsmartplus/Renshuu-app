/* eslint-disable prettier/prettier */
import { Link } from '@inertiajs/react';
import NavLink from './Navlink';
import ApplicationLogo from '../AplicationLogo';

export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top bg-light shadow-md">
                <div className="container">
                    <Link className="navbar-brand" href="/">
                        <ApplicationLogo
                            id="Renshuu-logo"
                            alt="Renshuu Logo"
                            draggable="false"
                            height="40"
                        />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    <NavLink />

                    <div
                        className="navbar-collapse collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav align-items-center ms-auto">
                            <li className="nav-item border-end border-grey pe-3">
                                <button
                                    type="button"
                                    className="btn position-relative"
                                >
                                    <i className="fa-regular fa-bell"></i>
                                </button>
                            </li>
                                <li>
                                    <button
                                        className="btn"
                                        data-bs-toggle="modal"
                                        data-bs-target="#loginModal"
                                    >
                                        Masuk
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <Link className="btn-rounded btn-darkblue p-2 font-weight-normal text-white text-decoration-none rounded" href="/register">
                                                Daftar
                                    </Link>
                                </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
