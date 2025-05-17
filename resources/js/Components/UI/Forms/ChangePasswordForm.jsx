import { useForm } from '@inertiajs/react';
import { toast } from 'react-toastify';
import InputField from './ReusableFormComponents/InputField';

export default function ChangePasswordForm() {
    const { data, setData, put, processing, errors, reset } = useForm({
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
                    <InputField
                        id="current_password"
                        label="Password Lama"
                        type="password"
                        value={data.current_password}
                        onChange={(e) => setData('current_password', e.target.value)}
                        error={errors.current_password && translateErrors.current_password}
                        required
                    />

                    <InputField
                        id="password"
                        label="Password Baru"
                        type="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        error={errors.password && translateErrors.password}
                        required
                    />

                    <InputField
                        id="password_confirmation"
                        label="Konfirmasi Password Baru"
                        type="password"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        error={errors.password_confirmation && translateErrors.password_confirmation}
                        required
                    />

                    <button className="btn btn-warning w-100" disabled={processing}>
                        {processing ? 'Mengganti...' : 'Ganti Password'}
                    </button>
                </form>
            </div>
        </div>
    );
}