import React, { useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserDataForm = ({ auth, profile }) => {
  const fullName = auth?.user?.name || "";
  const nameParts = fullName.trim().split(" ");
  const firstName = nameParts.length >= 3
    ? `${nameParts[0]} ${nameParts[1]}`
    : nameParts[0] || "";
  const lastName = nameParts.length >= 3
    ? nameParts.slice(2).join(" ")
    : nameParts[1] || "";

  const { data, setData, put, processing, errors } = useForm({
    first_name: firstName,
    last_name: lastName,
    phone: profile?.phone || "",
    birth_date: profile?.birth_date || "",
    gender: profile?.gender || "",
    city: profile?.city || "",
    province: profile?.province || "",
    website: profile?.website || "",
  });

  const handleInputChange = (key, value) => {
    setData(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    put(route("profile.update"), {
      onSuccess: () => {
        toast.success("Profil berhasil diperbarui!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      },
      onError: () => {
        toast.error("Gagal menyimpan data. Silakan periksa kembali!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      },
    });
  };

  useEffect(() => {
    Object.keys(errors).forEach((key) => {
      if (errors[key]) {
        toast.error(errors[key], {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    });
  }, [errors]);

  const fields = [
    { id: "phone", label: "Nomor Telepon", type: "tel", placeholder: "Contoh: 081234567890" },
    { id: "birth_date", label: "Tanggal Lahir", type: "date" },
    { id: "gender", label: "Jenis Kelamin", type: "select" },
    { id: "province", label: "Provinsi", type: "text", placeholder: "Contoh: Jawa Barat" },
    { id: "city", label: "Kota", type: "text", placeholder: "Contoh: Karawang" },
    { id: "website", label: "Website", type: "url", placeholder: "https://example.com" },
  ];

  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow-sm border-0">
      <h4 className="mb-3">Informasi Pribadi</h4>
      <p className="text-muted fst-italic mb-4">Silakan lengkapi informasi diri Anda di bawah ini.</p>

      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="first_name" className="form-label">Nama Depan</label>
          <input
            type="text"
            id="first_name"
            placeholder="Nama depan Anda"
            className={`form-control ${errors.first_name ? "is-invalid" : ""}`}
            value={data.first_name}
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
            value={data.last_name}
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
                value={data[id]}
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
                    ? data.birth_date
                      ? data.birth_date.split("T")[0]
                      : ""
                    : data[id]
                }
                onChange={(e) => handleInputChange(id, e.target.value)}
              />
            )}
            {errors[id] && <div className="invalid-feedback">{errors[id]}</div>}
          </div>
        ))}
      </div>

      <div className="mt-4 w-100">
        <button type="submit" className="btn-darkblue w-100" disabled={processing}>
          {processing ? "Menyimpan..." : "Simpan"}
        </button>
      </div>

      <ToastContainer />
    </form>
  );
};

export default UserDataForm;