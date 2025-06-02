import { useState } from "react";
import ForgotPasswordForm from "@/Components/UI/Forms/ForgotPasswordForm";
import { Head, Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import { FaUnlockAlt } from "react-icons/fa";

export default function ForgotPassword({ status }) {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            {isLoading && (
                <div
                    className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center"
                    style={{ zIndex: 1050 }}
                >
                    <div
                        className="spinner-border text-light"
                        role="status"
                        style={{ width: "4rem", height: "4rem" }}
                    >
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            <div className="card-body">
                <h4 className="card-title text-center text-blue mb-3">
                    <FaUnlockAlt className="me-2" />
                    Lupa Kata Sandi?
                </h4>

                <div className="alert alert-info text-center">
                    Masukkan email Anda, kami akan mengirimkan tautan untuk mereset kata sandi.
                </div>

                {status && (
                    <div className="alert alert-success text-center">{status}</div>
                )}

                <ForgotPasswordForm setIsLoading={setIsLoading} />
            </div>

            <div className="text-center mt-3">
                <p>
                    Belum punya akun? Ayo{" "}
                    <Link
                        className="text-decoration-none text-brand-950"
                        href={route("register")}
                    >
                        Daftar
                    </Link>
                </p>
            </div>
        </GuestLayout>
    );
}
