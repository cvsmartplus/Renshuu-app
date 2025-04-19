import ResponsiveNavLink from "./ResponsiveNavLink";

export default function NavLink() {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto align-items-center">
                <li className="nav-item">
                    <ResponsiveNavLink href="/" active={route().current("/")}>
                        Beranda
                    </ResponsiveNavLink>
                </li>
                <li className="nav-item">
                    <ResponsiveNavLink href="#">
                        Kursus
                    </ResponsiveNavLink>
                </li>
                <li className="nav-item">
                    <ResponsiveNavLink href="#">
                        Pekerjaan
                    </ResponsiveNavLink>
                </li>
                <li className="nav-item">
                    <ResponsiveNavLink href="#">
                        Artikel
                    </ResponsiveNavLink>
                </li>
            </ul>
        </div>
    );
}
