export default function ApplicationLogo( {scrolled , ...props} ) {
    const image = scrolled ? '../images/renshuu-logo.png' : '../images/renshuu-logo-white.png';
    
    return (
        <>
            <img src={ image }
            {...props}
            />
        </>
    );
}
