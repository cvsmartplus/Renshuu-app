import { Link, router, useForm } from '@inertiajs/react';
import React from 'react';
import InputField from './ReusableFormComponents/InputField';
import CheckBox from './ReusableFormComponents/CheckBox';
import { api } from '@/lib/axios';
import { toast } from 'react-toastify';

export default function LoginForm({ onSuccess }) {
    const { data, setData, post, processing, errors, reset, clearErrors, setError } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = async (e) => {
        e.preventDefault();

        try {
            await api.get('/csrf-cookie');

            await api.post('/login', data);

            toast.success("Login berhasil");

            if (onSuccess) onSuccess();

            router.visit('/user/dashboard');
        } catch (error) {
            const status = error.response?.status;
            const responseData = error.response?.data;

            if (status === 422 && responseData.errors) {
                Object.entries(responseData.errors).forEach(([field, messages]) => {
                    setError(field, messages[0]);
                });
            } else if (status === 403 && responseData.message) {
                toast.error(responseData.message,{
                    onClick: () => {
                        router.visit(`/OTP-verification?email=${responseData.email}`);
                    }
                });
            } else {
                toast.error(responseData?.message || "Login gagal");
            }
        }
    };

    return (
        <form onSubmit={submit}>
            <InputField
                id="email"
                type="email"
                label="Email"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                onFocus={() => clearErrors('email')}
                error={errors.email}
                placeholder="Masukkan email Anda"
                autoComplete="off"
                labelColor='text-light'
                required
            />

            <InputField
                id="password"
                type="password"
                label="Kata Sandi"
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
                onFocus={() => clearErrors('password')}
                error={errors.password}
                placeholder="Masukkan kata sandi"
                autoComplete="off"
                labelColor='text-light'
                required
            />

            <div className="d-flex justify-content-between align-items-center mb-3">
                <CheckBox
                    id="remember"
                    name="remember"
                    label="Ingatkan saya"
                    checked={data.remember}
                    labelColor='text-light'
                    onChange={(e) => setData("remember", e.target.checked)}
                />
                <Link
                    href={route('password.request')}
                    className="text-decoration-none text-danger"
                >
                    Lupa Kata Sandi?
                </Link>
            </div>

            <div className="mb-3">
                <button type="submit" className="btn-brand-950 w-100" disabled={processing}>
                    {processing ? "Loading..." : "Login"}
                </button>
            </div>

            <div className="d-flex align-items-center my-3">
                <hr className="flex-grow-1 border-light" />
                <span className="mx-2 text-light">atau</span>
                <hr className="flex-grow-1 border-light" />
            </div>

            <button type="button" className="btn btn-light d-flex align-items-center justify-content-center p-1 rounded w-100">
                <img
                    src="./images/assets/icons/Google.png"
                    width="20"
                    height="20"
                    className="me-2"
                    alt="Google"
                />
                Masuk dengan Google
            </button>
        </form>
    );
}