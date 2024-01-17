import React from 'react';
import { Controller } from 'react-hook-form';

const InputField = (props) => {
    const {
        name,
        control,
        type = "text",
        errors = {},
        label,
    } = props;

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value } }) => (
                <div className=' flex flex-col'>
                    <label htmlFor={name} className="block mb-1 text-lg text-text_color3">{label}</label>
                    <input
                        type={type}
                        value={value}
                        onChange={(e) => {
                            onChange(e.target.value);
                        }}
                        id={name}
                        placeholder={name}
                        className="border border-gray-300 text-text_color1 text-sm rounded-lg block w-full p-2.5 bg-backPrimary_color placeholder-gray-400"
                    />
                    {errors[name] && (
                        <p className=" text-red-400">{errors[name]?.message}</p>
                    )}
                </div>
            )}


        />
    );
};

export default InputField;