import ResponsiveNavLink from "./ResponsiveNavLink";

export default function NavLink() {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mt-3 mt-lg-0">
                <li className="nav-item">
                    <ResponsiveNavLink href="/" active={route().current("/")} className="nav-link">
                        Beranda
                    </ResponsiveNavLink>
                </li>
                <li className="nav-item">
                    <ResponsiveNavLink href={route("course.index")} active={route().current("course.index")}>
                        Kursus
                    </ResponsiveNavLink>
                </li>
                <li className="nav-item">
                    <ResponsiveNavLink href={route("job.index")} active={route().current("job.index")}>
                        Pekerjaan
                    </ResponsiveNavLink>
                </li>
                <li className="nav-item">
                    <ResponsiveNavLink href={route("article.index")} active={route().current("article.index")}>
                        Artikel
                    </ResponsiveNavLink>
                </li>
            </ul>
        </div>
    );
}
