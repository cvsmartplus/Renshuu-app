import { Link } from "@inertiajs/react";
import { LuBuilding2 } from "react-icons/lu";
import { useEffect } from "react";

export default function GuestMenu({ scrolled }) {
    useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        [...tooltipTriggerList].map(
            (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
        );
    }, []);

    const textColorClass = scrolled ? "text-dark" : "text-light";

    return (
        <>
            <li className="nav-item pe-3" style={{ borderRight: '1px solid #ddd' }}>
                <Link className={`btn w-100 ${textColorClass}`} href={route("login")}>
                    Masuk
                </Link>
            </li>

            <li className="nav-item ms-sm-2">
                <Link
                    className={`btn btn-brand-950 w-100 text-center rounded text-white`}
                    href={route("register")}
                >
                    Daftar
                </Link>
            </li>

            <li className="nav-item ms-sm-2">
                <a
                    href={route("register.company")}
                    target="_blank"
                    className={`btn btn-outline-brand-950 d-flex justify-content-center align-items-center rounded-circle ${textColorClass}`}
                    data-bs-toggle="tooltip"
                    data-bs-title="Untuk Perusahaan"
                    data-bs-placement="bottom"
                    style={{
                        width: '38px',
                        height: '38px',
                        padding: 0,
                    }}
                >
                    <LuBuilding2 size={18} className={`${textColorClass} icon-hover-white`} />
                </a>
            </li>
        </>
    );
}