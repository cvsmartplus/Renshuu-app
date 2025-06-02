import { useState } from "react";
import { useForm } from "@inertiajs/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function BioEditForm({ onClose, bioValue }) {
    const { data, setData, put, processing, errors } = useForm({
        bio: bioValue || "",
    });
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.bio.trim() === "") {
            setError("Bio tidak boleh kosong.");
            return;
        }
        put(route("profile.bio"), {
            data: { bio: data.bio },
            onSuccess: () => {
                onClose();
                location.reload();
            },
        });
    };

    const modules = {
        toolbar: [
            ['bold', 'italic'],
            [{ list: 'bullet' }],
        ],
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="bio" className="form-label">Bio</label>
                <ReactQuill
                    theme="snow"
                    value={data.bio}
                    onChange={(val) => setData("bio", val)}
                    modules={modules}
                    placeholder="Tulis bio Anda di sini..."
                />
                {error && <div className="text-danger mt-2">{error}</div>}
                {errors.bio && <div className="text-danger mt-2">{errors.bio}</div>}
            </div>
            <div className="d-flex justify-content-end mt-3">
                <button type="button" className="btn btn-secondary me-2" onClick={onClose}>
                    Batal
                </button>
                <button type="submit" className="btn-brand-950" disabled={processing}>
                    {processing ? "Menyimpan..." : "Simpan"}
                </button>
            </div>
        </form>
    );
}