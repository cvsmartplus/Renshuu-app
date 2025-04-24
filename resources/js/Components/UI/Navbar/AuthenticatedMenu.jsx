import { Link } from "@inertiajs/react";

export default function AuthenticatedMenu({ user }) {
    let dashboardRoute = "#";
    if (user) {
        switch (user.role) {
            case "admin":
                dashboardRoute = route("admin.dashboard");
                break;
            case "company":
                dashboardRoute = route("company.dashboard");
                break;
            default:
                dashboardRoute = route("user.dashboard");
        }
    }

    return (
        <>
            <li className="nav-item dropdown ms-3">
                <a className="nav-link mx-2" href={dashboardRoute}>
                    Dashboard
                </a>
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
                        src={user.profile_photo_url || "https://picsum.photos/150"}
                        alt="User Profile"
                        className="rounded-circle borstrok"
                        width="30"
                        height="30"
                    />
                </Link>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li>
                        <Link className="dropdown-item" href="#">
                            Profil Saya
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href={route("logout")} method="post" as="button">
                            Keluar
                        </Link>
                    </li>
                </ul>
            </li>
        </>
    );
}
