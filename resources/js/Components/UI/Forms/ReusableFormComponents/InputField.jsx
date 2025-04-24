import React from "react";

export default function InputField({
    id,
    label,
    type = "text",
    value,
    onChange,
    onFocus,
    error,
    placeholder,
    autoComplete,
    required = false,
    ...props
}) {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
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
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
}
