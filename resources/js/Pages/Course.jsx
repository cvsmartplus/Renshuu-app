import CourseGrid from "@/Components/UI/GridCard/CourseGrid";
import TitlePage from "@/Components/UI/TitlePage";
import Layout from "@/Layouts/Layout";
import { Head, usePage } from "@inertiajs/react";


export default function Course() {
    const { courses } = usePage().props;
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
