import { Head, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import ResetPasswordForm from '@/Components/UI/Forms/ResetPasswordForm';
import { FaUnlockAlt } from 'react-icons/fa'; // Import ikon dari React Icons

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    return (
        <GuestLayout>
            <Head title="Reset Password" />

            <div className="card-body">
                <h4 className="card-title text-center text-blue mb-3">
                    <FaUnlockAlt className="me-2" /> {/* Ganti ikon dengan React Icon */}
                    Buat Kata Sandi Baru
                </h4>
                <ResetPasswordForm
                    data={data}
                    setData={setData}
                    post={post}
                    processing={processing}
                    errors={errors}
                    reset={reset}
                />
            </div>
        </GuestLayout>
    );
}
