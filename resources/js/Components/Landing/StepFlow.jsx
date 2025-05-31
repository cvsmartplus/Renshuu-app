import React, { Component } from 'react';

class StepFlow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            processLeft: [
                { id: 1, step: '01', title: 'Daftar dan Lengkapi Data Diri Anda', text: 'Lengkapi data diri untuk memulai mengembangkan diri Anda bersama kami.' },
                { id: 2, step: '02', title: 'Belajar Secara Hybrid', text: 'Ikuti program pembelajaran yang menggabungkan metode online dan tatap muka.' },
                { id: 3, step: '03', title: 'Dapatkan Sertifikat Kursus!', text: 'Selesaikan kursus dan dapatkan sertifikat yang diakui secara profesional.' }
            ],
            processRight: [
                { id: 1, step: '01', title: 'Daftar dan Lengkapi Data Diri Anda', text: 'Lengkapi data diri untuk memulai perjalanan karir Anda bersama kami.' },
                { id: 2, step: '02', title: 'Cari Pekerjaan yang Diminati', text: 'Telusuri berbagai lowongan pekerjaan yang sesuai dengan minat dan keahlian Anda' },
                { id: 3, step: '03', title: 'Lamar dan Tunggu Informasinya!', text: 'Ajukan lamaran kerja dan tunggu informasi lebih lanjut dari perusahaan.' }
            ]
        }
    }

    render() {
        return (
            <>
            <section className="work-process">
                <div className="container">
                    <hr/>
                    <div className='py-5'>
                    <header className="text-start py my-5">
                        <h1 className="fw-bold">Mulai Perjalanan Karirmu dengan Kami!</h1>
                        <p className="text-muted">Nikmati kesempatan untuk berkolaborasi dengan para pemimpin industri dan meningkatkan karir Anda</p>
                    </header>
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <div className="row">
                                {this.state.processLeft.map((data) => (
                                    <div className="col-12 mb-4" key={data.id}>
                                        <div className="d-flex align-items-start">
                                        <div className="step-number rounded-circle bg-bluesky fw-bold d-flex align-items-center justify-content-center me-3"
                                            style={{ width: '50px', height: '50px', minWidth: '50px', minHeight: '50px', borderRadius: '50%' }}>
                                            {data.step}
                                        </div>

                                            <div className="step-text">
                                                <h5 className="fw-bold">{data.title}</h5>
                                                <p className="text-muted mb-0">{data.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                {this.state.processRight.map((data) => (
                                    <div className="col-12 mb-4" key={data.id}>
                                        <div className="d-flex align-items-start">
                                        <div className="step-number rounded-circle bg-bluesky fw-bold d-flex align-items-center justify-content-center me-3"
                                            style={{ width: '50px', height: '50px', minWidth: '50px', minHeight: '50px', borderRadius: '50%' }}>
                                            {data.step}
                                        </div>

                                            <div className="step-text">
                                                <h5 className="fw-bold">{data.title}</h5>
                                                <p className="text-muted mb-0">{data.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-4 text-center d-flex align-items-center justify-content-center">
                            <div className="video-container bg-light d-flex align-items-center justify-content-center"
                                style={{ width: '100%', height: '180px', borderRadius: '10px' }}>
                                <button className="btn btn-danger rounded-circle"
                                        style={{ width: '50px', height: '50px' }}>
                                    &#9658;
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
                    <hr />
                </div>
            </section>
            </>
        );
    }
}

export default StepFlow;
