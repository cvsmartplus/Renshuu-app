export default function InputField({
    id,
    label,
    type = "text",
    value,
    onChange,
    onFocus,
    error,
    placeholder,
    autoComplete = "off",
    required = false,
    options = [],
    as = "input", 
    ...props
}) {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>

            {as === "select" ? (
                <select
                    id={id}
                    name={id}
                    value={value}
                    onChange={onChange}
                    onFocus={onFocus}
                    className={`form-select ${error ? "is-invalid" : ""}`}
                    required={required}
                    {...props}
                >
                    <option value="" className="text-muted">Pilih {label}</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            ) : as === "textarea" ? (
                <textarea
                    id={id}
                    name={id}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`form-control ${error ? "is-invalid" : ""}`}
                    onFocus={onFocus}
                    required={required}
                    {...props}
                />
            ) : (
                <input
                    id={id}
                    name={id}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`form-control ${error ? "is-invalid" : ""}`}
                    onFocus={onFocus}
                    autoComplete={autoComplete}
                    required={required}
                    {...props}
                />
            )}

            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
}