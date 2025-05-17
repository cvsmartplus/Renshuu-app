import { useForm } from "@inertiajs/react";
import InputField from "./ReusableFormComponents/InputField";

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
            <InputField
                id="title"
                label="Jabatan / Posisi"
                value={exp.title}
                onChange={(e) => handleChange("title", e.target.value)}
                error={errors["experience.0.title"]}
                required
            />

            <InputField
                id="company"
                label="Perusahaan"
                value={exp.company}
                onChange={(e) => handleChange("company", e.target.value)}
                error={errors["experience.0.company"]}
                required
            />

            <InputField
                id="start_date"
                label="Tanggal Mulai"
                type="date"
                value={exp.start_date?.split("T")[0] || ""}
                onChange={(e) => handleChange("start_date", e.target.value)}
                error={errors["experience.0.start_date"]}
                required
            />

            <InputField
                id="end_date"
                label="Tanggal Selesai (kosongkan jika masih bekerja)"
                type="date"
                value={exp.end_date?.split("T")[0] || ""}
                onChange={(e) => handleChange("end_date", e.target.value)}
                error={errors["experience.0.end_date"]}
            />

            <InputField
                id="description"
                label="Deskripsi"
                as="textarea"
                value={exp.description}
                onChange={(e) => handleChange("description", e.target.value)}
                error={errors["experience.0.description"]}
                rows={3}
            />

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