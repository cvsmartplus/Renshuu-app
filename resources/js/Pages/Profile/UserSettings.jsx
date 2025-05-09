import { Head, usePage } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import ProfileForm from "@/Components/Profile/SettingSection/ProfileForm";
import ChangePasswordForm from "@/Components/UI/Forms/ChangePasswordForm";
import UserDataForm from "@/Components/UI/Forms/UserDataForm";
import VerificationStatus from "@/Components/Profile/SettingSection/VerificationStatus";
import DeleteUserForm from "@/Components/UI/Forms/DeleteUserForm";
import SocialLinksForm from "@/Components/UI/Forms/SocialLinksForm";

export default function UserSettings() {
  const { auth, profile } = usePage().props;

  return (
    <DashboardLayout>
      <Head title="Pengaturan Akun" />

      <div className="container py-4">
        <h2 className="mb-4 fw-semibold">Pengaturan Akun</h2>

        <div className="row g-4">
          <div className="col-12 col-lg-6">
            <ProfileForm auth={auth} />
            <div className="mt-4">
              <UserDataForm auth={auth} profile={profile} />
            </div>
          </div>

          <div className="col-12 col-lg-6">
              <SocialLinksForm profile={profile} />
              <div className="mb-3">
                <ChangePasswordForm />
              </div>
            </div>
            {!auth.user.email_verified_at && (
              <VerificationStatus auth={auth} />
              )}
            <DeleteUserForm />
        </div>
      </div>
    </DashboardLayout>
  );
}
