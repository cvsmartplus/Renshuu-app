import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import Banner from '@/Components/User/Landing/Banner';
import Features from '@/Components/User/Landing/Features';
import Counter from '@/Components/User/Landing/Counter';
import StepFlow from '@/Components/User/Landing/StepFlow';
import Partner from '@/Components/User/Landing/Partners';
import ArticleGrid from '@/Components/User/Landing/ArticleGrid';
import UserTertimonial from '@/Components/User/Landing/UserTestimonial';
import FeaturedJob from '@/Components/User/Landing/FeaturedJob';

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
                <FeaturedJob />
                <Partner />
                <ArticleGrid />
            </Layout>
        </>
    );
}
