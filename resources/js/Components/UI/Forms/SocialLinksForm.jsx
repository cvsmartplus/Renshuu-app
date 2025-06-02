import React, { useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { toast } from "react-toastify";
import InputField from "./ReusableFormComponents/InputField";

const SocialLinksForm = ({ profile }) => {
  const { data, setData, put, processing, errors } = useForm({
    social_links: {
      facebook: "",
      twitter: "",
      instagram: "",
      linkedin: "",
      github: "",
    },
  });

  useEffect(() => {
    if (profile?.social_links) {
      try {
        const parsed = typeof profile.social_links === "string"
          ? JSON.parse(profile.social_links)
          : profile.social_links;

        setData(prev => ({
          social_links: { ...prev.social_links, ...parsed },
        }));
      } catch (error) {
        console.error("Invalid JSON for social_links:", error);
      }
    }
  }, [profile?.social_links]);

  const handleSocialChange = (platform, value) => {
    setData(prev => ({
      social_links: {
        ...prev.social_links,
        [platform]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    put(route("profile.social-links.update"), {
      onSuccess: () => {
        toast.success("Tautan sosial berhasil diperbarui!", {
          position: "top-right",
          autoClose: 2000,
        });
      },
      onError: () => {
        toast.error("Gagal menyimpan tautan sosial. Silakan periksa kembali!", {
          position: "top-right",
          autoClose: 2000,
        });
      },
    });
  };

  const socialMedia = ["facebook", "twitter", "instagram", "linkedin", "github"];

  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow-sm border-0 mt-4">
      <h4 className="mb-3">Tautan Sosial Media</h4>
      <div className="row">
        {socialMedia.map((platform) => (
          <div className="col-md-6" key={platform}>
            <InputField
              id={platform}
              label={platform.charAt(0).toUpperCase() + platform.slice(1)}
              type="url"
              value={data.social_links[platform] || ""}
              onChange={(e) => handleSocialChange(platform, e.target.value)}
              placeholder={`https://${platform}.com/username`}
              error={errors[`social_links.${platform}`]}
            />
          </div>
        ))}
      </div>
      <div className="w-100 mt-3">
        <button type="submit" className="btn-brand-950 w-100" disabled={processing}>
          {processing ? "Menyimpan..." : "Simpan"}
        </button>
      </div>
    </form>
  );
};

export default SocialLinksForm;