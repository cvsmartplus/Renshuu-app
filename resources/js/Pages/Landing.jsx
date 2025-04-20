import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
// import Banner from '@/Components/Landing/Banner';

export default function Welcome() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Beranda</title>
                </Head>
                <div className="py-12 bg-bluesky"  >
                    ini adalah landing page aplikasi
                </div>
                {/* <Banner /> */}
            </Layout>
        </>
    );
}
