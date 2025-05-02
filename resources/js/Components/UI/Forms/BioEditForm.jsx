import { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";

export default function BioEditForm({ onClose, bioValue }) {
    const { data, setData, put, processing, errors } = useForm({
        bio: bioValue || "",
    });
    const [error, setError] = useState("");
    
    const handleInputChange = (e) => {
        setData("bio", e.target.value);
        setError(""); 
    };

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
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="bio" className="form-label">Bio</label>
                <textarea
                    className="form-control"
                    id="bio"
                    rows="8"
                    placeholder="Tulis bio Anda disini..."
                    value={data.bio}
                    onChange={handleInputChange}
                />
                {error && <div className="text-danger mt-1">{error}</div>}
                {errors.bio && <div className="text-danger mt-1">{errors.bio}</div>}
            </div>
            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-secondary me-2" onClick={onClose}>
                    Batal
                </button>
                <button type="submit" className="btn-darkblue" disabled={processing}>
                    {processing ? "Menyimpan..." : "Simpan"}
                </button>
            </div>
        </form>
    );
}
