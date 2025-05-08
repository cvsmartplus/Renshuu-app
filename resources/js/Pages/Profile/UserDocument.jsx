import { useState } from "react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head, router } from "@inertiajs/react";
import DocumentCard from "@/Components/UI/Card/DocumentCard";
import UploadKtpModal from "@/Components/UI/Modal/UploadKtpModal";
import CameraModal from "@/Components/UI/Modal/CameraModal";
import UploadCvModal from "@/Components/UI/Modal/UploadCvModal";

export default function UserDocument({ documents }) {
    const [showKtpModal, setShowKtpModal] = useState(false);
    const [showCvModal, setShowCvModal] = useState(false);
    const [showCameraModal, setShowCameraModal] = useState(false);
    const [isReplacingKtp, setIsReplacingKtp] = useState(false);

    const ktp = documents?.find((doc) => doc.document_type === 'ktp');
    const cv = documents?.find((doc) => doc.document_type === 'cv');

    

    return (
        <DashboardLayout>
            <Head title="Dokumen Saya" />
            <div className="container mt-5">
                <h2 className="mb-4">Dokumen Saya</h2>

                <div className="row g-4">
                    <DocumentCard
                        title="KTP"
                        file={ktp}
                        onUpload={() => setShowKtpModal(true)}
                        onReplace={() => {
                            setIsReplacingKtp(true);
                            setShowKtpModal(true); 
                        }}
                        onDelete={() =>
                            router.delete(route('document.ktp.delete'), {
                                onSuccess: () => console.log('Dokumen berhasil dihapus.'),
                                onError: (e) => console.error('Gagal menghapus dokumen:', e),
                            })
                        }
                    />
                    <DocumentCard
                        title="CV"
                        file={cv}
                        onUpload={() => setShowCvModal(true)}
                        onReplace={() => setShowCvModal(true)}
                        onDelete={() =>
                        router.delete(route('document.cv.delete'), {
                            onSuccess: () => console.log('CV berhasil dihapus.'),
                            onError: (e) => console.error('Gagal menghapus CV:', e),
                        })
                        }
                    />
                </div>

                <UploadKtpModal
                    show={showKtpModal}
                    onClose={() => setShowKtpModal(false)}
                    onCameraClick={() => {
                        setShowKtpModal(false); 
                        setShowCameraModal(true);
                    }}
                    onFileClick={(file) => {
                        setShowKtpModal(false);

                        const formData = new FormData();
                        formData.append('document_type', 'ktp');
                        formData.append('file', file);

                        router.post(route('document.ktp.upload'), formData, {
                            onSuccess: () => console.log("File berhasil diunggah"),
                            onError: (errors) => console.error("Gagal unggah:", errors),
                        });
                    }}
                />

                <UploadCvModal
                    show={showCvModal}
                    onClose={() => setShowCvModal(false)}
                    onFileClick={(file) => {
                        setShowCvModal(false);

                        const formData = new FormData();
                        formData.append('document_type', 'cv');
                        formData.append('file', file);

                        router.post(route('document.cv.upload'), formData, {
                            onSuccess: () => console.log("File berhasil diunggah"),
                            onError: (errors) => console.error("Gagal unggah:", errors),
                        });
                    }}
                />

                <CameraModal
                    show={showCameraModal}
                    onClose={() => setShowCameraModal(false)}
                    mode={ktp ? 'replace' : 'upload'}
                />
            </div>
        </DashboardLayout>
    );
}