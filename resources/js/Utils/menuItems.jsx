import { FaUser, FaFileAlt, FaCog, FaReceipt } from "react-icons/fa";

export const profileMenuItems = [
    { name: "Profil", route: route("profile.index"), icon: <FaUser /> },
    { name: "Dokumen", route: route("document.index"), icon: <FaFileAlt /> },
    { name: "Pengaturan Akun", route: route("profile.settings"), icon: <FaCog /> },
    { name: "Pengaturan Transaksi", route: route("transaction.index"), icon: <FaReceipt /> },
];


export const dashboardMenuItems = [
    { name: "Beranda", route: route("user.dashboard"), icon: <FaUser /> },
    { name: "Kursus", route: "#", icon: <FaFileAlt /> },
    { name: "Pekerjaan",route: "#", icon: <FaCog /> },
    { name: "Riwayat Pembayaran", route: "#", icon: <FaReceipt /> },
];