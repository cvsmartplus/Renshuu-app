import { useForm } from '@inertiajs/react';
import { useImperativeHandle, forwardRef } from 'react';

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
            onSuccess: () => onClose(),
        });
    };

    useImperativeHandle(ref, () => ({
        submit: handleSubmit,
        processing,
    }));

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <select
                    className={`form-control ${errors.degree ? 'is-invalid' : ''}`}
                    value={data.degree}
                    onChange={(e) => setData('degree', e.target.value)}
                >
                    <option value="">Pilih Jenjang</option>
                    <option value="SD">SD</option>
                    <option value="SMP">SMP</option>
                    <option value="SMA">SMA</option>
                    <option value="SMK">SMK</option>
                    <option value="D1">D1</option>
                    <option value="D2">D2</option>
                    <option value="D3">D3</option>
                    <option value="S1">S1 (Sarjana)</option>
                    <option value="S2">S2 (Magister)</option>
                    <option value="S3">S3 (Doktor)</option>
                </select>
                {errors.degree && <div className="invalid-feedback">{errors.degree}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label">Bidang Studi</label>
                <input
                    type="text"
                    className={`form-control ${errors.field_of_study ? 'is-invalid' : ''}`}
                    value={data.field_of_study}
                    onChange={(e) => setData('field_of_study', e.target.value)}
                />
                {errors.field_of_study && <div className="invalid-feedback">{errors.field_of_study}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label">Institusi</label>
                <input
                    type="text"
                    className={`form-control ${errors.institution ? 'is-invalid' : ''}`}
                    value={data.institution}
                    onChange={(e) => setData('institution', e.target.value)}
                />
                {errors.institution && <div className="invalid-feedback">{errors.institution}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label">Judul (Title)</label>
                <input
                    type="text"
                    className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                />
                {errors.title && <div className="invalid-feedback">{errors.title}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label">Nilai / IPK</label>
                <input
                    type="text"
                    className={`form-control ${errors.grade ? 'is-invalid' : ''}`}
                    value={data.grade}
                    onChange={(e) => setData('grade', e.target.value)}
                />
                {errors.grade && <div className="invalid-feedback">{errors.grade}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label">Tanggal Mulai</label>
                <input
                    type="date"
                    className={`form-control ${errors.start_date ? 'is-invalid' : ''}`}
                    value={data.start_date}
                    onChange={(e) => setData('start_date', e.target.value)}
                />
                {errors.start_date && <div className="invalid-feedback">{errors.start_date}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label">Tanggal Selesai</label>
                <input
                    type="date"
                    className={`form-control ${errors.end_date ? 'is-invalid' : ''}`}
                    value={data.end_date}
                    onChange={(e) => setData('end_date', e.target.value)}
                />
                {errors.end_date && <div className="invalid-feedback">{errors.end_date}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label">Deskripsi (Opsional)</label>
                <textarea
                    className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                    rows="3"
                ></textarea>
                {errors.description && <div className="invalid-feedback">{errors.description}</div>}
            </div>
        </form>
    );
});

export default AddEducationForm;
