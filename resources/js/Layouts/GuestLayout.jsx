import GridBackground from "./GridBackground";

export default function GuestLayout({ status, children }) {
  return (
    <GridBackground>
      <div
        className="card shadow-lg rounded-4 p-4 w-100"
        style={{
          maxWidth: "500px",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: '2%',
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          willChange: "transform, box-shadow",
        }}
      >
        <div className="card-body">
          {status && <div className="alert alert-success text-center">{status}</div>}
          {children}
        </div>
      </div>
    </GridBackground>
  );
}
