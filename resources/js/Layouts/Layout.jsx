import Footer from "@/Components/UI/Footer/Footer";
import NavBar from "@/Components/UI/Navbar/User/Navbar";

export default function Layout({ withNavigation, children }) {
    return (
        <>
            <NavBar withNavigation={withNavigation}/>
                <main>
                    {children}
                </main>
            <Footer />
        </>
    )
}
