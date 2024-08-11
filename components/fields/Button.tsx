import React from 'react';

interface InputProps {
    type: "submit" | "reset" | "button" | undefined;
    label: string;
}

const Button: React.FC<InputProps> = ({ type, label }) => (
    <>
        <button type={type} className="btn button">{label}</button>
    </>
);

export default Button;