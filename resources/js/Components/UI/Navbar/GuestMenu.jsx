import { Link } from "@inertiajs/react";

export default function GuestMenu() {
    return (
        <>
            <li className="w-100 mb-2 mb-sm-0 d-sm-inline d-block">
                <button
                    className="btn w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                >
                    Masuk
                </button>
            </li>
            <li className="nav-item ms-sm-3 w-100 d-sm-inline d-block">
                <Link
                    className="btn-darkblue w-100 d-block text-center rounded"
                    href={route("register")}
                >
                    Daftar
                </Link>
            </li>
        </>
    );
}
