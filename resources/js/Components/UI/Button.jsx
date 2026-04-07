// Tombol dengan warna primary
export default function Button({ children, className = '', ...props }) {
    return (
        <button
            className={`bg-primary hover:opacity-90 text-white px-6 py-2 rounded-md transition duration-300 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}