import Layout from '@/Layouts/Layout';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';
import LoginForm from '@/Components/UI/Forms/LoginForm';

export default function Login({ status }) {
    return (
        <Layout withNavigation={false}>
            <GuestLayout status={status}>
                <Head title="Login" />
                <div className="text-center mb-4">
                    <h1 className="fs-3 text-light fw-bold">Masuk ke Akun Anda</h1>
                    <p className="text-light small">Silakan login untuk melanjutkan</p>
                </div>
                <LoginForm />
                <div className="mt-3">
                    <p className="text-center text-light">
                        Belum punya akun?{" "}
                        <Link
                            href={route("register")}
                            className="text-decoration-none text-brand-200"
                        >
                            Daftar disini
                        </Link>
                    </p>
                </div>
            </GuestLayout>
        </Layout>
    );
}
