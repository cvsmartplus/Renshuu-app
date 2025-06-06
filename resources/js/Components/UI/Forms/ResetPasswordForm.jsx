import React, { useEffect, useState } from "react";
import { router, useForm } from "@inertiajs/react";
import InputField from "./ReusableFormComponents/InputField";
import { api } from "@/lib/axios";
import { toast } from "react-toastify";

export default function ResetPasswordForm() {
    const { data, setData, errors, setError, clearErrors, reset } = useForm({
        token: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const email = params.get("email");

        const pathSegments = window.location.pathname.split('/');
        const token = pathSegments[pathSegments.length - 1];

        if (token) setData("token", token);
        if (email) setData("email", decodeURIComponent(email));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        clearErrors();
        setProcessing(true);

        try {
            await api.get("/csrf-cookie");

            const response = await api.post("/reset-password", {
                token: data.token,
                email: data.email,
                password: data.password,
                password_confirmation: data.password_confirmation,
            });

            toast.success(response.data.message || "Kata sandi berhasil diubah");
            reset("password", "password_confirmation");
            router.visit("/login");
        } catch (error) {
            const res = error.response;
            if (res?.status === 422 && res.data.errors) {
                Object.entries(res.data.errors).forEach(([field, messages]) => {
                    setError(field, messages[0]);
                });
            } else {
                toast.error(res?.data?.message || "Terjadi kesalahan. Silakan coba lagi.");
            }
        } finally {
            setProcessing(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputField
                id="email"
                label="Email"
                type="email"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                disabled
                error={errors.email}
                placeholder="Masukkan email Anda"
                autoComplete="username"
            />

            <InputField
                id="password"
                label="Kata Sandi Baru"
                type="password"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
                onFocus={() => clearErrors("password")}
                error={errors.password}
                placeholder="Masukkan kata sandi baru"
                autoComplete="new-password"
            />

            {/* Password Confirmation */}
            <InputField
                id="password_confirmation"
                label="Konfirmasi Kata Sandi"
                type="password"
                value={data.password_confirmation}
                onChange={(e) => setData("password_confirmation", e.target.value)}
                onFocus={() => clearErrors("password_confirmation")}
                error={errors.password_confirmation}
                placeholder="Konfirmasi kata sandi"
                autoComplete="new-password"
            />

            <div className="d-grid mt-3">
                <button type="submit" className="btn-brand-950" disabled={processing}>
                    {processing ? "Memproses..." : "Reset Kata Sandi"}
                </button>
            </div>
        </form>
    );
}