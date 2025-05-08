import { useForm } from "@inertiajs/react";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

export default function ProfileForm({ auth }) {
    const { data, setData, put, processing, errors } = useForm({
        email: auth.user.email,
    });

    const [isEmailFocused, setEmailFocused] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("profile.update.name"));
    };

    return (
        <div className="card shadow-sm rounded border-0">
            <div className="card-body">
                <h5 className="mb-3 fw-semibold">Informasi Profil</h5>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="form-label">Email</label>
                        <div className="input-group">
                            <span className="input-group-text text-muted">
                                <FaEnvelope />
                            </span>
                            <input
                                type="email"
                                className="form-control"
                                value={data.email}
                                onFocus={() => setEmailFocused(true)}
                                onBlur={() => setEmailFocused(false)}
                                onChange={(e) => setData("email", e.target.value)}
                                placeholder="Masukkan email baru"
                            />
                        </div>
                        {isEmailFocused && (
                            <div className="text-muted mt-1">
                                Mengubah email akan mengharuskan verifikasi ulang. Pastikan email yang dimasukkan aktif.
                            </div>
                        )}
                        {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>

                    <div className="d-flex justify-content-end">
                        <button
                            className="btn-darkblue"
                            type="submit"
                            disabled={processing}
                        >
                            {processing ? "Menyimpan..." : "Simpan Perubahan"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}