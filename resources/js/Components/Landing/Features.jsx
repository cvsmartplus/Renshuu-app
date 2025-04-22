import React, { Component } from 'react';

class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
            features: [
                {
                    id: 1,
                    icon: 'fas fa-award',
                    title: 'Dapatkan Sertifikat',
                    text: 'Lorem ipsum dolor sit amet dui consectetuer adipiscing elit.',
                },
                {
                    id: 2,
                    icon: 'fas fa-graduation-cap',
                    title: 'Tingkatkan Skill',
                    text: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit.',
                },
                {
                    id: 3,
                    icon: 'fas fa-search',
                    title: 'Temukan Pekerjaan',
                    text: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit.',
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
                                    <div className="me-3 d-flex align-items-center justify-content-center p-3" style={{ width: '60px', height: '60px' }}>
                                        <i className={`${feature.icon} fs-1`}></i>
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
