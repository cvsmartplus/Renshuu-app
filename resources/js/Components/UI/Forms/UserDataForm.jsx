import React, { useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputField from "./ReusableFormComponents/InputField";

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
    setData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    put(route("profile.update"), {
      onSuccess: () => toast.success("Profil berhasil diperbarui!", { autoClose: 2000 }),
      onError: () => toast.error("Gagal menyimpan data. Silakan periksa kembali!", { autoClose: 2000 }),
    });
  };

  useEffect(() => {
    Object.keys(errors).forEach(key => {
      if (errors[key]) {
        toast.error(errors[key], { autoClose: 2000 });
      }
    });
  }, [errors]);

  const fields = [
    { id: "phone", label: "Nomor Telepon", type: "tel", placeholder: "Contoh: 081234567890" },
    { id: "birth_date", label: "Tanggal Lahir", type: "date" },
    {
      id: "gender",
      label: "Jenis Kelamin",
      type: "select",
      options: [
        { value: "male", label: "Laki-laki" },
        { value: "female", label: "Perempuan" },
        { value: "other", label: "Lainnya" },
      ]
    },
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
          <InputField
            id="first_name"
            label="Nama Depan"
            value={data.first_name}
            onChange={(e) => handleInputChange("first_name", e.target.value)}
            error={errors.first_name}
            placeholder="Nama depan Anda"
          />
        </div>
        <div className="col-md-6">
          <InputField
            id="last_name"
            label="Nama Belakang"
            value={data.last_name}
            onChange={(e) => handleInputChange("last_name", e.target.value)}
            error={errors.last_name}
            placeholder="Nama belakang Anda"
          />
        </div>
      </div>

      <div className="row mt-3">
        {fields.map(({ id, label, type, placeholder, options }) => (
          <div className="col-md-6" key={id}>
            <InputField
              id={id}
              label={label}
              type={type}
              value={
                id === "birth_date"
                  ? data.birth_date
                    ? data.birth_date.split("T")[0]
                    : ""
                  : data[id]
              }
              onChange={(e) => handleInputChange(id, e.target.value)}
              placeholder={placeholder}
              error={errors[id]}
              options={options}
            />
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