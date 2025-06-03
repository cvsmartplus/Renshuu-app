import React, { Component } from 'react';
import { FaRocket, FaBriefcase, FaShieldAlt } from 'react-icons/fa';

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        {
          id: 1,
          icon: <FaRocket size={36} />,
          title: 'Mulai Karirmu Lebih Cepat',
          text: 'Temukan lowongan sesuai minat dan keahlian hanya dalam hitungan menit.',
        },
        {
          id: 2,
          icon: <FaBriefcase size={36} />,
          title: 'Akses Ribuan Lowongan',
          text: 'Jelajahi berbagai peluang kerja dari perusahaan terpercaya di seluruh Indonesia.',
        },
        {
          id: 3,
          icon: <FaShieldAlt size={36} />,
          title: 'Platform Aman & Terpercaya',
          text: 'Setiap lowongan diverifikasi untuk menjamin kenyamanan dan keamanan pengguna.',
        },
      ],
    };
  }

  render() {
    const cardStyle = {
      borderRadius: '2%',
      background: 'rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
      color: '#fff',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'default',
    };

    const iconStyle = {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      background: "linear-gradient(135deg, #217def 0%, #379cfa 100%)",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      marginBottom: '1rem',
    };

    return (
      <section
        className="pb-5 mt-0 mt-md-n5"
        style={{
          background: 'linear-gradient(to right, #1c488c, #082f49)',
        }}
      >
        <div className="container">
          <div className="row g-4">
            {this.state.features.map((feature) => (
              <div
                className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch"
                key={feature.id}
              >
                <div
                  className="w-100 p-4"
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      '0 8px 40px rgba(0, 0, 0, 0.3)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      '0 4px 20px rgba(0, 0, 0, 0.15)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={iconStyle}>{feature.icon}</div>
                  <h5 className="fw-semibold mb-2 text-white">{feature.title}</h5>
                  <p
                    className="mb-0"
                    style={{
                      fontSize: '0.95rem',
                      color: 'rgba(255,255,255,0.85)',
                      lineHeight: 1.6,
                    }}
                  >
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Features;