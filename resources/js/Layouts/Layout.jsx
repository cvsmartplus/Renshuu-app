import Footer from "@/Components/UI/Footer/Footer";
import NavBar from "@/Components/UI/Navbar/User/Navbar";

export default function Layout({ children }) {
    return (
        <>
            <NavBar />
                <main>
                    {children}
                </main>
            <Footer />
        </>
    )
}
