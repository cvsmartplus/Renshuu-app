import { Link } from "@inertiajs/react";

export default function NavLink({ scrolled }) {
    const textColorClass = scrolled ? "text-dark" : "text-light";

    return (
        <ul className="navbar-nav me-auto mt-3 mt-lg-0">
            <li className="nav-item dropdown dropdown-hover position-static">
                <div
                    className={`nav-link ${textColorClass}`}
                    id="careerDropdown"
                >
                    Pekerjaan
                </div>
                <div
                    className="dropdown-menu container justify-content-center align-items-center mt-0 border-0 shadow-lg"
                    aria-labelledby="careerDropdown"
                >
                    <div className="container py-3">
                        <div className="row">
                            <div className="col-md-4">
                                <h6 className="text-uppercase">Cari Lowongan</h6>
                                <Link href="#" className="dropdown-item">Semua Pekerjaan</Link>
                                <Link href="#" className="dropdown-item">Kategori</Link>
                                <Link href="#" className="dropdown-item">Populer</Link>
                            </div>
                            <div className="col-md-4">
                                <h6 className="text-uppercase">Untuk Pencari Kerja</h6>
                                <Link href="#" className="dropdown-item">Tips CV & Wawancara</Link>
                                <Link href="#" className="dropdown-item">Pekerjaan Disimpan</Link>
                                <Link href="#" className="dropdown-item">Riwayat Lamaran</Link>
                            </div>
                            <div className="col-md-4">
                                <img
                                    src="https://placehold.co/150/062A78/white?text=Hai+dunia"
                                    alt="Karier"
                                    className="img-fluid d-none d-md-block"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li className="nav-item dropdown dropdown-hover position-static">
                <div
                    className={`nav-link ${textColorClass}`}
                    id="articleDropdown"
                >
                    Artikel
                </div>
                <div
                    className="dropdown-menu w-100 mt-0 border-0 shadow-lg"
                    aria-labelledby="articleDropdown"
                >
                    <div className="container py-3">
                        <div className="row">
                            <div className="col-md-4">
                                <h6 className="text-uppercase">Eksplorasi</h6>
                                <Link href={route("article.index")} className="dropdown-item">Semua Artikel</Link>
                                <Link href="#" className="dropdown-item">Artikel Populer</Link>
                                <Link href="#" className="dropdown-item">Artikel Terbaru</Link>
                            </div>
                            <div className="col-md-4">
                                <h6 className="text-uppercase">Topik</h6>
                                <Link href="#" className="dropdown-item">Karier</Link>
                                <Link href="#" className="dropdown-item">Soft Skill</Link>
                                <Link href="#" className="dropdown-item">Teknologi</Link>
                            </div>
                            <div className="col-md-4">
                                <img
                                    src="https://placehold.co/150/062A78/white?text=Hai+dunia"
                                    alt="Artikel"
                                    className="img-fluid d-none d-md-block"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    );
}