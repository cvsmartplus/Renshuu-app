import { Head, useForm } from "@inertiajs/react";
import { useRef, useEffect } from "react";
import { toast } from "react-toastify"; 

export default function OTPVerification({ email }) {
    const { data, setData, post, processing, errors } = useForm({ otp: "" });
    const inputRefs = useRef([]);

    useEffect(() => {
        if (errors.otp) {
            toast.error(errors.otp, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    }, [errors]);

    const handleChange = (e, index) => {
        const value = e.target.value.replace(/[^0-9]/g, "");
        const newOtp = data.otp.split("");
        newOtp[index] = value;
        setData("otp", newOtp.join(""));

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !data.otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("otp.verify.post"));
    };

    return (
        <>
            <Head title="Verifikasi OTP" />
            <section className="py-5 d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="container">
                    <div className="row gy-4 align-items-center justify-content-center">
                        <div className="col-md-6 col-xl-7 d-flex justify-content-center">
                            <img
                                className="img-fluid"
                                loading="lazy"
                                src="../images/assets/OtpIlustration.png"
                                alt="OTP Banner"
                            />
                        </div>
                        <div className="col-md-6 col-xl-5 d-flex justify-content-center">
                            <div className="card p-4 border-1 rounded-3" style={{ maxWidth: "420px", width: "100%" }}>
                                <div className="mb-3">
                                    <h2 className="fw-bold">Verifikasi OTP</h2>
                                    <p className="text-muted">Langkah 2 dari 3</p>
                                    <p>
                                        Kami telah mengirimkan kode OTP ke <strong>{email}</strong>. Masukkan 6 digit
                                        kode untuk melanjutkan.
                                    </p>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={submit} className="text-center">
                                        <div className="d-flex justify-content-center gap-2 mb-3">
                                            {[...Array(6)].map((_, index) => (
                                                <input
                                                    key={index}
                                                    ref={(el) => (inputRefs.current[index] = el)}
                                                    type="text"
                                                    maxLength="1"
                                                    className="form-control text-center"
                                                    style={{
                                                        width: "50px",
                                                        height: "50px",
                                                        fontSize: "1.5rem",
                                                    }}
                                                    value={data.otp[index] || ""}
                                                    onChange={(e) => handleChange(e, index)}
                                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                                    required
                                                />
                                            ))}
                                        </div>
                                        <p className="fs-6 text-danger">{errors.otp}</p>
                                        <button
                                            type="submit"
                                            className="btn-brand-950 w-100 mt-3 py-2 rounded"
                                            disabled={processing}
                                        >
                                            Verifikasi
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}