import { useForm } from "@inertiajs/react";

export default function ExperienceEditForm({ experience, onClose }) {
    const { data, setData, put, processing, errors } = useForm({
        experience: [{
            id: experience.id,
            title: experience.title || "",
            company: experience.company || "",
            start_date: experience.start_date || "",
            end_date: experience.end_date || "",
            description: experience.description || "",
        }],
    });

    const handleChange = (field, value) => {
        setData("experience", [{
            ...data.experience[0],
            [field]: value,
        }]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route("profile.experience.update"), {
            preserveScroll: true,
            onSuccess: () => onClose(),
        });
    };

    const exp = data.experience[0];

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Jabatan / Posisi</label>
                <input
                    type="text"
                    className={`form-control ${errors["experience.0.title"] ? "is-invalid" : ""}`}
                    value={exp.title}
                    onChange={(e) => handleChange("title", e.target.value)}
                />
                {errors["experience.0.title"] && (
                    <div className="invalid-feedback">{errors["experience.0.title"]}</div>
                )}
            </div>

            <div className="mb-3">
                <label className="form-label">Perusahaan</label>
                <input
                    type="text"
                    className={`form-control ${errors["experience.0.company"] ? "is-invalid" : ""}`}
                    value={exp.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                />
                {errors["experience.0.company"] && (
                    <div className="invalid-feedback">{errors["experience.0.company"]}</div>
                )}
            </div>

            <div className="mb-3">
                <label className="form-label">Tanggal Mulai</label>
                <input
                    type="date"
                    className={`form-control ${errors["experience.0.start_date"] ? "is-invalid" : ""}`}
                    value={exp.start_date?.split("T")[0] || ""}
                    onChange={(e) => handleChange("start_date", e.target.value)}
                />
                {errors["experience.0.start_date"] && (
                    <div className="invalid-feedback">{errors["experience.0.start_date"]}</div>
                )}
            </div>

            <div className="mb-3">
                <label className="form-label">Tanggal Selesai (kosongkan jika masih bekerja)</label>
                <input
                    type="date"
                    className={`form-control ${errors["experience.0.end_date"] ? "is-invalid" : ""}`}
                    value={exp.end_date?.split("T")[0] || ""}
                    onChange={(e) => handleChange("end_date", e.target.value)}
                />
                {errors["experience.0.end_date"] && (
                    <div className="invalid-feedback">{errors["experience.0.end_date"]}</div>
                )}
            </div>

            <div className="mb-3">
                <label className="form-label">Deskripsi</label>
                <textarea
                    className={`form-control ${errors["experience.0.description"] ? "is-invalid" : ""}`}
                    value={exp.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                />
                {errors["experience.0.description"] && (
                    <div className="invalid-feedback">{errors["experience.0.description"]}</div>
                )}
            </div>

            <div className="d-flex justify-content-end gap-2">
                <button type="button" className="btn btn-secondary" onClick={onClose}>
                    Batal
                </button>
                <button type="submit" className="btn-darkblue" disabled={processing}>
                    {processing ? "Menyimpan..." : "Simpan"}
                </button>
            </div>
        </form>
    );
}