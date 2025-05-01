import { useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';

export default function DeleteUserForm({ className = '' }) {
    const [showModal, setShowModal] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setShowModal(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setShowModal(false);
        clearErrors();
        reset();
    };

    return (
        <section className={`mb-4 ${className}`}>
            <header>
                <h2 className="h4 text-danger">Delete Account</h2>
                <p className="text-muted">
                    Once your account is deleted, all of its resources and data will be permanently removed. 
                    Please download any necessary data before proceeding.
                </p>
            </header>

            {/* Tombol untuk membuka modal */}
            <button className="btn btn-danger mt-3" onClick={confirmUserDeletion}>
                Delete Account
            </button>

            {/* Modal Bootstrap */}
            <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1" style={{ background: 'rgba(0,0,0,0.5)' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-danger">Are you sure?</h5>
                            <button type="button" className="btn-close" onClick={closeModal}></button>
                        </div>
                        <div className="modal-body">
                            <p>
                                Once deleted, all data will be permanently removed. 
                                Please enter your password to confirm.
                            </p>
                            <form onSubmit={deleteUser}>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        id="password"
                                        type="password"
                                        ref={passwordInput}
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                        placeholder="Enter your password"
                                    />
                                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                </div>
                                <div className="d-flex justify-content-end">
                                    <button type="button" className="btn btn-secondary me-2" onClick={closeModal}>
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn btn-danger" disabled={processing}>
                                        {processing ? 'Deleting...' : 'Delete Account'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
