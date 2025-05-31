import { Link, usePage } from "@inertiajs/react";
import { FaRegBell } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import NavLink from "./NavLink";
import AuthenticatedMenu from "./AuthenticatedMenu";
import GuestMenu from "./GuestMenu";
import ApplicationLogo from "../../AplicationLogo";


export default function NavBar() {
    const { auth } = usePage().props;
    const user = auth?.user;

    return (
        <>
        <nav className="navbar navbar-expand-lg sticky-top bg-light shadow-md" role="navigation">
            <div className="container">
                <Link className="navbar-brand" href="/" aria-label="Beranda">
                    <ApplicationLogo
                        id="Renshuu-logo"
                        alt="Renshuu Logo"
                        draggable="false"
                        height="35"
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
                    <GiHamburgerMenu />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <NavLink />

                    <ul className="navbar-nav ms-auto align-items-center gap-2">
                        {user && (
                            <li className="nav-item">
                                <button
                                    type="button"
                                    className="btn position-relative"
                                    aria-label="Notifikasi"
                                >
                                    <FaRegBell />
                                    <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger rounded-circle">
                                        <span className="visually-hidden">Notifikasi baru</span>
                                    </span>
                                </button>
                            </li>
                        )}

                        {user ? <AuthenticatedMenu user={user} /> : <GuestMenu />}
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
}
