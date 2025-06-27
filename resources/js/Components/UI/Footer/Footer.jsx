import ApplicationLogo from "../AplicationLogo";

export default function Footer() {
    return (
        <>
            <section className="footer pt-5 bg-brand-50">
                <div className="footer-mid">
                    <div className="container">
                        <hr/>
                        <div className="row">
                            <div className="col-xl-3 me-auto col-sm-8">
                                <div className="footer-logo mb-3">
                                    <ApplicationLogo className="img-fluid w-50" scrolled={true}/>
                                </div>
                                <div className="widget footer-widget mb-5 mb-lg-0">
                                    <p>Grand Cikarang City Blok G12 No.4 Bekasi-Indonesia</p>
                                </div>
                            </div>

                            <div className="col-xl-2 col-sm-4">
                                <div className="footer-widget mb-5 mb-xl-0">
                                    <h5 className="widget-title">Jelajahi</h5>
                                    <ul className="list-unstyled footer-links">
                                        <li><p>Tentang Kami</p></li>
                                        <li><p>Hubungi Kami</p></li>
                                        <li><p>Layanan</p></li>
                                        <li><p>Dukungan</p></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-2 col-sm-4">
                                <div className="footer-widget mb-5 mb-xl-0">
                                    <h5 className="widget-title">Kategori</h5>
                                    <ul className="list-unstyled footer-links">
                                        <li><p>Pekerjaan</p></li>
                                        <li><p>Artikel</p></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-2 col-sm-4">
                                <div className="footer-widget mb-5 mb-xl-0">
                                    <h5 className="widget-title">Link</h5>
                                    <ul className="list-unstyled footer-links">
                                        <li><p>Berita & Artikel</p></li>
                                        <li><p>Kebijakan Privasi</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-btm">
                    <div className="container" style={{ borderTop: "1px solid #aaa" }}>
                        <div className="row align-items-center">
                            <div className="col-12">
                                <p
                                    className="mb-0 text-center py-3"
                                    style={{ fontSize: "14px", color: "#666" }}
                                >
                                    Copyright &copy; {new Date().getFullYear()} Renshuu adalah merek dari <a href="https://cvsmartplus.com" target="_blank" className="text-brand-950">CV Smartplus Indonesia</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
