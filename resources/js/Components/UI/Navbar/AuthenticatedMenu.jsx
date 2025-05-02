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

    const avatarFile = user?.profile?.avatar
        ? `/storage/${user.profile.avatar}`
        : "/images/placeholder/default-profile.jpg";

    const hasAvatar = !!user?.profile?.avatar;
    const crop = hasAvatar
        ? {
            x: user.profile.avatar_crop_x,
            y: user.profile.avatar_crop_y,
            width: user.profile.avatar_crop_width,
            height: user.profile.avatar_crop_height,
        }
        : null;

    const originalSize = hasAvatar
        ? {
            width: user.profile.avatar_image_width,
            height: user.profile.avatar_image_height,
        }
        : null;

    // Gaya default avatar
    let avatarStyle = {
        width: "30px",
        height: "30px",
        backgroundImage: `url(${avatarFile})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "50%",
    };

    // Terapkan crop manual jika ada
    if (hasAvatar && crop && originalSize) {
        const scaleX = 30 / crop.width;
        const scaleY = 30 / crop.height;

        const bgSize = `${originalSize.width * scaleX}px ${originalSize.height * scaleY}px`;
        const bgPosition = `-${crop.x * scaleX}px -${crop.y * scaleY}px`;

        avatarStyle = {
            ...avatarStyle,
            backgroundSize: bgSize,
            backgroundPosition: bgPosition,
            backgroundRepeat: "no-repeat",
        };
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
                    <div style={avatarStyle} />
                </Link>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li>
                        <Link className="dropdown-item" href={route("profile.index")}>
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
