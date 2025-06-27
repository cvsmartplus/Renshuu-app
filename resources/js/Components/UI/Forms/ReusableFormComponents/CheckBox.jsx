export default function CheckBox({ 
        id, 
        name, 
        className = '', 
        label, 
        checked, 
        onChange, 
        error, 
        labelColor = 'text-muted',
        ...props 
    }) {
    return (
        <div className="form-check">
            <input
                {...props}
                id={id}
                name={name}
                type="checkbox"
                className={`form-check-input custom-check-blue ${error ? 'is-invalid' : ''} ${className}`}
                checked={checked}
                onChange={onChange}
            />
            {label && <label htmlFor={id} className={`form-check-label mx-2 ${labelColor}`}>{label}</label>}
            {error && <div className="invalid-feedback d-block">{error}</div>}
        </div>
    );
}