import React from "react";

const UserDataForm = ({ formData = {}, errors = {}, handleInputChange, handleSocialChange }) => {
  const fields = [
    { id: "phone", label: "Nomor Telepon", type: "tel", placeholder: "Contoh: 081234567890" },
    { id: "birth_date", label: "Tanggal Lahir", type: "date" },
    { id: "gender", label: "Jenis Kelamin", type: "select" },
    { id: "province", label: "Provinsi", type: "text", placeholder: "Contoh: Jawa Barat" },
    { id: "city", label: "Kota", type: "text", placeholder: "Contoh: Karawang" },
    { id: "website", label: "Website", type: "url", placeholder: "https://example.com" },
  ];

  const socialMedia = ["facebook", "twitter", "instagram", "linkedin", "github"];

  return (
    <div className="card p-4 shadow-sm rounded-4">
      <h4 className="mb-3">📋 Informasi Pribadi</h4>
      <p className="text-muted fst-italic mb-4">Silakan lengkapi informasi diri Anda di bawah ini.</p>

      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="first_name" className="form-label">Nama Depan</label>
          <input
            type="text"
            id="first_name"
            placeholder="Nama depan Anda"
            className={`form-control ${errors.first_name ? "is-invalid" : ""}`}
            value={formData.first_name || ""}
            onChange={(e) => handleInputChange("first_name", e.target.value)}
          />
          {errors.first_name && <div className="invalid-feedback">{errors.first_name}</div>}
        </div>
        <div className="col-md-6">
          <label htmlFor="last_name" className="form-label">Nama Belakang</label>
          <input
            type="text"
            id="last_name"
            placeholder="Nama belakang Anda"
            className={`form-control ${errors.last_name ? "is-invalid" : ""}`}
            value={formData.last_name || ""}
            onChange={(e) => handleInputChange("last_name", e.target.value)}
          />
          {errors.last_name && <div className="invalid-feedback">{errors.last_name}</div>}
        </div>
      </div>

      <div className="row mt-3">
        {fields.map(({ id, label, type, placeholder }) => (
          <div className="col-md-6 mb-3" key={id}>
            <label htmlFor={id} className="form-label">{label}</label>
            {type === "select" ? (
              <select
                id={id}
                className={`form-select ${errors[id] ? "is-invalid" : ""}`}
                value={formData[id] || ""}
                onChange={(e) => handleInputChange(id, e.target.value)}
              >
                <option value="">Pilih jenis kelamin</option>
                <option value="male">Laki-laki</option>
                <option value="female">Perempuan</option>
                <option value="other">Lainnya</option>
              </select>
            ) : (
              <input
                type={type}
                placeholder={placeholder}
                className={`form-control ${errors[id] ? "is-invalid" : ""}`}
                id={id}
                value={
                  id === "birth_date"
                    ? formData.birth_date
                      ? formData.birth_date.split("T")[0]
                      : ""
                    : formData[id] || ""
                }
                onChange={(e) => handleInputChange(id, e.target.value)}
              />
            )}
            {errors[id] && <div className="invalid-feedback">{errors[id]}</div>}
          </div>
        ))}
      </div>

      <div className="mb-4 mt-3">
        <label htmlFor="email" className="form-label">Email (tidak dapat diubah)</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={formData.email || ""}
          disabled
        />
      </div>

      <hr className="my-4" />
      <h5 className="mb-3">🔗 Sosial Media</h5>
      <div className="row">
        {socialMedia.map((platform) => (
          <div className="col-md-6 mb-3" key={platform}>
            <label htmlFor={platform} className="form-label">
              {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </label>
            <input
              type="url"
              className={`form-control ${errors[`social_links.${platform}`] ? "is-invalid" : ""}`}
              id={platform}
              value={formData.social_links?.[platform] || ""}
              onChange={(e) => handleSocialChange(platform, e.target.value)}
              placeholder={`https://${platform}.com/username`}
            />
            {errors[`social_links.${platform}`] && (
              <div className="invalid-feedback">{errors[`social_links.${platform}`]}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDataForm;