import React, { useEffect } from 'react';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import toast from 'react-hot-toast';
import InputField from '../common/Fields/InputField';

const Step3 = ({ step, setStep, errors, control }) => {

    return (
        <div className=' min-h-[80vh] mt-20 grid place-items-center'>
            <div className='w-[100%] md:w-[75%] h-[100%] mt-6 p-2'>

                <div className=' bg-backteritiary_color p-2 rounded-lg  font-bold text-text_color3  text-xl'>
                    Step 3: Message
                </div>
                <div className='p-6'>
                    <div className=' grid grid-cols-2 gap-4 py-2'>
                        <InputField
                            name="message"
                            type="text"
                            control={control}
                            errors={errors}
                            label="Message"
                        />

                    </div>

                    <div className='my-10 w-[100%] grid place-items-center'>
                        <button
                            type='submit'
                            className=' bg-backPrimary_color text-text_color1 text-xl font-bold px-4 py-1 rounded-lg hover:bg-transparent border-2 border-backPrimary_color hover:text-text_color3 transition-all duration-300'
                        >Submit</button>
                    </div>
                </div>

                <div className='w-[100%] flex items-center  my-20'>
                    {
                        step !== 1 && <span className=' text-3xl bg-backPrimary_color rounded-full text-text_color1 grid place-items-center p-1 hover:opacity-85 
                    cursor-pointer' onClick={() => setStep(prev => prev - 1)}><MdOutlineNavigateBefore /></span>
                    }

                    {
                        step !== 3 && <span className='ml-auto text-3xl bg-backPrimary_color rounded-full text-text_color1 grid place-items-center p-1 hover:opacity-85 cursor-pointer' onClick={() => setStep(prev => prev + 1)}><MdOutlineNavigateNext /></span>
                    }
                </div>

            </div>
        </div>
    );
};

export default Step3;