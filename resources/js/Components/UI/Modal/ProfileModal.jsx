import { useForm, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import UserDataForm from "../Forms/UserDataForm";

export default function ssssProfileModal() {
  const { auth, profile } = usePage().props;

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
    email: auth?.user?.email || "",
    phone: profile?.phone || "",
    birth_date: profile?.birth_date || "",
    gender: profile?.gender || "",
    city: profile?.city || "",
    province: profile?.province || "",
    website: profile?.website || "",
    social_links: {
      facebook: "",
      twitter: "",
      instagram: "",
      linkedin: "",
    },
  });

  useEffect(() => {
    if (profile?.social_links) {
      try {
        const parsedLinks = typeof profile.social_links === "string"
          ? JSON.parse(profile.social_links)
          : profile.social_links;

        setData(prev => ({
          ...prev,
          social_links: { ...prev.social_links, ...parsedLinks },
        }));
      } catch (error) {
        console.error("Invalid social_links JSON:", error);
      }
    }
  }, [profile?.social_links]);

  const handleInputChange = (key, value) => {
    setData(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSocialChange = (platform, value) => {
    setData(prev => {
      const updatedSocialLinks = { ...prev.social_links };

      if (value.trim() === "") {
        const { [platform]: _, ...rest } = updatedSocialLinks;
        return {
          ...prev,
          social_links: Object.keys(rest).length > 0 ? rest : {},
        };
      } else {
        return {
          ...prev,
          social_links: {
            ...updatedSocialLinks,
            [platform]: value,
          },
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    put(route("profile.update"), {
      onSuccess: () => {
        window.location.reload();
      }
    });
  };

  return (
    <>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl modal-dialog-scrollable modal-dialog-centered">
          <div className="modal-content custom-modal-height">
            <form onSubmit={handleSubmit} id="profile-form">
              <div className="modal-header">
                <h1 className="modal-title fs-5">Edit Data Diri</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <UserDataForm
                  formData={data}
                  errors={errors}
                  handleInputChange={handleInputChange}
                  handleSocialChange={handleSocialChange}
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                <button type="submit" className="btn-darkblue" disabled={processing}>
                  {processing ? "Menyimpan..." : "Simpan"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .custom-modal-height {
          max-height: 75vh; 
          overflow: hidden;
        }

        .custom-modal-height .modal-body {
          max-height: 60vh;
          overflow-y: auto;
        }
      `}</style>
    </>
  );
}