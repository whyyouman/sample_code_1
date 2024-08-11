import React from 'react';

interface InputProps {
    label: string;
    placeholder: string;
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error: string;
    touched: boolean;
}

const Input: React.FC<InputProps> = ({ label, placeholder, type, name, value, onChange, error, touched }) => (
    <>
        <div className="form-group mb-3">
            <label className="form-label">{label}</label>
            <input type={type} placeholder={placeholder} name={name} className={`form-control ${error && touched ? 'is-invalid' : ''}`} value={value} onChange={onChange} />
            {error && touched && <div className="text-danger error-message">{error}</div>}
        </div>
    </>
);

export default Input;