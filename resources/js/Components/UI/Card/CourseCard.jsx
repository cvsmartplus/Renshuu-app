import { Link } from "@inertiajs/react";

export default function CourseCard({ course }) {

  return (
    <div
      className={`card shadow-sm p-2 d-flex flex-column h-100`}
    >
      <img src={course.image} className="card-img-top" alt={course.title} style={{ objectFit: "cover", height: "200px" }} />
      <div className="card-body text-start d-flex flex-column flex-grow-1">
        <h5 className="card-title fs-4 mb-3">{course.title}</h5>
        <p className="card-text flex-grow-1">{course.description}</p>
        <div className="d-flex align-items-center mb-2">
          <i className="fas fa-user me-2"></i> {course.student}
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <p className="text-dark">
            Harga: <b>Rp10.000</b>
          </p>
          <Link href={route("course.show", { slug: course.slug })} className="text-dark text-decoration-none">
            Selengkapnya &gt;
          </Link>
        </div>
      </div>
    </div>
  );
}
