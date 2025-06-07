import {
  FaBriefcase,
  FaClock,
  FaUserGraduate,
  FaGlobe,
  FaLaptop,
} from "react-icons/fa";
import '../../../../sass/featuredJob.scss';

export default function JobCategorySection() {
  const jobTypes = [
    { label: "Full-time Jobs", icon: <FaBriefcase /> },
    { label: "Part-time Jobs", icon: <FaClock /> },
    { label: "Internship Jobs", icon: <FaUserGraduate /> },
    { label: "Remote Jobs", icon: <FaGlobe /> },
    { label: "Entry-level Jobs", icon: <FaLaptop /> },
  ];

  return (
    <section className="py-5 bg-brand-50">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex align-items-center mb-4 mb-lg-0">
            <div className="text-center text-lg-start w-100 pe-lg-5">
              <h2 className="fw-bold text-dark">Pilih Jenis Pekerjaanmu</h2>
              <p className="text-muted">
                Temukan berbagai jenis pekerjaan yang sesuai dengan kebutuhan dan gaya hidupmu.
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="row">
              {jobTypes.map((type, index) => (
                <div key={index} className="col-6 col-md-4 mb-4">
                  <a href="#" className="text-decoration-none">
                    <div className="job-tile p-3 text-dark text-center position-relative overflow-hidden">
                      <div className="job-content d-flex flex-column align-items-center justify-content-center transition-fade">
                        <div className="icon-wrapper bg-brand-900 mb-2">{type.icon}</div>
                        <span className="fw-semibold small">{type.label}</span>
                      </div>

                      <div className="job-hover position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center transition-fade">
                        <span className="text-brand-900 fw-semibold">Lihat →</span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}