import { useState } from "react";
import { router } from "@inertiajs/react";
import ImageUploadModal from "@/Components/UI/Modal/ImageUploadModal";

export default function ProfileBanner({
  profileImage,
  bannerimg,
  avatarCrop,
  avatarOriginalSize,
  hasAvatar,
}) {
  const [showModal, setShowModal] = useState(false);

  const handleSave = (file, cropData) => {
    const formData = new FormData();
    if (file) formData.append("avatar", file);

    Object.entries(cropData).forEach(([key, value]) => {
      formData.append(`avatar_${key}`, value);
    });

    router.post(route("profile.avatar.update"), formData, {
      onSuccess: () => {
        setShowModal(false);
        location.reload();
      },
      onError: () => alert("Upload gagal. Coba lagi."),
    });
  };

  let avatarStyle = {
    width: "120px",
    height: "120px",
    backgroundImage: `url(${profileImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    cursor: "pointer",
  };

  if (hasAvatar && avatarCrop && avatarOriginalSize) {
    const { x, y, width, height } = avatarCrop;
    const originalWidth = avatarOriginalSize.width;
    const originalHeight = avatarOriginalSize.height;

    const scaleX = 120 / width;
    const scaleY = 120 / height;

    const bgSize = `${originalWidth * scaleX}px ${originalHeight * scaleY}px`;
    const bgPos = `-${x * scaleX}px -${y * scaleY}px`;

    avatarStyle = {
      ...avatarStyle,
      backgroundSize: bgSize,
      backgroundPosition: bgPos,
      backgroundRepeat: "no-repeat",
    };
  }

  return (
    <>
      <div className="position-relative">
        <img
          src={bannerimg}
          alt="Banner"
          className="img-fluid w-100 rounded"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="position-absolute" style={{ bottom: "-40px", left: "30px" }}>
          <div
            className="rounded-circle border border-white shadow"
            style={avatarStyle}
            title={hasAvatar ? "Ubah foto" : "Tambahkan foto"}
            onClick={() => setShowModal(true)}
          />
        </div>
      </div>

      <ImageUploadModal
        show={showModal}
        onClose={() => setShowModal(false)}
        currentImage={hasAvatar ? profileImage : null}
        onSave={handleSave}
      />
    </>
  );
}
