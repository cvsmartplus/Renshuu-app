import { Link, useForm } from '@inertiajs/react';
import React from 'react';
import InputField from './ReusableFormComponents/InputField';

export default function LoginForm({ onSuccess, canResetPassword }) {
    const { data, setData, post, processing, errors, reset, clearErrors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onSuccess: () => {
                if (onSuccess) onSuccess();
                window.location.reload();
            },
            onFinish: () => reset('password'),
        });
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
                required
            />

            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                    <input
                        className="form-check-input custom-check-blue"
                        type="checkbox"
                        id="remember"
                        name='remember'
                        checked={data.remember}
                        onChange={(e) => setData("remember", e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="remember">Ingatkan saya</label>
                </div>

                {canResetPassword && (
                    <Link
                        href={route('password.request')}
                        className="text-decoration-none text-danger"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = route('password.request');
                        }}
                    >
                        Lupa Kata Sandi?
                    </Link>
                )}
            </div>

            <div className="mb-3">
                <button type="submit" className="btn-darkblue w-100" disabled={processing}>
                    {processing ? "Loading..." : "Login"}
                </button>
            </div>

            <div className="d-flex align-items-center my-3">
                <hr className="flex-grow-1" />
                <span className="mx-2">atau</span>
                <hr className="flex-grow-1" />
            </div>

            <button type="button" className="btn-outline- p-1 rounded w-100">
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
