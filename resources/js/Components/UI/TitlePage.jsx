export default function TitlePage ({title}){
    return(
        <>
        <section className="bg-bluesky d-flex justify-content-center align-items-center" style={{ minHeight: "15vh" }}>
            <div className="container">
                <h1 className="text-jost fw-semibold text-center">{title}</h1>
            </div>
        </section>
        </>
    );
}
