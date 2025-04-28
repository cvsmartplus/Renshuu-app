import { useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import { FaRegBell } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import NavLink from "./NavLink";
import AuthenticatedMenu from "./AuthenticatedMenu";
import GuestMenu from "./GuestMenu";
import ApplicationLogo from "../AplicationLogo";
import Logmod from "../Modal/LogModal";

export default function NavBar() {
    const { auth } = usePage().props;

    const user = auth?.user;

    useEffect(() => {
        const modal = document.getElementById('loginModal');
        if (modal) {
            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) backdrop.remove();
        }
    }, [user]);

    return (
        <>
            <Logmod />
            <nav className="navbar navbar-expand-lg sticky-top bg-light shadow-md">
                <div className="container">
                    <Link className="navbar-brand" href="/">
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

                    <NavLink />

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto align-items-center">
                            <li className="nav-item border-end border-grey pe-3">
                                <button type="button" className="btn position-relative">
                                    <FaRegBell />
                                    {user && (
                                        <span className="position-absolute translate-middle p-1 bg-danger rounded-circle">
                                            <span className="visually-hidden">New alerts</span>
                                        </span>
                                    )}
                                </button>
                            </li>

                            {user ? (
                                <AuthenticatedMenu user={user} />
                            ) : (
                                <GuestMenu />
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
