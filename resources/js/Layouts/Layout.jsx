import Footer from "@/Components/UI/Footer/Footer";
import NavBar from "@/Components/UI/Navbar/Navbar";

export default function Layout({ children }) {
    return (
        <>
            <NavBar />
                {children}
            <Footer />
        </>
    )
}
