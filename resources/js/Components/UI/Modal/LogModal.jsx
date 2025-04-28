import LoginForm from '../Forms/LoginForm';
import { Link } from '@inertiajs/react';

export default function Logmod() {
    return (
        <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content container">
                    <div className="modal-header justify-content-center">
                        <h1 className="modal-title fs-3" id="loginModalLabel">Masuk</h1>
                    </div>
                    <div className="modal-body">
                        <LoginForm />
                        <div className='mt-3'>
                            <p className="text-center">
                                Belum punya akun? Ayo <Link href={route('register')} className="text-decoration-none text-darkblue">Daftar</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
