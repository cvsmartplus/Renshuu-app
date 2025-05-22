import React, { Component } from 'react';
import { FaAward, FaGraduationCap, FaSearch } from 'react-icons/fa';

class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
            features: [
                {
                    id: 1,
                    icon: <FaAward size={32} />,
                    title: 'Dapatkan Sertifikat',
                    text: 'Raih sertifikat yang diakui secara internasional dan tingkatkan peluang karir Anda.',
                },
                {
                    id: 2,
                    icon: <FaGraduationCap size={32} />,
                    title: 'Tingkatkan Skill',
                    text: 'Ikuti kursus kami untuk mengembangkan keterampilan baru dan memperdalam pengetahuan Anda.',
                },
                {
                    id: 3,
                    icon: <FaSearch size={32} />,
                    title: 'Temukan Pekerjaan',
                    text: 'Telusuri berbagai lowongan pekerjaan yang sesuai dengan minat dan keahlian Anda.',
                },
            ]
        }
    }

    render() {
        return (
            <section className="d-flex justify-content-center align-items-center" style={{ marginTop:'-60px' }}>
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-between align-items-stretch bg-white shadow p-3 rounded">
                        {this.state.features.map((feature) => (
                            <div className="col-md-4 col-sm-12 d-flex" key={feature.id}>
                                <div className="d-flex align-items-center rounded p-3 w-100">
                                    <div className="me-3 d-flex align-items-center justify-content-center p-3" style={{ width: '100px', height: '100px' }}>
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-1">{feature.title}</h6>
                                        <p className="text-muted mb-0" style={{ fontSize: '14px' }}>{feature.text}</p>
                                    </div>
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