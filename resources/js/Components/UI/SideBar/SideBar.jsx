import { Link } from "@inertiajs/react";

export default function SideBar({ isOpen, isMobile, menuItems = [] }) {
    return (
        <aside
            className="bg-light border-end"
            style={{
                width: "250px",
                height: "100vh",
                position: "fixed",
                top: "56px",
                left: 0,
                transform: isOpen ? "translateX(0)" : "translateX(-100%)",
                transition: "transform 0.3s ease-in-out",
                overflowY: "auto",
                zIndex: 97,
                boxShadow: isMobile && isOpen ? "2px 0 5px rgba(0,0,0,0.2)" : "none",
                backgroundColor: "#fff",
            }}
        >
            <nav className="pt-4">
                <ul className="nav flex-column px-3">
                    {menuItems.map((item, index) => {
                        const isActive = window.location.pathname === new URL(item.route, window.location.origin).pathname;
                        return (
                            <li key={index} className="nav-custom-item mb-3">
                                <Link
                                    href={item.route}
                                    className={`nav-bluelink d-flex align-items-center ${isActive ? "active" : ""}`}
                                >
                                    <div className="me-3" style={{ fontSize: '1.25rem' }}>
                                        {item.icon}
                                    </div>
                                    <span className="sidebar-text">{item.name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
}