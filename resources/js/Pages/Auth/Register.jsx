import RegisterForm from "@/Components/UI/Forms/RegisterForm";
import Layout from "@/Layouts/Layout";
import { Head, Link } from "@inertiajs/react";

export default function Register() {
    return (
        <>
            <Head title="Register" />
            <Layout withNavigation={false}>
                <section style={{ background: "linear-gradient(to right, #1c488c, #082f49, #082f49)", padding: "15vh 0" }}>
                    <div className="container">
                        <div className="row gy-4 align-items-center">
                            <div className="col-12 col-md-6 col-xl-7 d-flex justify-content-center">
                                <div className="col-12 col-xl-9">
                                    <img className="img-fluid" loading="lazy" src="../images/assets/register.png" alt="Register" />
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-xl-5 d-flex justify-content-center">
                                <div className="card p-3"
                                    style={{
                                        maxWidth: "500px",
                                        background: "rgba(255, 255, 255, 0.1)",
                                        backdropFilter: "blur(12px)",
                                        border: "1px solid rgba(255, 255, 255, 0.2)",
                                        borderRadius: '2%',
                                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                        willChange: "transform, box-shadow",
                                    }}
                                >
                                    <div className="align-items-center d-flex justify-content-center flex-wrap">
                                        <h2 className="text-light">Daftar</h2>
                                        <p className="text-light text-center">Ayo bergabung bersama kami dan dapatkan pengalaman baru</p>
                                    </div>

                                    <div className="card-body">
                                        <RegisterForm />

                                        <div className="mt-3">
                                            <p className="text-center text-light">
                                                Sudah punya akun?{" "}
                                                <Link
                                                    href={route("login")}
                                                    className="text-decoration-none text-brand-200"
                                                >
                                                    Masuk
                                                </Link>
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
