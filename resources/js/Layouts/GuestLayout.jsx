import GridBackground from "./GridBackground";

export default function GuestLayout({ status, children }) {
  return (
    <GridBackground>
      <div className="card shadow-lg p-3" style={{ width: "500px", maxWidth: "90%" }}>
        <div className="card-body">
          {status && <div className="alert alert-success text-center">{status}</div>}
          {children}
        </div>
      </div>
    </GridBackground>
  );
}
