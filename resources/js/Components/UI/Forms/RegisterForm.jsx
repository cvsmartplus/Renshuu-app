import React, { useState } from "react";
import InputField from "./ReusableFormComponents/InputField";
import CheckBox from "./ReusableFormComponents/CheckBox";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { router } from "@inertiajs/react";
import { api } from "@/lib/axios";

export default function RegisterForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        terms: false,
    });


    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await api.post("/register", form);

            toast.success("Registrasi berhasil! Silakan cek email Anda.", {
                position: "top-right",
                onClose: () => {
                    router.visit(`/OTP-verification?email=${form.email}`);
                },
            });

            setForm({
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
                terms: false,
            });
        } catch (error) {
            if (error.response?.data?.errors) {
                setErrors(error.response.data.errors);
            } else if (error.response?.data?.message) {
                toast.error(error.response.data.message, { position: "top-right" });
            } else {
                toast.error("Terjadi kesalahan saat mendaftar.", { position: "top-right" });
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {isLoading && (
                <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center" style={{ zIndex: 1050 }}>
                    <div className="spinner-border text-light" role="status" style={{ width: "4rem", height: "4rem" }}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <InputField
                    id="name"
                    label="Nama"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    error={errors.name}
                    placeholder="Nama Lengkap"
                    required
                />

                <InputField
                    id="email"
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    error={errors.email}
                    placeholder="Alamat Email"
                    required
                />

                <InputField
                    id="password"
                    label="Kata Sandi"
                    type="password"
                    value={form.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    error={errors.password}
                    placeholder="Kata Sandi"
                    required
                />

                <InputField
                    id="password_confirmation"
                    label="Konfirmasi"
                    type="password"
                    value={form.password_confirmation}
                    onChange={(e) => handleChange("password_confirmation", e.target.value)}
                    error={errors.password_confirmation}
                    placeholder="Konfirmasi"
                    required
                />

                <div className="mb-3 d-flex align-items-center">
                    <CheckBox
                        id="terms"
                        name="terms"
                        label="Saya menyetujui syarat & ketentuan"
                        checked={form.terms}
                        onChange={(e) => handleChange("terms", e.target.checked)}
                        error={errors.terms}
                    />
                </div>

                <div className="mb-3">
                    <button type="submit" className="btn-brand-950 w-100" disabled={isLoading}>
                        {isLoading ? "Loading..." : "Daftar"}
                    </button>
                </div>
            </form>
        </>
    );
}
