export default function SideCardCourse({ course }) {
    return (
        <div className="col-lg-4 col-md-5 col-12">
            <div className="card shadow-sm p-2 rounded">
                <img src={course.image} className="card-img-top rounded" alt={course.title} />
                <div className="card-body">
                    <div className="d-flex">
                        <h5 className="text-danger fw-bold mb-0 fs-4">
                            {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(course.price - (course.price * course.discount / 100))}
                        </h5>
                        <p className="text-muted text-decoration-line-through ms-2 small">
                            {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(course.price)}
                        </p>
                        <span className="badge bg-light text-danger fw-bold">{course.discount}% off</span>
                    </div>
                    <hr />
                    <div className="mb-2"><i className="bi bi-bar-chart-fill me-2"></i><strong>Level:</strong> {course.level}</div>
                    <div className="mb-2"><i className="bi bi-people-fill me-2"></i><strong>Terdaftar:</strong> {course.student}</div>
                    <div className="mb-2"><i className="bi bi-calendar-event-fill me-2"></i><strong>Jadwal:</strong> 28 Januari 2008</div>
                    <div className="mb-3"><i className="bi bi-clock-fill me-2"></i><strong>Durasi:</strong> {course.duration}</div>
                    <div className="d-flex justify-content-center w-100">
                        <a href="#" className="btn-darkblue w-100 text-center">Daftar Sekarang</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
