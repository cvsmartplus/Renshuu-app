import RegisterForm from "@/Components/UI/Forms/RegisterForm";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";

export default function Register() {
    return (
        <>
            <Head title="Register" />
            <Layout>
                <section className="py-3 py-md-5 py-xl-8">
                    <div className="container">
                        <div className="row gy-4 align-items-center">
                            <div className="col-12 col-md-6 col-xl-7 d-flex justify-content-center">
                                <div className="col-12 col-xl-9">
                                    <img className="img-fluid" loading="lazy" src="../images/assets/register.png" alt="Register" />
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-xl-5 d-flex justify-content-center">
                                <div className="card p-3 shadow-sm" style={{ maxWidth: "480px", width: "100%" }}>
                                    <div className="align-items-center d-flex justify-content-center flex-wrap">
                                        <h2 className="text-bold">Daftar</h2>
                                        <p className="text-muted text-center">Ayo bergabung bersama kami dan dapatkan pengalaman baru</p>
                                    </div>

                                    <div className="card-body">
                                        <RegisterForm />

                                        <div className="mt-3">
                                            <p className="text-center">
                                                Sudah punya akun?{" "}
                                                <a className="text-decoration-none text-brand-950" data-bs-toggle="modal" data-bs-target="#loginModal" style={{ cursor: "pointer" }}>
                                                    Masuk
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
