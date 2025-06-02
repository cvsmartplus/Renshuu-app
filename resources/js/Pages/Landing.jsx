import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import Banner from '@/Components/Landing/Banner';
import Features from '@/Components/Landing/Features';
import Counter from '@/Components/Landing/Counter';
import StepFlow from '@/Components/Landing/StepFlow';
import Partner from '@/Components/Landing/Partners';
import ArticleGrid from '@/Components/Landing/ArticleGrid';
import UserTertimonial from '@/Components/Landing/UserTestimonial';

export default function Welcome() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Renshuu | Raih Peluang Karir Sesuai Minat Anda</title>
                </Head>
                <Banner />
                <Features />
                <Counter />
                <StepFlow />
                <UserTertimonial />
                {/* <Partner /> */}
                {/* <ArticleGrid /> */}
            </Layout>
        </>
    );
}
