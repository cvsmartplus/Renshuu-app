export default function ProfileBanner({ profileImage, bannerimg}) {
    return (
        <div className="position-relative">
            <div
                className="rounded"
                style={{
                    paddingTop: '25%',
                    backgroundImage: `url(${bannerimg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            ></div>

            <div className="position-absolute" style={{ bottom: '-50px', left: '1.5rem' }}>
                <img
                    src={profileImage}
                    alt="Profile"
                    className="rounded-circle border avatar-profile"
                />
            </div>
        </div>
    );
}
