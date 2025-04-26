import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import InputField from "./ReusableFormComponents/InputField";
import CheckBox from "./ReusableFormComponents/CheckBox"; 

export default function RegisterForm() {
    const { data, setData, post, processing, errors: inertiaErrors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        terms: false,
        role: "user",
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [pending, setPending] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setPending(true);

        post(route("register"), {
            onError: (errors) => setErrors(errors),
            onFinish: () => {
                setIsLoading(false);
                setPending(false);
                reset("password", "password_confirmation");
            },
        });
    };

    const handleChange = (field, value) => {
        setData(field, value);

        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
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

            <form onSubmit={submit}>
                <InputField
                    id="name"
                    label="Nama"
                    value={data.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    error={errors.name}
                    placeholder="Nama Lengkap"
                    required
                />

                <InputField
                    id="email"
                    label="Email"
                    type="email"
                    value={data.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    error={errors.email}
                    placeholder="Alamat Email"
                    required
                />

                <InputField
                    id="password"
                    label="Kata Sandi"
                    type="password"
                    value={data.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    error={errors.password}
                    placeholder="Kata Sandi"
                    required
                />

                <InputField
                    id="password_confirmation"
                    label="Konfirmasi"
                    type="password"
                    value={data.password_confirmation}
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
                        checked={data.terms}
                        onChange={(e) => handleChange("terms", e.target.checked)}
                    />
                </div>

                <div className="mb-3">
                    <button type="submit" className="btn-darkblue w-100" disabled={pending}>
                        {pending ? "Loading..." : "Daftar"}
                    </button>
                </div>
            </form>
        </>
    );
}
