import { Link } from "@inertiajs/react";

export default function GuestMenu() {
    return (
        <>
            <li>
                <button className="btn" data-bs-toggle="modal" data-bs-target="#loginModal">
                    Masuk
                </button>
            </li>
            <li className="nav-item ms-3">
                <Link className="btn-rounded btn-darkblue p-2 font-weight-normal text-white text-decoration-none rounded" href={route("register")}>
                    Daftar
                </Link>
            </li>
        </>
    );
}
