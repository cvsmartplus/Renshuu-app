import { Head, usePage } from "@inertiajs/react";
import ProfileBanner from "@/Components/Profile/ProfileSection/ProfileBanner";
import ProfileModal from "@/Components/UI/Modal/ProfileModal";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { FiEdit } from "react-icons/fi";

import AboutSection from "@/Components/Profile/ProfileSection/AboutSection";
import EducationSection from "@/Components/Profile/ProfileSection/EducationSection";
import ExperienceSection from "@/Components/Profile/ProfileSection/ExperienceSection";
import SideSection from "@/Components/Profile/ProfileSection/SideSection";

export default function Profile() {
    const { auth, profile, educations, experiences, skills } = usePage().props;
    const avatarimg = profile?.avatar ?? '/images/placeholder/default-profile.jpg';
    const bannerimg = profile?.banner ?? './images/placeholder/banner.png';

    return (
        <DashboardLayout>
            <Head title="Profile" />

            <div className="container mt-2">
                <ProfileBanner profileImage={avatarimg} bannerimg={bannerimg} />
                <div className="mt-5 pt-2 px-3">
                    <div className="row">
                        <div className="col-md-11">
                            <h1>{auth.user.name}</h1>
                            <p>{profile?.tagline ?? "-"}</p>
                        </div>
                        <div className="col-md-1 d-flex justify-content-end align-items-start">
                            <button
                                className="btn btn-light p-2"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                type="button"
                            >
                                <FiEdit size={20} />
                            </button>
                        </div>
                        <ProfileModal />
                    </div>
                </div>
            </div>

            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-8">
                        <AboutSection bio={profile?.bio ?? "-"} />
                        <EducationSection educations={educations} />
                        <ExperienceSection experiences={experiences} />
                    </div>
                    <div className="col-md-4">
                        <SideSection profile={profile} auth={auth} skills={skills} />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
