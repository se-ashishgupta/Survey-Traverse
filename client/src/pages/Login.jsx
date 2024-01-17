import React from 'react';
import InputField from '../components/common/Fields/inputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../components/common/constant/validation';
import toast from 'react-hot-toast';
import { useUserContext } from '../context/userContext';
import axiosInstance from '../config/AxiosInstance';

const Login = () => {
    const { isAuthenticated, setIsAuthenticated, token, setToken, user, setUser } = useUserContext();

    const {
        handleSubmit,
        reset,
        formState: { errors },
        control,
    } = useForm({
        resolver: yupResolver(loginSchema)
    });

    const onSubmit = async (data) => {
        try {
            const response = await axiosInstance({
                method: "POST",
                url: "/login",
                data: data

            });

            const { token, user, message } = response.data;
            if (token) {
                localStorage.setItem("token", token);
                setIsAuthenticated(true);
                setToken(token);
                setUser(user);
                reset();
                toast.success(message);
            }
        } catch (error) {
            localStorage.clear();
            setIsAuthenticated(false);
            setToken(null);
            toast.error(error.response.data.message);
        }

    };



    return (
        <div className=' min-h-[80vh] mt-20 grid place-items-center'>
            <div className='w-[100%] md:w-[75%] h-[100%] mt-6 p-2'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=' bg-backteritiary_color p-2 rounded-lg text-center font-bold text-text_color3  text-xl'>
                        Login Now
                    </div>
                    <div className='p-6 grid place-items-center'>
                        <div className='flex  flex-col w-[100%] md:w-[50%] gap-4 py-2'>
                            <InputField
                                name="email"
                                type="text"
                                control={control}
                                errors={errors}
                                label="Email"
                            />
                            <InputField
                                name="password"
                                type="password"
                                control={control}
                                errors={errors}
                                label="Password"
                            />
                        </div>

                        <div className='my-10 w-[100%] grid place-items-center'>
                            <button
                                type='submit'
                                className=' bg-backPrimary_color text-text_color1 text-xl font-bold px-4 py-1 rounded-lg hover:bg-transparent border-2 border-backPrimary_color hover:text-text_color3 transition-all duration-300'
                            >Login</button>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default Login;