import React, { useEffect } from 'react';
import InputField from '../common/Fields/inputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createSurveySchema } from '../common/constant/validation';
import SelectField from '../common/Fields/SelectField';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import toast from 'react-hot-toast';

const GenderData = [
    {
        label: "Male",
        value: "male"
    },
    {
        label: "Female",
        value: "female"
    },
];
const Step1 = ({ step, setStep, control, errors }) => {
    return (
        <div className=' min-h-[80vh] mt-20 grid place-items-center'>
            <div className='w-[100%] md:w-[75%] h-[100%] mt-6 p-2'>

                <div className=' bg-backteritiary_color p-2 rounded-lg  font-bold text-text_color3  text-xl'>
                    Step 1: Basic Details
                </div>
                <div className='p-6'>
                    <div className=' grid grid-cols-2 gap-4 py-2'>
                        <InputField
                            name="email"
                            type="text"
                            control={control}
                            errors={errors}
                            label="Email"
                        />
                        <InputField
                            name="firstName"
                            type="text"
                            control={control}
                            errors={errors}
                            label="First Name"
                        />
                    </div>
                    <div className=' grid grid-cols-2 gap-4 py-2'>
                        <InputField
                            name="lastName"
                            type="text"
                            control={control}
                            errors={errors}
                            label="Last Name"
                        />
                        <SelectField
                            name="gender"
                            options={GenderData}
                            control={control}
                            errors={errors}
                            label="Gender"
                        />

                    </div>
                    <div className=' grid grid-cols-2 gap-4 py-2'>
                        <InputField
                            name="mobile"
                            type="text"
                            control={control}
                            errors={errors}
                            label="Monbile"
                        />

                        <InputField
                            name="nationality"
                            type="text"
                            control={control}
                            errors={errors}
                            label="Nationality"
                        />
                    </div>
                </div>



                <div className='w-[100%] flex items-center  my-20'>
                    {
                        step !== 1 && <span className=' text-3xl bg-backPrimary_color rounded-full text-text_color1 grid place-items-center p-1 hover:opacity-85 
                    cursor-pointer' onClick={() => setStep(prev => prev - 1)}><MdOutlineNavigateBefore /></span>
                    }

                    <span className='ml-auto text-3xl bg-backPrimary_color rounded-full text-text_color1 grid place-items-center p-1 hover:opacity-85 cursor-pointer' onClick={() => setStep(prev => prev + 1)}><MdOutlineNavigateNext /></span>
                </div>

            </div>
        </div>
    );
};

export default Step1;