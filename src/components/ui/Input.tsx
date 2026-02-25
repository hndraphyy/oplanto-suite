import React, { forwardRef, InputHTMLAttributes } from "react";
import { InputProps } from "@/types";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type, error, placeholder, className, ...props }, ref) => {
    return (
      <div className="">
        {label && <label>{label}</label>}

        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={`px-3 py-2 border rounded-lg outline-none ${error ? "border-red-500" : "border-gray-300"}  ${className}`}
          {...props}
        />

        {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
      </div>
    );
  },
);

export default Input;
