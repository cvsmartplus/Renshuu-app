import CourseCard from "../Card/CourseCard";

export default function CourseGrid({courses}){
    return(
        <>
            <div className="container my-5">
                <div className="row">
                    {courses.length > 0 ? (
                        courses.map((course) => (
                            <div key={course.id} className="col-md-4 mb-3">
                                <CourseCard course={course} />
                            </div>
                    ))) : (
                        <p className="text-center w-100">Tidak ada kursus yang ditemukan.</p>
                    )}
                </div>
            </div>

            {}
        </>
    );
}
