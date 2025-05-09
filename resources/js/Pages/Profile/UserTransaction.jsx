import DashboardLayout from "@/Layouts/DashboardLayout"
import { Head } from "@inertiajs/react"

export default function UserTransaction() {
    return(
        <DashboardLayout>
            <Head title="Riwayat Transaksi" />
            <h1 className="text-center">Riwayat Transaksi</h1>
        </DashboardLayout>
    );
}