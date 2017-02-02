import React from 'react';

export default function RenderField({input, label, type, meta: { touched, error }, multiRow}) {
  return (
    <div>
      <label>{label}</label>
      <div>
        {
          multiRow &&
            <textarea className="form-control" {...input} type={type} rows="5" /> ||
            <input className="form-control" {...input} type={type} />
        }
        {touched && error && <span className="text-danger">{error}</span>}
      </div>
    </div>
  );
}
