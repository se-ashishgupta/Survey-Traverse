import React from "react";
import { Controller } from "react-hook-form";

const SelectField = (props) => {
    const {
        errors,
        name = "",
        control,
        options,
        initialValue,
        label,
    } = props;
    // const defaultValue = options?.find((option) => option.value === initialValue);
    return (
        <div className="">
            <Controller
                id={name}
                name={name}
                control={control}
                // defaultValue={defaultValue}
                render={({ field: { onChange, value } }) => (
                    <>
                        <label htmlFor={name} className="block mb-1 text-lg text-text_color3">{label}</label>
                        <select
                            name={name}
                            id={name}
                            onChange={(e) => {
                                onChange(e.target.value);
                            }}
                            value={value}
                            className="bg-backPrimary_color text-text_color1 border border-gray-300 text-sm rounded-lg block w-full p-2.5 ">
                            <option value="" >{`Choose a ${label}`}</option>
                            {
                                options?.map((item, index) => (
                                    <option key={index} value={item.value}>{item.label}</option>
                                ))
                            }
                        </select>
                        {errors && errors[name] && (
                            <p className="text-red-400">{errors[name].message}</p>
                        )}
                    </>
                )}
            />
        </div>
    );
};
export default SelectField;
