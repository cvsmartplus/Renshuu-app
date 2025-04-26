export default function CheckBox({ id, name, className = '', label, checked, onChange, ...props }) {
    return (
        <div className="form-check">
            <input
                {...props}
                id={id}
                name={name}
                type="checkbox"
                className={`form-check-input custom-check-blue ${className}`}
                checked={checked}
                onChange={onChange}
            />
            {label && <label htmlFor={id} className="form-check-label">{label}</label>}
        </div>
    );
}
