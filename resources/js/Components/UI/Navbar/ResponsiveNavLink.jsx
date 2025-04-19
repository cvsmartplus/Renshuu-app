import { Link } from "@inertiajs/react";

export default function ResponsiveNavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={`nav-link mx-2 position-relative custom-navlink ${active ? "active-link" : "inactive-link"} ${className}`}
        >
            <span className="nav-text">{children}</span>
        </Link>
    );
}
