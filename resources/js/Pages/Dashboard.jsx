import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <>
            <Layout>
                <Head title="Dashboard" />
                <div className="container py-5">
                    <h1 >Dashboard user disini</h1>
                </div>
            </Layout>
        </>
    );
}
