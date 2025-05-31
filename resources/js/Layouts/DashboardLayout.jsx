import { useState, useEffect } from "react";
import NavBar from "@/Components/UI/Navbar/User/Navbar";
import SideBar from "@/Components/UI/SideBar/SideBar";
import Footer from "@/Components/UI/Footer/Footer";
import { FaBars, FaTimes } from "react-icons/fa";

export default function DashboardLayout({ children, menuItems }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            setIsSidebarOpen(!mobile);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh", overflow: "hidden" }}>
            <div
                style={{
                    position: "fixed",
                    width: "100%",
                    top: 0,
                    zIndex: 99,
                    backgroundColor: "#fff",
                    borderBottom: "1px solid #ddd",
                }}
            >
                <NavBar />
            </div>

            <SideBar isOpen={isSidebarOpen} isMobile={isMobile} menuItems={menuItems}/>

            <button
                onClick={toggleSidebar}
                style={{
                    position: "fixed",
                    top: "65px",
                    left: isSidebarOpen && !isMobile ? "260px" : "10px",
                    zIndex: 98,
                    color: "#fff",
                    backgroundColor: "#003366",
                    border: "none",
                    borderRadius: "4px",
                    padding: "8px",
                    transition: "left 0.3s",
                }}
            >
                {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </button>

            {isMobile && isSidebarOpen && (
                <div
                    onClick={toggleSidebar}
                    style={{
                        position: "fixed",
                        top: "56px",
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        zIndex: 96,
                    }}
                />
            )}

            <div
                style={{
                    marginLeft: isSidebarOpen && !isMobile ? "250px" : "0px",
                    paddingTop: "56px",
                    height: "100vh",
                    overflowY: "auto",
                    transition: "margin-left 0.3s",
                }}
            >
                {children}
                <Footer />
            </div>
        </div>
    );
}
