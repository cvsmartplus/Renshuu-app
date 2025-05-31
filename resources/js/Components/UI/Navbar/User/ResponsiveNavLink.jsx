import { Link } from "@inertiajs/react";

export default function ResponsiveNavLink({
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={`nav-link position-relative ${className}`}
        >
            <span className="nav-text">{children}</span>
        </Link>
    );
}
