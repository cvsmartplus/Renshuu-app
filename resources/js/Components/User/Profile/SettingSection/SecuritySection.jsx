export default function SecuritySection() {
    return (
        <div className="card shadow-sm rounded border-0">
            <div className="card-body">
                <h5 className="fw-semibold">Keamanan</h5>
                <div className="form-check form-switch my-3">
                    <input className="form-check-input" type="checkbox" role="switch" id="enable2FA" />
                    <label className="form-check-label" htmlFor="enable2FA">Aktifkan Autentikasi Dua Faktor (2FA)</label>
                    <div className="form-text">Gunakan Google Authenticator atau SMS untuk keamanan tambahan.</div>
                </div>
                <hr />
                <h6>Aktivitas Login Terakhir</h6>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Chrome - 192.168.0.1 - 03 Mei 2025</li>
                    <li className="list-group-item">Mobile - 10.10.10.10 - 01 Mei 2025</li>
                </ul>
            </div>
        </div>
    );
}