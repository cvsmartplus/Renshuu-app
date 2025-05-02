import { useEffect, useRef, useState } from "react";
import Croppie from "croppie";
import "croppie/croppie.css";
import { IoMdCloudUpload } from "react-icons/io";

export default function ImageUploadModal({ show, onClose, onSave }) {
  const fileRef = useRef(null);
  const croppieRef = useRef(null);
  const croppieElRef = useRef(null);
  const [previewSrc, setPreviewSrc] = useState(null);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [lastPoints, setLastPoints] = useState(null); 

  useEffect(() => {
    if (!show || !croppieElRef.current || !previewSrc) return;
  
    if (croppieRef.current) {
      croppieRef.current.destroy(); 
    }
  
    croppieRef.current = new Croppie(croppieElRef.current, {
      viewport: { width: 200, height: 200, type: "circle" },
      boundary: { width: 300, height: 300 },
      showZoomer: true,
    });
  
    croppieRef.current.bind({ url: previewSrc });
  
    return () => {
      if (croppieRef.current) {
        croppieRef.current.destroy(); 
      }
    };
  }, [show, previewSrc]);  
  

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const maxSize = 3548 * 1024;

    if (file.size > maxSize) {
      alert("Ukuran gambar terlalu besar. Maksimal 3.5 MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewSrc(reader.result); 
      const img = new Image();
      img.onload = () => setImageSize({ width: img.width, height: img.height });
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    if (!croppieRef.current) return;
  
    const points = croppieRef.current.get().points;
    const [x1, y1, x2, y2] = points;
    const width = x2 - x1;
    const height = y2 - y1;
  
    if (width > 0 && height > 0) {
      const file = fileRef.current?.files[0];  // Safe access to avoid undefined
      if (!file) {
        alert("File tidak ditemukan.");
        return;
      }
  
      setLastPoints(points); // Simpan posisi crop untuk digunakan selanjutnya
      
      // Log untuk memastikan data sebelum dikirim
      console.log("Data yang disimpan:", {
        crop_x: x1,
        crop_y: y1,
        crop_width: width,
        crop_height: height,
        image_width: imageSize.width,
        image_height: imageSize.height,
      });
  
      // Memastikan onSave dipanggil dengan data yang benar
      onSave(file, {
        crop_x: x1,
        crop_y: y1,
        crop_width: width,
        crop_height: height,
        image_width: imageSize.width,
        image_height: imageSize.height,
      });
    } else {
      alert("Area crop tidak valid.");
    }
  };
  
  if (!show) return null;

  return (
    <div className="modal d-block" style={{ backgroundColor: "rgba(0,0,0,0.6)" }} onClick={onClose}>
      <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Ganti Gambar</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body text-center">
            <button className="btn-outline-darkblue mb-3" onClick={() => fileRef.current.click()}>
              <IoMdCloudUpload className="me-2 fs-5" />
              Upload
            </button>
            <input
              type="file"
              accept="image/*"
              ref={fileRef}
              onChange={handleFile}
              style={{ display: "none" }}
            />
            <div ref={croppieElRef} style={{ maxWidth: "300px", margin: "auto" }} />
          </div>
          <div className="modal-footer justify-content-between">
            <button className="btn btn-secondary" onClick={onClose}>Batal</button>
            <button className="btn-darkblue" onClick={handleSave}>Simpan</button>
          </div>
        </div>
      </div>
    </div>
  );
}