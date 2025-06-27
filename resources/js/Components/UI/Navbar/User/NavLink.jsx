import { Link } from "@inertiajs/react";

export default function NavLink({ scrolled }) {
    const textColorClass = scrolled ? "text-dark" : "text-light";

    return (
        <ul className="navbar-nav me-auto mt-3 mt-lg-0">
            <li className="nav-item nav-dropdown-hover">
                <div className={`nav-link ${textColorClass} nav-dropdown-toggle`} id="careerDropdown">
                    Pekerjaan
                </div>
                <div className="nav-dropdown-menu custom-dropdown" aria-labelledby="careerDropdown">
                    <div className="dropdown-grid">
                        <div className="dropdown-column">
                            <h6 className="dropdown-heading">Cari Lowongan</h6>
                            <Link href={route("job.index")} className="dropdown-item">Semua Pekerjaan</Link>
                            <Link href="#" className="dropdown-item">Kategori</Link>
                            <Link href="#" className="dropdown-item">Populer</Link>
                        </div>
                        <div className="dropdown-column">
                            <h6 className="dropdown-heading">Untuk Pencari Kerja</h6>
                            <Link href="#" className="dropdown-item">Tips CV & Wawancara</Link>
                            <Link href="#" className="dropdown-item">Pekerjaan Disimpan</Link>
                            <Link href="#" className="dropdown-item">Riwayat Lamaran</Link>
                        </div>
                    </div>
                </div>
            </li>

            <li className="nav-item nav-dropdown-hover">
                <div className={`nav-link ${textColorClass}`} id="articleDropdown">
                    Artikel
                </div>
                <div className="nav-dropdown-menu custom-dropdown" aria-labelledby="articleDropdown">
                    <div className="dropdown-grid">
                        <div className="dropdown-column">
                            <h6 className="dropdown-heading">Eksplorasi</h6>
                            <Link href={route("article.index")} className="dropdown-item">Semua Artikel</Link>
                            <Link href="#" className="dropdown-item">Artikel Populer</Link>
                            <Link href="#" className="dropdown-item">Artikel Terbaru</Link>
                        </div>
                        <div className="dropdown-column">
                            <h6 className="dropdown-heading">Topik</h6>
                            <Link href="#" className="dropdown-item">Karier</Link>
                            <Link href="#" className="dropdown-item">Soft Skill</Link>
                            <Link href="#" className="dropdown-item">Teknologi</Link>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <Link href={"#about"} className="nav-link">Tentang</Link>
            </li>
        </ul>
    );
}