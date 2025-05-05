import { useEffect, useRef, useState } from "react";
import { router } from '@inertiajs/react';


export default function CameraModal({ show, onClose, mode = 'upload' }) {
    const videoRef = useRef(null);
    const streamRef = useRef(null);
    const canvasRef = useRef(null);
    const [photoDataUrl, setPhotoDataUrl] = useState(null);
    const [restarting, setRestarting] = useState(false);

    const handleKeyPress = (event) => {
        if (event.key === "Escape") {
            onClose();
        }
    };

    useEffect(() => {
        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                streamRef.current = stream;
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error("Gagal mengakses kamera:", error);
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        if (show) {
            setPhotoDataUrl(null);
            setRestarting(false);
            startCamera();
        }

        return () => {
            window.removeEventListener("keydown", handleKeyPress);

            if (streamRef.current) {
                streamRef.current.getTracks().forEach((track) => track.stop());
                streamRef.current = null;
            }
        };
    }, [show]);

    const takePhoto = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;

        if (!video || !canvas) return;

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL("image/png");

        setPhotoDataUrl(dataUrl);
    };

    const resetPhoto = () => {
        setRestarting(true);
        setPhotoDataUrl(null);

        setTimeout(() => {
            if (videoRef.current && streamRef.current) {
                videoRef.current.srcObject = streamRef.current;
            }
            setRestarting(false);
        }, 50);
    };

    const savePhoto = () => {
        if (!photoDataUrl) return;
    
        router.post(route('document.ktp.upload'), { photo: photoDataUrl }, {
            onSuccess: () => {
                console.log('Foto berhasil dikirim.');
                onClose();
            },
            onError: (errors) => {
                console.error('Gagal mengunggah foto:', errors);
            }
        });
    };

    if (!show) return null;

    return (
        <div
            className="modal fade show d-block"
            role="dialog"
            aria-modal="true"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            onClick={onClose}
        >
            <div
                className="modal-dialog modal-dialog-centered"
                role="document"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Ambil Foto KTP</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body position-relative text-center p-0">
                        {photoDataUrl && !restarting ? (
                            <img
                                src={photoDataUrl}
                                alt="Preview KTP"
                                className="w-100 rounded"
                                style={{ maxHeight: "400px", objectFit: "contain" }}
                            />
                        ) : (
                            <video
                                ref={videoRef}
                                autoPlay
                                playsInline
                                className="w-100 rounded"
                                style={{ maxHeight: "400px", objectFit: "cover" }}
                            />
                        )}

                        {!photoDataUrl && !restarting && (
                            <div
                                className="position-absolute"
                                style={{
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: "80%",
                                    aspectRatio: "3 / 2",
                                    border: "3px dashed #00bcd4",
                                    borderRadius: "8px",
                                    pointerEvents: "none",
                                    boxShadow: "0 0 10px rgba(0, 188, 212, 0.7)",
                                }}
                            ></div>
                        )}
                    </div>

                    <div className="modal-footer justify-content-center">
                        {photoDataUrl && !restarting ? (
                            <>
                                <button className="btn btn-secondary" onClick={resetPhoto}>
                                    Ulangi
                                </button>
                                <button className="btn btn-primary" onClick={savePhoto}>
                                    Simpan Foto
                                </button>
                            </>
                        ) : (
                            <button className="btn btn-success" onClick={takePhoto}>
                                Ambil Foto
                            </button>
                        )}
                    </div>

                    <canvas ref={canvasRef} style={{ display: "none" }} />
                </div>
            </div>
        </div>
    );
}
