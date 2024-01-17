import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createSurveySchema } from '../common/constant/validation';
import SelectField from '../common/Fields/SelectField';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import InputField from '../common/Fields/InputField';

const CountriesData = [
    { value: 'afghanistan', label: 'Afghanistan' },
    { value: 'bahrain', label: 'Bahrain' },
    { value: 'bangladesh', label: 'Bangladesh' },
    { value: 'bhutan', label: 'Bhutan' },
    { value: 'brunei', label: 'Brunei' },
    { value: 'cambodia', label: 'Cambodia' },
    { value: 'china', label: 'China' },
    { value: 'cyprus', label: 'Cyprus' },
    { value: 'georgia', label: 'Georgia' },
    { value: 'india', label: 'India' },
    { value: 'indonesia', label: 'Indonesia' },
    { value: 'iran', label: 'Iran' },
    { value: 'iraq', label: 'Iraq' },
    { value: 'israel', label: 'Israel' },
    { value: 'japan', label: 'Japan' },
    { value: 'jordan', label: 'Jordan' },
    { value: 'kazakhstan', label: 'Kazakhstan' },
    { value: 'kuwait', label: 'Kuwait' },
    { value: 'kyrgyzstan', label: 'Kyrgyzstan' },
    { value: 'laos', label: 'Laos' },
    { value: 'lebanon', label: 'Lebanon' },
    { value: 'malaysia', label: 'Malaysia' },
    { value: 'maldives', label: 'Maldives' },
    { value: 'mongolia', label: 'Mongolia' },
    { value: 'myanmar', label: 'Myanmar (Burma)' },
    { value: 'nepal', label: 'Nepal' },
    { value: 'north_korea', label: 'North Korea' },
    { value: 'oman', label: 'Oman' },
    { value: 'pakistan', label: 'Pakistan' },
    { value: 'palestine', label: 'Palestine' },
    { value: 'philippines', label: 'Philippines' },
    { value: 'qatar', label: 'Qatar' },
    { value: 'saudi_arabia', label: 'Saudi Arabia' },
    { value: 'singapore', label: 'Singapore' },
    { value: 'south_korea', label: 'South Korea' },
    { value: 'sri_lanka', label: 'Sri Lanka' },
    { value: 'syria', label: 'Syria' },
    { value: 'taiwan', label: 'Taiwan' },
    { value: 'tajikistan', label: 'Tajikistan' },
    { value: 'thailand', label: 'Thailand' },
    { value: 'timor-leste', label: 'Timor-Leste' },
    { value: 'turkey', label: 'Turkey' },
    { value: 'turkmenistan', label: 'Turkmenistan' },
    { value: 'united_arab_emirates', label: 'United Arab Emirates' },
    { value: 'uzbekistan', label: 'Uzbekistan' },
    { value: 'vietnam', label: 'Vietnam' },
    { value: 'yemen', label: 'Yemen' },
];

const Step2 = ({ setStep, control, errors }) => {

    return (
        <div className=' min-h-[80vh] mt-20 grid place-items-center'>
            <div className='w-[100%] md:w-[75%] h-[100%] mt-6 p-2'>

                <div className=' bg-backteritiary_color p-2 rounded-lg  font-bold text-text_color3  text-xl'>
                    Step 2: Address Details
                </div>
                <div className='p-6'>
                    <div className=' grid grid-cols-2 gap-4 py-2'>
                        <SelectField
                            name="country"
                            options={CountriesData}
                            control={control}
                            errors={errors}
                            label="Country"
                        />
                        <InputField
                            name="state"
                            type="text"
                            control={control}
                            errors={errors}
                            label="State"
                        />
                    </div>
                    <div className=' grid grid-cols-2 gap-4 py-2'>
                        <InputField
                            name="city"
                            type="text"
                            control={control}
                            errors={errors}
                            label="City"
                        />
                        <InputField
                            name="zipCode"
                            type="text"
                            control={control}
                            errors={errors}
                            label="ZipCode"
                        />
                    </div>
                    <div className=' grid grid-cols-2 gap-4 py-2'>
                        <InputField
                            name="address1"
                            type="text"
                            control={control}
                            errors={errors}
                            label="Address 1"
                        />
                        <InputField
                            name="address2"
                            type="text"
                            control={control}
                            errors={errors}
                            label="Address 2"
                        />
                    </div>
                </div>



                <div className='w-[100%] flex items-center my-20'>
                    <span className=' text-3xl bg-backPrimary_color rounded-full text-text_color1 grid place-items-center p-1 hover:opacity-85 
                    cursor-pointer' onClick={() => setStep(prev => prev - 1)}><MdOutlineNavigateBefore /></span>

                    <span className='ml-auto text-3xl bg-backPrimary_color rounded-full text-text_color1 grid place-items-center p-1 hover:opacity-85 cursor-pointer' onClick={() => setStep(prev => prev + 1)}><MdOutlineNavigateNext /></span>
                </div>

            </div>
        </div>
    );
};

export default Step2;