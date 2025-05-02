import { Head, usePage } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import ProfileBanner from "@/Components/Profile/ProfileSection/ProfileBanner";
import AboutSection from "@/Components/Profile/ProfileSection/AboutSection";
import EducationSection from "@/Components/Profile/ProfileSection/EducationSection";
import ExperienceSection from "@/Components/Profile/ProfileSection/ExperienceSection";
import SideSection from "@/Components/Profile/ProfileSection/SideSection";

export default function Profile() {
  const { auth, profile, educations, experiences, skills, avatarCrop, avatarOriginalSize } = usePage().props;

  const avatarImg = profile?.avatar ? `/storage/${profile.avatar}` : "/images/placeholder/default-profile.jpg";
  const bannerImg = profile?.banner ? `/storage/${profile.banner}` : "/images/placeholder/banner.png";

  return (
    <DashboardLayout>
      <Head title="Profile" />
      <div className="container mt-2">
        <ProfileBanner
          profileImage={avatarImg}
          bannerimg={bannerImg}
          avatarCrop={avatarCrop}
          avatarOriginalSize={avatarOriginalSize}
          hasAvatar={!!profile?.avatar}
        />

        <div className="px-3 mt-5">
          <h1>{auth.user.name}</h1>
          <p>{profile?.tagline ?? "-"}</p>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-7">
            <AboutSection bio={profile?.bio ?? "-"} />
            <EducationSection educations={educations} />
            <ExperienceSection experiences={experiences} />
          </div>
          <div className="col-md-5">
            <SideSection profile={profile} auth={auth} skills={skills} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
