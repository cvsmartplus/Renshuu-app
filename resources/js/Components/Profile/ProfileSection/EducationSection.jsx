export default function EducationSection({ educations }) {
    return (
        <div className="border rounded mb-3 p-3">
            <h3>Pendidikan</h3>
            <hr />
            {educations.length > 0 ? (
                educations.map((edu, idx) => (
                    <div key={idx} className="mb-2">
                        <strong>{edu.degree}</strong><br />
                        <span>{edu.institution}</span><br />
                        <small>{edu.start_year} - {edu.end_year || 'Sekarang'}</small>
                        <p>{edu.description}</p>
                    </div>
                ))
            ) : (
                <p>-</p>
            )}
        </div>
    );
}
