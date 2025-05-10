import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";
import { dashboardMenuItems } from "@/Utils/menuItems";

export default function Dashboard() {
    return (
        <>
            <DashboardLayout menuItems={dashboardMenuItems}>
                <Head title="Dashboard" />
                <div className="container py-5">
                    <h1 >Dashboard user disini</h1>
                </div>
            </DashboardLayout>
        </>
    );
}
