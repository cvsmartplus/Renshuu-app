export default function AboutSection({ bio }) {
    return (
        <div className="border rounded mb-3 p-3">
            <h3>Tentang</h3>
            <hr />
            <p>{bio}</p>
        </div>
    );
}
