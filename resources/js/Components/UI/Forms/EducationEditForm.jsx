import { useState } from "react";
import { router } from "@inertiajs/react";
import InputField from "./ReusableFormComponents/InputField";

export default function EducationEditForm({ education, onCancel, onClose }) {
    const [formData, setFormData] = useState({ ...education });

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.put(
            route("profile.education.update"),
            { education: [formData] },
            {
                onSuccess: () => {
                    onClose();
                    location.reload();
                },
            }
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputField
                id="institution"
                label="Institusi"
                value={formData.institution}
                onChange={(e) => handleChange("institution", e.target.value)}
                required
            />

            <InputField
                id="title"
                label="Judul"
                value={formData.title}
                onChange={(e) => handleChange("title", e.target.value)}
                required
            />

            <InputField
                id="field_of_study"
                label="Bidang Studi"
                value={formData.field_of_study}
                onChange={(e) => handleChange("field_of_study", e.target.value)}
                required
            />

            <div className="mb-3">
                <label htmlFor="description" className="form-label">Deskripsi</label>
                <textarea
                    id="description"
                    className="form-control"
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    rows={3}
                />
            </div>

            <div className="row">
                <div className="col">
                    <InputField
                        id="start_date"
                        label="Mulai"
                        type="date"
                        value={formData.start_date?.split("T")[0] || ""}
                        onChange={(e) => handleChange("start_date", e.target.value)}
                        required
                    />
                </div>
                <div className="col">
                    <InputField
                        id="end_date"
                        label="Selesai"
                        type="date"
                        value={formData.end_date?.split("T")[0] || ""}
                        onChange={(e) => handleChange("end_date", e.target.value)}
                    />
                </div>
            </div>

            <div className="d-flex justify-content-between mt-3">
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={onCancel}
                >
                    Batal
                </button>
                <button type="submit" className="btn-brand-950">
                    Simpan Perubahan
                </button>
            </div>
        </form>
    );
}