import React, { useState, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import { FaRegBell } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import NavLink from "./NavLink";
import AuthenticatedMenu from "./AuthenticatedMenu";
import GuestMenu from "./GuestMenu";
import ApplicationLogo from "../../AplicationLogo";
import '../../../../../sass/navbar.scss';

export default function NavBar({ withNavigation = true }) {
  const { auth } = usePage().props;
  const user = auth?.user;

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColorClass = scrolled ? "text-dark" : "text-light";

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top shadow-md ${
        scrolled ? "navbar-scrolled" : "navbar-transparent"
      }`}
      role="navigation"
    >
      <div className="container">
        <Link
          className={`navbar-brand ${textColorClass}`}
          href="/"
          aria-label="Beranda"
        >
          <ApplicationLogo
            id="Renshuu-logo"
            alt="Renshuu Logo"
            width={120}
            draggable="false"
            scrolled={scrolled}
          />
        </Link>

        {withNavigation && (
          <>
            <button
              className={`navbar-toggler ${textColorClass}`}
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
              <NavLink scrolled={scrolled} />

              <ul className="navbar-nav ms-auto align-items-center gap-2">
                {user && (
                  <li className="nav-item" aria-label="Notifikasi">
                    <button
                      type="button"
                      className={`btn position-relative ${textColorClass}`}
                      aria-label="Notifikasi"
                    >
                      <FaRegBell />
                      <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger rounded-circle">
                        <span className="visually-hidden">Notifikasi baru</span>
                      </span>
                    </button>
                  </li>
                )}

                {user ? (
                  <AuthenticatedMenu user={user} scrolled={scrolled} />
                ) : (
                  <GuestMenu scrolled={scrolled} />
                )}
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}