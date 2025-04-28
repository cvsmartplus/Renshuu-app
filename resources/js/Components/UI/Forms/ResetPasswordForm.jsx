import React from "react";
import InputField from "./ReusableFormComponents/InputField";

export default function ResetPasswordForm({ data, setData, post, processing, errors, reset }) {
    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <InputField
                    id="email"
                    label="Email"
                    type="email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    placeholder="Masukkan email Anda"
                    autoComplete="username"
                    disabled={!!data.email}
                    error={errors.email}
                />
            </div>

            <div className="mb-3">
                <InputField
                    id="password"
                    label="Kata Sandi"
                    type="password"
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
                    placeholder="Masukkan kata sandi baru"
                    autoComplete="new-password"
                    error={errors.password}
                />
            </div>

            <div className="mb-3">
                <InputField
                    id="password_confirmation"
                    label="Konfirmasi Kata Sandi"
                    type="password"
                    value={data.password_confirmation}
                    onChange={(e) => setData('password_confirmation', e.target.value)}
                    placeholder="Konfirmasi kata sandi baru"
                    autoComplete="new-password"
                    error={errors.password_confirmation}
                />
            </div>

            <div className="d-grid">
                <button className="btn-darkblue" disabled={processing}>
                    Reset
                </button>
            </div>
        </form>
    );
}
