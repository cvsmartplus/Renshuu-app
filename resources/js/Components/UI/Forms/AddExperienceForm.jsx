import { useForm } from "@inertiajs/react";
import { forwardRef, useImperativeHandle } from "react";
import InputField from "./ReusableFormComponents/InputField";

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
            <InputField
                id="title"
                label="Jabatan / Posisi"
                value={data.title}
                onChange={(e) => setData("title", e.target.value)}
                error={errors.title}
                required
            />

            <InputField
                id="company"
                label="Perusahaan"
                value={data.company}
                onChange={(e) => setData("company", e.target.value)}
                error={errors.company}
                required
            />

            <InputField
                id="location"
                label="Lokasi"
                value={data.location}
                onChange={(e) => setData("location", e.target.value)}
                error={errors.location}
                required
            />

            <InputField
                id="job_type"
                label="Jenis Pekerjaan"
                value={data.job_type}
                onChange={(e) => setData("job_type", e.target.value)}
                error={errors.job_type}
                required
            />

            <InputField
                id="start_date"
                label="Tanggal Mulai"
                type="date"
                value={data.start_date}
                onChange={(e) => setData("start_date", e.target.value)}
                error={errors.start_date}
                required
            />

            <InputField
                id="end_date"
                label="Tanggal Selesai"
                type="date"
                value={data.end_date}
                onChange={(e) => setData("end_date", e.target.value)}
                error={errors.end_date}
            />

            <InputField
                id="description"
                label="Deskripsi"
                type="textarea"
                value={data.description}
                onChange={(e) => setData("description", e.target.value)}
                error={errors.description}
                rows={3}
            />
        </form>
    );
});

export default AddExperienceForm;