import { Head } from "@inertiajs/react"
import { profileMenuItems } from "@/Utils/menuItems";
import DashboardLayout from "@/Layouts/DashboardLayout"

export default function UserTransaction() {
    return(
        <DashboardLayout menuItems={profileMenuItems}>
            <Head title="Riwayat Transaksi" />
            <h1 className="text-center">Riwayat Transaksi</h1>
        </DashboardLayout>
    );
}