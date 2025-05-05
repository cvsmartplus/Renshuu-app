import { useState } from "react";
import { router } from "@inertiajs/react";

export default function EducationEditForm({ education, onCancel, onClose }) {
    const [formData, setFormData] = useState({ ...education });

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.put(route('profile.education.update'), {
            education: [formData]
        }, {
            onSuccess: () => {
                onClose();
                location.reload();
            }
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-2">
                <label>Institusi</label>
                <input
                    className="form-control"
                    value={formData.institution}
                    onChange={(e) => handleChange("institution", e.target.value)}
                />
            </div>
            <div className="mb-2">
                <label>Judul</label>
                <input
                    className="form-control"
                    value={formData.title}
                    onChange={(e) => handleChange("title", e.target.value)}
                />
            </div>
            <div className="mb-2">
                <label>Bidang Studi</label>
                <input
                    className="form-control"
                    value={formData.field_of_study}
                    onChange={(e) => handleChange("field_of_study", e.target.value)}
                />
            </div>
            <div className="mb-2">
                <label>Deskripsi</label>
                <textarea
                    className="form-control"
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                />
            </div>
            <div className="row mb-3">
                <div className="col">
                    <label>Mulai</label>
                    <input
                        type="date"
                        className="form-control"
                        value={formData.start_date.split('T')[0] || ''}
                        onChange={(e) => handleChange("start_date", e.target.value)}
                    />
                </div>
                <div className="col">
                    <label>Selesai</label>
                    <input
                        type="date"
                        className="form-control"
                        value={formData.end_date? formData.end_date.split('T')[0] || '' : ''}
                        onChange={(e) => handleChange("end_date", e.target.value)}
                    />
                </div>
            </div>
            <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-secondary" onClick={onCancel}>
                    Batal
                </button>
                <button type="submit" className="btn-darkblue">
                    Simpan Perubahan
                </button>
            </div>
        </form>
    );
}
