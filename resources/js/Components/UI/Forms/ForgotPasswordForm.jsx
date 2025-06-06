import { useEffect, useState } from "react";
import { useForm } from "@inertiajs/react";
import InputField from "./ReusableFormComponents/InputField";
import { FaPaperPlane } from "react-icons/fa";
import { api } from "@/lib/axios";
import { toast } from "react-toastify";

export default function ForgotPasswordForm({ setIsLoading }) {
    const { data, setData, errors, setError, clearErrors } = useForm({
        email: '',
    });

    const [processing, setProcessing] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        setIsLoading?.(processing);
    }, [processing, setIsLoading]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        clearErrors();
        setSuccessMessage('');
        setProcessing(true);

        try {
            // Ambil CSRF token (jika diperlukan Laravel Sanctum)
            await api.get('/csrf-cookie');

            // Kirim email reset password
            const response = await api.post('/forgot-password', {
                email: data.email,
            });

            // Tampilkan pesan sukses
            setSuccessMessage(response.data.message);
            toast.success(response.data.message);
        } catch (error) {
            const status = error.response?.status;
            const responseData = error.response?.data;

            if (status === 422 && responseData.errors) {
                setError('email', responseData.errors.email?.[0] || 'Email tidak valid.');
            } else {
                setError('email', 'Terjadi kesalahan. Silakan coba lagi nanti.');
                toast.error('Gagal mengirim link reset. Silakan coba lagi.');
            }
        } finally {
            setProcessing(false);
        }
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
                    onFocus={() => clearErrors('email')}
                    placeholder="Masukkan email Anda"
                    error={errors.email}
                    required
                />
            </div>

            {successMessage && (
                <div className="alert alert-success mb-3">{successMessage}</div>
            )}

            <div className="d-grid">
                <button
                    type="submit"
                    className="btn-brand-950"
                    disabled={processing}
                >
                    {processing ? (
                        <>
                            <span className="spinner-border spinner-border-sm me-2" />
                            Mengirim...
                        </>
                    ) : (
                        <>
                            <FaPaperPlane className="me-2" />
                            Kirim Link Reset
                        </>
                    )}
                </button>
            </div>
        </form>
    );
}