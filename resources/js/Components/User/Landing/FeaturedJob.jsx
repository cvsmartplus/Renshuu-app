export default function JobCategorySection() {
  const jobTypes = [
    "Full-time Jobs",
    "Part-time Jobs",
    "Internship Jobs",
    "Remote Jobs",
    "Entry-level Jobs",
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#eef5fd' }}>
      <div className="container py-4">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold text-dark">
              Temukan Karier Idealmu dengan Cepat
            </h2>
            <p className="text-muted mt-3">
              Jelajahi berbagai peluang karier yang kami sediakan khusus untukmu. 
              Dari pekerjaan penuh waktu yang menantang hingga fleksibilitas kerja remote, 
              kami membantu kamu menemukan posisi sempurna yang sesuai dengan gaya hidup 
              dan aspirasi profesionalmu.
            </p>
          </div>

          <div className="col-md-6">
            <div
              className="p-4 rounded-4 border bg-white"
              style={{
                minHeight: '100%',
              }}
            >
              {jobTypes.map((type, index) => (
                <div
                  key={index}
                  className={`py-3 px-2 border-bottom ${
                    index === jobTypes.length - 1 ? 'border-0' : ''
                  }`}
                >
                  <a
                    href="#"
                    className="text-decoration-none text-dark fw-medium d-block hover-effect"
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    {type} <span className="float-end">→</span>
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