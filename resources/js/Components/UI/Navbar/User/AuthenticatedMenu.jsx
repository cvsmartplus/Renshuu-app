import { Link } from "@inertiajs/react";

export default function AuthenticatedMenu({ user, scrolled }) {
    const textColorClass = scrolled ? "text-dark" : "text-light";

    const dashboardRoute = user?.role === "admin"
        ? route("admin.dashboard")
        : user?.role === "company"
        ? route("company.dashboard")
        : route("user.dashboard");

    const avatarFile = user?.profile?.avatar
        ? `/storage/${user.profile.avatar}`
        : "/images/placeholder/default-profile.jpg";

    const crop = user?.profile?.avatar
        ? {
              x: user.profile.avatar_crop_x,
              y: user.profile.avatar_crop_y,
              width: user.profile.avatar_crop_width,
              height: user.profile.avatar_crop_height,
          }
        : null;

    const originalSize = user?.profile?.avatar
        ? {
              width: user.profile.avatar_image_width,
              height: user.profile.avatar_image_height,
          }
        : null;

    let avatarStyle = {
        width: "30px",
        height: "30px",
        backgroundImage: `url(${avatarFile})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "50%",
    };

    if (crop && originalSize) {
        const scaleX = 30 / crop.width;
        const scaleY = 30 / crop.height;
        avatarStyle = {
            ...avatarStyle,
            backgroundSize: `${originalSize.width * scaleX}px ${originalSize.height * scaleY}px`,
            backgroundPosition: `-${crop.x * scaleX}px -${crop.y * scaleY}px`,
            backgroundRepeat: "no-repeat",
        };
    }

    return (
        <li className="nav-item dropdown-hover position-relative">
            <div
                className={`nav-link d-flex align-items-center ${textColorClass}`}
                id="userDropdown"
                aria-label="Menu pengguna"
            >
                <div style={avatarStyle} />
            </div>
            <ul className="dropdown-menu user-dropdown-menu" aria-labelledby="userDropdown">
                <li>
                    <Link className="dropdown-item" href={route("profile.index")}>
                        Profil Saya
                    </Link>
                </li>
                <li>
                    <Link
                        className="dropdown-item"
                        href={route("logout")}
                        method="post"
                        as="button"
                    >
                        Keluar
                    </Link>
                </li>
            </ul>
        </li>
    );
}