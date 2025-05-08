import { useForm } from '@inertiajs/react';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

export default function ChangePasswordForm() {
    const { data, setData, put, processing, errors, reset, recentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Password berhasil diperbarui", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                reset();
            },
        });
    };

    const translateErrors = {
        current_password: "Password lama salah atau tidak sesuai.",
        password: "Password baru harus minimal 8 karakter dan dikonfirmasi.",
        password_confirmation: "Konfirmasi password tidak cocok.",
    };

    return (
        <div className="card shadow-sm rounded border-0">
            <div className="card-body">
                <h5 className="mb-3 fw-semibold">Ganti Kata Sandi</h5>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Password Lama</label>
                        <input
                            type="password"
                            name="current_password"
                            className={`form-control ${errors.current_password ? 'is-invalid' : ''}`}
                            onChange={(e) => setData('current_password', e.target.value)}
                        />
                        {errors.current_password && (
                            <div className="invalid-feedback">{translateErrors.current_password}</div>
                        )}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password Baru</label>
                        <input
                            type="password"
                            name="password"
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        {errors.password && (
                            <div className="invalid-feedback">{translateErrors.password}</div>
                        )}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Konfirmasi Password Baru</label>
                        <input
                            type="password"
                            name="password_confirmation"
                            className={`form-control ${errors.password_confirmation ? 'is-invalid' : ''}`}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                        />
                        {errors.password_confirmation && (
                            <div className="invalid-feedback">{translateErrors.password_confirmation}</div>
                        )}
                    </div>
                    <button className="btn btn-warning w-100" disabled={processing}>
                        {processing ? 'Mengganti...' : 'Ganti Password'}
                    </button>
                </form>
            </div>
        </div>
    );
}