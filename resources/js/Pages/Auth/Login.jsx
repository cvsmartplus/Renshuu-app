import Layout from '@/Layouts/Layout';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';
import LoginForm from '@/Components/UI/Forms/LoginForm';

export default function Login({ status, canResetPassword }) {
    return (
        <Layout>
            <GuestLayout status={status}>
                <Head title="Log in" />
                <div className="container">
                    <div className="justify-content-center">
                        <h1 className="modal-title fs-3 text-center" id="loginModalLabel">Masuk</h1>
                    </div>
                    <div className="modal-body">
                        <LoginForm canResetPassword={canResetPassword} />
                    </div>
                </div>
            </GuestLayout>
        </Layout>
    );
}
