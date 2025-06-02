import { useEffect, useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function AddSkillModal({ onClose, availableSkills = [] }) {
    const [inputValue, setInputValue] = useState("");
    const [skillList, setSkillList] = useState([]);
    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState({});
    const [highlightIndex, setHighlightIndex] = useState(0);

    const suggestions = inputValue.trim()
    ? availableSkills.filter(s =>
        s.name.toLowerCase().includes(inputValue.toLowerCase()) &&
        !skillList.includes(s.name.toLowerCase())
    )
    : [];

    const addSkill = (skill) => {
        const formattedSkill = skill.trim().toLowerCase();
        if (formattedSkill && !skillList.includes(formattedSkill)) {
            setSkillList([...skillList, formattedSkill]);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Escape") return onClose();
    
        if (e.key === "ArrowDown" && suggestions.length > 0) {
            e.preventDefault();
            setHighlightIndex((prev) => (prev + 1) % suggestions.length);
            return;
        }
    
        if (e.key === "ArrowUp" && suggestions.length > 0) {
            e.preventDefault();
            setHighlightIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
            return;
        }
    
        if (e.key === "Enter") {
            e.preventDefault();
    
            if (!inputValue.trim()) return;
    
            if (suggestions.length > 0) {
                addSkill(suggestions[highlightIndex].name);
                setInputValue("");
                setHighlightIndex(0);
                return;
            }
    
            addSkill(inputValue.replace(/,$/, ""));
            setInputValue("");
            return;
        }
    
        if (e.key === "," && inputValue.trim() && suggestions.length === 0) {
            e.preventDefault();
            addSkill(inputValue.replace(/,$/, ""));
            setInputValue("");
        }
    };
    
    const handlePaste = (e) => {
        const text = e.clipboardData.getData("text");
        const skills = text.split(",").map((s) => s.trim().toLowerCase()).filter(Boolean);
        const newSkills = skills.filter((s) => !skillList.includes(s));
        setSkillList([...skillList, ...newSkills]);
        e.preventDefault();
    };

    const handleDeleteSkill = (skillToDelete) => {
        setSkillList(skillList.filter((s) => s !== skillToDelete));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const finalSkills = [...skillList];
        if (inputValue.trim()) {
            addSkill(inputValue.replace(/,$/, ""));
        }

        if (finalSkills.length === 0) {
            alert("Silakan tambahkan minimal satu keahlian.");
            return;
        }

        setProcessing(true);
        setErrors({});

        Inertia.post(route("profile.skills.store"), { skills: [...new Set(finalSkills)] }, {
            onSuccess: () => {
                setSkillList([]);
                setInputValue("");
                onClose();
            },
            onError: (err) => setErrors(err),
            onFinish: () => setProcessing(false),
        });
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    });

    return (
        <div className="modal d-block" style={{ backgroundColor: "rgba(0,0,0,0.6)" }} onClick={onClose}>
            <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Tambah Keahlian</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <label htmlFor="skills" className="form-label">Keahlian (pisahkan dengan koma)</label>
                            
                            <div className="mb-2 d-flex flex-wrap gap-2">
                                {skillList.map((skill, idx) => (
                                    <span key={idx} className="badge bg-brand-950-subtle text-white d-flex align-items-center">
                                        {skill}
                                        <button
                                            type="button"
                                            className="btn-close btn-close-white ms-2"
                                            style={{ fontSize: "0.6rem" }}
                                            onClick={() => handleDeleteSkill(skill)}
                                        ></button>
                                    </span>
                                ))}
                            </div>

                            <div className="position-relative">
                                <input
                                    type="text"
                                    id="skills"
                                    className="form-control"
                                    value={inputValue}
                                    onChange={(e) => {
                                        setInputValue(e.target.value);
                                        setHighlightIndex(0);
                                    }}
                                    onKeyDown={handleKeyDown}
                                    onPaste={handlePaste}
                                    placeholder="Contoh: JavaScript, React, UI/UX"
                                    autoComplete="off"
                                />

                                {inputValue && suggestions.length > 0 && (
                                    <ul className="list-group position-absolute w-100 shadow-sm mt-1" style={{ zIndex: 10, maxHeight: 150, overflowY: "auto" }}>
                                        {suggestions.map((s, idx) => (
                                            <li
                                                key={s.id}
                                                className={`list-group-item list-group-item-action ${highlightIndex === idx ? "active" : ""}`}
                                                onClick={() => {
                                                    addSkill(s.name);
                                                    setInputValue("");
                                                }}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <strong>{s.name.substr(0, inputValue.length)}</strong>{s.name.substr(inputValue.length)}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            {errors.skills && <div className="invalid-feedback d-block">{errors.skills}</div>}
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClose}>
                                Batal
                            </button>
                            <button type="submit" className="btn-brand-950" disabled={processing}>
                                {processing ? "Menyimpan..." : "Simpan"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
