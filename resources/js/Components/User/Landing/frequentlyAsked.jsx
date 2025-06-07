import React from 'react';

export default function FrequentlyAsked() {
    const handleBlur = (index) => {
        const collapse = document.getElementById(`collapse${index}`);
        const bsCollapse = window.bootstrap.Collapse.getInstance(collapse);
        if (bsCollapse) {
            bsCollapse.hide();
        }
    };

    return (
        <section className="py-5 py-lg-7" id="faq" style={{ background: "linear-gradient(to right, #1c488c, #082f49)" }}>
            <div className="container">
                <h2 className="display-5 fw-bold text-center mb-5 text-light">
                    Pertanyaan yang Sering Diajukan
                </h2>
                <div className="accordion accordion-flush" id="faqAccordion">
                    {faqData.map((item, index) => (
                        <div
                            className="accordion-item bg-brand-950 border-0 rounded-3 mb-3"
                            key={index}
                        >
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button
                                    className="accordion-button collapsed border border-brand-800 bg-brand-950 text-brand-100 fw-semibold"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${index}`}
                                    aria-expanded="false"
                                    aria-controls={`collapse${index}`}
                                    onBlur={() => handleBlur(index)}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse${index}`}
                                className="accordion-collapse collapse"
                                aria-labelledby={`heading${index}`}
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body mt-2 bg-brand-100 text-brand-950 border-0 rounded-bottom-3">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


const faqData = [
    {
        question: 'Apa itu Renshuu?',
        answer: 'Renshuu adalah platform digital pencarian kerja dari CV SmartPlus Indonesia. Kami menyediakan solusi cerdas dan terpercaya untuk menemukan pekerjaan yang sesuai dengan keahlian Anda.',
    },
    {
        question: 'Apakah layanan Renshuu gratis?',
        answer: 'Ya, semua fitur pencarian kerja di Renshuu dapat diakses secara gratis oleh pencari kerja.',
    },
    {
        question: 'Bagaimana cara melamar pekerjaan di Renshuu?',
        answer: 'Buat akun, lengkapi profil Anda, lalu klik "Lamar" pada lowongan yang Anda inginkan. Anda juga bisa menyimpan lowongan untuk dilamar kapan saja.',
    },
    {
        question: 'Apakah lowongan di Renshuu terpercaya?',
        answer: 'Semua lowongan di Renshuu telah diverifikasi untuk memastikan keaslian dan kualitasnya, memberikan Anda kepercayaan dalam mencari kerja.',
    },
    {
        question: 'Apakah Renshuu hanya untuk bidang teknologi?',
        answer: 'Tidak, Renshuu menawarkan lowongan dari berbagai industri, seperti teknologi, kreatif, pendidikan, kesehatan, dan banyak lagi.',
    },
    {
        question: 'Bagaimana jika saya lupa kata sandi akun?',
        answer: 'Gunakan opsi "Lupa Kata Sandi" di halaman login dan ikuti petunjuk yang dikirim melalui email untuk mengatur ulang kata sandi Anda.',
    },
];