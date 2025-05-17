import { useForm } from '@inertiajs/react';
import { useImperativeHandle, forwardRef } from 'react';
import InputField from './ReusableFormComponents/InputField';

const AddEducationForm = forwardRef(({ onClose }, ref) => {
    const { data, setData, post, processing, errors } = useForm({
        degree: '',
        field_of_study: '',
        institution: '',
        title: '',
        grade: '',
        start_date: '',
        end_date: '',
        description: '',
    });

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        post(route('profile.education.store'), {
            onSuccess: () => {
                onClose();
                location.reload();
            },
        });
    };

    useImperativeHandle(ref, () => ({
        submit: handleSubmit,
        processing,
    }));

    return (
        <form onSubmit={handleSubmit}>
            <InputField
                id="degree"
                label="Jenjang Pendidikan"
                type="select"
                value={data.degree}
                onChange={(e) => setData('degree', e.target.value)}
                error={errors.degree}
                options={[
                    { value: 'SD', label: 'SD' },
                    { value: 'SMP', label: 'SMP' },
                    { value: 'SMA', label: 'SMA' },
                    { value: 'SMK', label: 'SMK' },
                    { value: 'D1', label: 'D1' },
                    { value: 'D2', label: 'D2' },
                    { value: 'D3', label: 'D3' },
                    { value: 'S1', label: 'S1 (Sarjana)' },
                    { value: 'S2', label: 'S2 (Magister)' },
                    { value: 'S3', label: 'S3 (Doktor)' },
                ]}
                required
            />

            <InputField
                id="field_of_study"
                label="Bidang Studi"
                value={data.field_of_study}
                onChange={(e) => setData('field_of_study', e.target.value)}
                error={errors.field_of_study}
                required
            />

            <InputField
                id="institution"
                label="Institusi"
                value={data.institution}
                onChange={(e) => setData('institution', e.target.value)}
                error={errors.institution}
                required
            />

            <InputField
                id="title"
                label="Judul (Title)"
                value={data.title}
                onChange={(e) => setData('title', e.target.value)}
                error={errors.title}
                required
            />

            <InputField
                id="grade"
                label="Nilai / IPK"
                value={data.grade}
                onChange={(e) => setData('grade', e.target.value)}
                error={errors.grade}
            />

            <InputField
                id="start_date"
                label="Tanggal Mulai"
                type="date"
                value={data.start_date}
                onChange={(e) => setData('start_date', e.target.value)}
                error={errors.start_date}
                required
            />

            <InputField
                id="end_date"
                label="Tanggal Selesai"
                type="date"
                value={data.end_date}
                onChange={(e) => setData('end_date', e.target.value)}
                error={errors.end_date}
            />

            <InputField
                id="description"
                label="Deskripsi (Opsional)"
                type="textarea"
                value={data.description}
                onChange={(e) => setData('description', e.target.value)}
                error={errors.description}
                rows={3}
            />
        </form>
    );
});

export default AddEducationForm;