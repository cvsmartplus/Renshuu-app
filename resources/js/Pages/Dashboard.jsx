import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";
import { dashboardMenuItems } from "@/Utils/menuItems";
import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "@/lib/axios";

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get('/user')
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.error("Error fetching user:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <>
            <DashboardLayout menuItems={dashboardMenuItems}>
                <Head title="Dashboard" />
                <div className="container py-5">
                    <h1>Dashboard User</h1>
                    {loading && <p>Loading...</p>}
                    {user && (
                        <div>
                            <p><strong>Nama:</strong> {user.name}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                        </div>
                    )}
                </div>
            </DashboardLayout>
        </>
    );
}
