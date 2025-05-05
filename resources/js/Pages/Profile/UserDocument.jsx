import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";

export default function UserDocument() {
    return (
        <DashboardLayout>
            <Head title="Document" />
            <h1>Document</h1>
        </DashboardLayout>
    );
}