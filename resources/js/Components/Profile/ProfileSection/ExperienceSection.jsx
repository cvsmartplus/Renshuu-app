export default function ExperienceSection({ experiences }) {
    return (
        <div className="border rounded mb-3 p-3">
            <h3>Pengalaman</h3>
            <hr />
            {experiences.length > 0 ? (
                experiences.map((exp, idx) => (
                    <div key={idx} className="mb-2">
                        <strong>{exp.title}</strong><br />
                        <span>{exp.company}</span><br />
                        <small>{exp.start_year} - {exp.end_year || 'Sekarang'}</small>
                        <p>{exp.description}</p>
                    </div>
                ))
            ) : (
                <p>-</p>
            )}
        </div>
    );
}
