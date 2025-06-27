import { Head } from "@inertiajs/react";
import Layout from '@/Layouts/Layout';

export default function Job() {
    return (
        <Layout>
            <Head title="Pekerjaan" />
            <section className='text-center text-light' style={{ background: "linear-gradient(to right, #1c488c, #082f49, #082f49)", padding: "15vh 0" }}>
                ini adalah lokeree
            </section> 
        </Layout>
    );
}
