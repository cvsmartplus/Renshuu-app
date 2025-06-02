import React, { Component } from 'react';
import { FaSearch, FaFileAlt, FaPaperPlane, FaClock } from 'react-icons/fa';

class StepFlow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [
        {
          id: 1,
          icon: <FaSearch size={20} />,
          title: 'Jelajahi Lowongan',
          description: 'Cari posisi yang sesuai dengan keahlian dan minatmu.',
        },
        {
          id: 2,
          icon: <FaFileAlt size={20} />,
          title: 'Lengkapi Data & Dokumen',
          description: 'Pastikan profilmu lengkap dan valid agar lolos tahap awal.',
        },
        {
          id: 3,
          icon: <FaPaperPlane size={20} />,
          title: 'Kirim Lamaran',
          description: 'Ajukan lamaran ke lowongan yang kamu minati.',
        },
        {
          id: 4,
          icon: <FaClock size={20} />,
          title: 'Tunggu Proses Seleksi',
          description: 'Tim HR akan meninjau lamaranmu sebelum menghubungi kandidat terpilih.',
        },
      ],
    };
  }

  render() {
    return (
      <section
        className="p-5"
        id="how-it-works"
        style={{ background: 'linear-gradient(to right, #1c488c, #082f49)' }}
      >
        <div className="container">
          <div
            className="row align-items-center p-4"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#fff',
              borderRadius: '0 0 20px 20px',
            }}
          >
            <div className="col-12 col-lg-5 text-center">
              <img
                src="./assets/images/ilustration/how-it-works.svg"
                alt="Job Search Illustration"
                className="img-fluid rounded"
                style={{ maxHeight: '300px', objectFit: 'contain' }}
              />
            </div>

            <div className="col-12 col-lg-7">
              <div className="text-center text-lg-start mb-4">
                <h2 className="fw-bold text-white">
                  Langkah Mudah dalam Mencari Pekerjaan di Renshuu
                </h2>
                <p className="text-white-50">
                  Ikuti 4 langkah sederhana untuk memulai karirmu bersama perusahaan impian.
                </p>
              </div>

              <div className="row g-4">
                {this.state.steps.map((step) => (
                  <div className="col-12 col-md-6" key={step.id}>
                    <div className="p-3 bg-white rounded-4 shadow-sm h-100 text-dark">
                      <div
                        className="d-flex align-items-center justify-content-center mb-2"
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          backgroundColor: '#217def',
                          color: 'white',
                        }}
                      >
                        {step.icon}
                      </div>
                      <h6 className="fw-semibold mb-1">{step.title}</h6>
                      <p className="small text-muted mb-0">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default StepFlow;