// resources/js/Components/DeleteUserForm.jsx
import { useForm } from '@inertiajs/react';
import InputField from './ReusableFormComponents/InputField';

export default function DeleteUserForm() {
    const { data, setData, delete: destroy, processing, errors } = useForm({
        password: '',
    });

    const handleDelete = (e) => {
        e.preventDefault();
        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onBefore: () =>
                confirm('Yakin ingin menghapus akun? Ini tidak bisa dibatalkan.'),
            onSuccess: () => {
                document.querySelector('#deleteAccountModal')?.classList.remove('show');
                document.querySelector('body')?.classList.remove('modal-open');
                document.querySelector('.modal-backdrop')?.remove();
            },
        });
    };

    return (
        <>
            <div className="card shadow-sm rounded border-0 border-start border-danger border-4">
                <div className="card-body">
                    <h5 className="text-danger fw-semibold">Hapus Akun</h5>
                    <p className="text-muted">
                        Tindakan ini permanen dan tidak bisa dibatalkan.
                    </p>
                    <button
                        className="btn btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteAccountModal"
                    >
                        Hapus Akun
                    </button>
                </div>
            </div>

            <div
                className="modal fade"
                id="deleteAccountModal"
                tabIndex="-1"
                aria-labelledby="deleteAccountModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <form onSubmit={handleDelete} className="modal-content">
                        <div className="modal-header bg-danger text-white">
                            <h5 className="modal-title" id="deleteAccountModalLabel">
                                Konfirmasi Hapus Akun
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Tutup"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <p>Masukkan password kamu untuk menghapus akun secara permanen.</p>

                            <InputField
                                id="delete-password"
                                type="password"
                                placeholder="Password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                error={errors.password}
                                required
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Batal
                            </button>
                            <button
                                type="submit"
                                className="btn btn-danger"
                                disabled={processing}
                            >
                                {processing ? 'Menghapus...' : 'Hapus Akun'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}