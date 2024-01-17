import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createSurveySchema } from '../components/common/constant/validation';
import Step1 from '../components/SurveyForm/Step1';
import Step2 from '../components/SurveyForm/Step2';
import Step3 from '../components/SurveyForm/Step3';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import axiosInstance from '../config/AxiosInstance';


export const SurveyForm = () => {
    const [step, setStep] = useState(1);

    const {
        handleSubmit,
        reset,
        formState: { errors },
        control,
    } = useForm({
        resolver: yupResolver(createSurveySchema)
    });

    const onSubmit = async (data) => {
        try {
            const response = await axiosInstance({
                method: "POST",
                url: "/createsurvey",
                data: data
            });
            const { message } = response.data;
            if (message) {
                toast.success(message);
                reset();
                setStep(1);

            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    step == 1 ? (<Step1 step={step} setStep={setStep} control={control} errors={errors} />
                    ) : step == 2 ? (<Step2 step={step} setStep={setStep} control={control} errors={errors} />
                    ) : step == 3 ? (<Step3 step={step} setStep={setStep} control={control} errors={errors} reset={reset} />
                    ) : <></>
                }
            </form>
        </div>
    );
};
