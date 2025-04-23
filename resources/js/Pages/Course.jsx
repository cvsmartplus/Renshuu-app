import CourseGrid from "@/Components/UI/GridCard/CourseGrid";
import TitlePage from "@/Components/UI/TitlePage";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";


export default function Course({courses}) {
        const PageTitle = "Kursus";

    return(
        <>
            <Layout>
            <Head title={PageTitle} />
                <TitlePage title={PageTitle}/>
                <CourseGrid courses={courses}/>
            </Layout>
        </>
    );
}
