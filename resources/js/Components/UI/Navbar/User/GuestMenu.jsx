import { Link } from "@inertiajs/react";
import { LuBuilding2 } from "react-icons/lu";
import { useEffect } from "react";

export default function GuestMenu() {
    useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        [...tooltipTriggerList].map(
            (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
        );
    }, []);

    return (
        <>
            <li className="nav-item">
                <Link className="btn w-100" href={route("login")}>
                    Masuk
                </Link>
            </li>

            <li className="nav-item ms-sm-2">
                <Link
                    className="btn btn-darkblue w-100 text-white text-center rounded"
                    href={route("register")}
                >
                    Daftar
                </Link>
            </li>

            <li className="nav-item ms-sm-2">
                <a
                    href={route("register.company")}
                    target="_blank"
                    className="btn w-100 d-flex justify-content-center align-items-center"
                    data-bs-toggle="tooltip"
                    data-bs-title="Untuk Perusahaan"
                    data-bs-placement="bottom"
                >
                    <LuBuilding2 size={18} />
                </a>
            </li>
        </>
    );
}