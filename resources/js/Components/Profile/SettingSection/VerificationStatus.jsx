import { useForm } from "@inertiajs/react";
import { toast } from "react-toastify";

export default function VerificationStatus() {
    const { post, processing } = useForm();

    const resendVerification = () => {
        post(route('verification.send'), {
            onSuccess: () => {
                toast.success("Link verifikasi telah dikirim ke email kamu.");
            },
            onError: () => {
                toast.error("Gagal mengirim email verifikasi. Silakan coba lagi.");
            },
        });
    };

    return (
        <div className="card shadow-sm rounded border-0 border-start border-info border-4">
            <div className="card-body">
                <h5 className="fw-semibold">Status Verifikasi</h5>
                <p className="text-muted mb-3">Email kamu belum diverifikasi.</p>
                <button
                    className="btn btn-outline-info"
                    disabled={processing}
                    onClick={resendVerification}
                >
                    {processing ? 'Mengirim...' : 'Kirim Ulang Email Verifikasi'}
                </button>
            </div>
        </div>
    );
}