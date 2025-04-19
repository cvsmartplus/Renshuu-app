/* eslint-disable prettier/prettier */
import { Link, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import NavLink from './Navlink';
import ApplicationLogo from '../AplicationLogo';

export default function NavBar() {
    const { auth } = usePage().props;
    const user = auth?.user;

    useEffect(() => {
        const modal = document.getElementById('loginModal');
        if (modal) {
            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) {
                backdrop.remove();
            }
        }
    }, [user]);

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top bg-light shadow-md">
                <div className="container">
                    <Link className="navbar-brand" href="/">
                        <ApplicationLogo
                            id="Renshuu-logo"
                            alt="Renshuu Logo"
                            draggable="false"
                            height="45"
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
                                    {user ? (
                                        <>
                                            <span className="position-absolute translate-middle bg-danger rounded-circle p-1">
                                                <span className="visually-hidden">
                                                    New alerts
                                                </span>
                                            </span>
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                </button>
                            </li>

                            {user ? (
                                <>
                                    <li className="nav-item dropdown ms-3">
                                        <Link
                                            className="nav-link mx-2"
                                            href="/#"
                                        >
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown ms-3">
                                        <Link
                                            className="nav-link dropdown-toggle d-flex align-items-center"
                                            id="navbarDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <img
                                                src={
                                                    user.profile_photo_url ||
                                                    'https://picsum.photos/150'
                                                }
                                                alt="User Profile"
                                                className="rounded-circle borstrok"
                                                width="30"
                                                height="30"
                                            />
                                        </Link>
                                        <ul
                                            className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="navbarDropdown"
                                        >
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Profil Saya
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    href="#"
                                                    method="post"
                                                    as="button"
                                                >
                                                    Keluar
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <button
                                            className="btn"
                                            data-bs-toggle="modal"
                                            data-bs-target="#loginModal"
                                        >
                                            Masuk
                                        </button>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Daftar
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Daftar Sebagai Pengguna</a></li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li><a className="dropdown-item" href="#">Daftar Sebagai Perusahaan</a></li>
                                        </ul>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
