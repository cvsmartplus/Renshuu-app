import { useForm } from "@inertiajs/react";
import { forwardRef, useImperativeHandle } from "react";

const AddExperienceForm = forwardRef(({ onClose }, ref) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        company: "",
        location: "",
        job_type: "",
        start_date: "",
        end_date: "",
        description: "",
    });

    useImperativeHandle(ref, () => ({
        submit: () => {
            post(route("profile.experience.store"), {
                preserveScroll: true,
                onSuccess: () => {
                    reset();
                    onClose();
                },
            });
        },
        processing,
    }));

    return (
        <form>
            <div className="mb-3">
                <label className="form-label">Jabatan / Posisi</label>
                <input
                    type="text"
                    className={`form-control ${errors.title ? "is-invalid" : ""}`}
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                />
                {errors.title && <div className="invalid-feedback">{errors.title}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label">Perusahaan</label>
                <input
                    type="text"
                    className={`form-control ${errors.company ? "is-invalid" : ""}`}
                    value={data.company}
                    onChange={(e) => setData("company", e.target.value)}
                />
                {errors.company && <div className="invalid-feedback">{errors.company}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label">Lokasi</label>
                <input
                    type="text"
                    className={`form-control ${errors.location ? "is-invalid" : ""}`}
                    value={data.location}
                    onChange={(e) => setData("location", e.target.value)}
                />
                {errors.location && <div className="invalid-feedback">{errors.location}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label">Jenis Pekerjaan</label>
                <input
                    type="text"
                    className={`form-control ${errors.job_type ? "is-invalid" : ""}`}
                    value={data.job_type}
                    onChange={(e) => setData("job_type", e.target.value)}
                />
                {errors.job_type && <div className="invalid-feedback">{errors.job_type}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label">Tanggal Mulai</label>
                <input
                    type="date"
                    className={`form-control ${errors.start_date ? "is-invalid" : ""}`}
                    value={data.start_date}
                    onChange={(e) => setData("start_date", e.target.value)}
                />
                {errors.start_date && <div className="invalid-feedback">{errors.start_date}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label">Tanggal Selesai</label>
                <input
                    type="date"
                    className={`form-control ${errors.end_date ? "is-invalid" : ""}`}
                    value={data.end_date}
                    onChange={(e) => setData("end_date", e.target.value)}
                />
                {errors.end_date && <div className="invalid-feedback">{errors.end_date}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label">Deskripsi</label>
                <textarea
                    className={`form-control ${errors.description ? "is-invalid" : ""}`}
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                />
                {errors.description && <div className="invalid-feedback">{errors.description}</div>}
            </div>
        </form>
    );
});

export default AddExperienceForm;
