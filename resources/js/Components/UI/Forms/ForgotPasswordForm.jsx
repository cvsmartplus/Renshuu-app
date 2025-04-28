import { useEffect } from "react";
import { useForm } from "@inertiajs/react";
import InputField from "./ReusableFormComponents/InputField";
import { FaPaperPlane } from "react-icons/fa";

export default function ForgotPasswordForm({ setIsLoading }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    useEffect(() => {
        setIsLoading(processing);
    }, [processing, setIsLoading]);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <InputField
                    id="email"
                    label="Email"
                    type="email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    placeholder="Masukkan email Anda"
                    error={errors.email}
                    required
                />
            </div>

            <div className="d-grid">
                <button className="btn-darkblue" disabled={processing}>
                    <FaPaperPlane className="me-2" />
                    Kirim Link Reset
                </button>
            </div>
        </form>
    );
}
