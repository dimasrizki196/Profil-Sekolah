export default function ApplicationLogo(props) {
    return (
        <img
            src="/images/logo.png"
            alt="Logo Sekolah"
            {...props}
            className={`object-contain ${props.className || ""}`}
        />
    );
}
