import { api } from "@/lib/axios";
import { Link, router } from "@inertiajs/react";
import { toast } from "react-toastify";

export default function AuthenticatedMenu({ user, scrolled }) {
    const textColorClass = scrolled ? "text-dark" : "text-light";

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

    const handleLogout = async () => {
        try {
            await api.get("/csrf-cookie");
            await api.post("/logout");
            toast.success("Berhasil logout");
            router.visit("/");
        } catch (error) {
            toast.error("Gagal logout");
            console.error(error);
        }
    };

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
                    <button
                    className="dropdown-item"
                    onClick={handleLogout}
                    >
                        Keluar
                    </button>
                </li>
            </ul>
        </li>
    );
}