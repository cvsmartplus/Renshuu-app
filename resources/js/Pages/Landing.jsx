import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import Banner from '@/Components/Landing/Banner';
import Features from '@/Components/Landing/Features';
import Counter from '@/Components/Landing/Counter';
import StepFlow from '@/Components/Landing/StepFlow';
import CourseGrids from '@/Components/Landing/CourseGrid';
import Partner from '@/Components/Landing/Partners';
import ArticleGrid from '@/Components/Landing/ArticleGrid';

export default function Welcome() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Beranda</title>
                </Head>
                {/* <Banner />
                <Features />
                <Counter />
                <StepFlow />
                <CourseGrids />
                <Partner />
                <ArticleGrid /> */}
            </Layout>
        </>
    );
}
