import React from 'react';
import homeBackground from "../assets/bg.jpg";

const Home = () => {

    // Header Background Inline Style 
    const headerBackgroundStyle = {
        backgroundImage: `url(${homeBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

    };
    return (
        <div style={headerBackgroundStyle} className='min-h-[60vh] mt-12 sm:min-h-[90vh] flex items-center justify-center shadow-xl object-contain'>

            {/* Header Content  */}
            <div className='p-4 md:p-16 sm:w-[80%] space-y-4 md:space-y-4 lg:space-y-6'>
                {/* Heading  */}
                <p className='text-xl font-semibold text-black animate-slideLeft'>Welcome To</p>

                {/* Logo Title  */}
                <div className='animate-bounceUpDown'>
                    <h1 className='text-4xl sm:text-6xl font-extrabold text-white tracking-wider'>Survey Traverse</h1>
                </div>
            </div>

        </div>
    );
};

export default Home;