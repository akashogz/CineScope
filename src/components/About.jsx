function About(){
    return(
        <div className="flex flex-col gap-[20px] items-center justify-center px-[5%]">
            <div className="w-full flex flex-col items-center justify-center gap-[20px] bg-gradient-to-r from-[rgba(63,63,63,0.24)] to-[#45454538] bg-opacity-0 backdrop-blur-[1px] rounded-[20px] p-4 drop-shadow-2xl">
                <div className="font-bold text-[34px]  backdrop-blur-[20px] rounded-[12px] w-full text-center bg-gradient-to-r from-[rgba(74,4,78,0.09)] to-[rgba(74,4,78,0.26)]">
                    <p>About This Project</p>
                </div>
                <p className="font-medium text-[18px] text-center">Cinescope is a responsive web application built using React, Tailwind CSS, and JavaScript, leveraging Axios to fetch data from the TMDB API and React Router for seamless client-side navigation. The project was designed in Figma to ensure a clean, user-friendly interface and demonstrates the ability to translate designs into interactive, high-performance web experiences. Cinescope highlights both technical proficiency in modern front-end development and a strong understanding of user-centric design principles.</p>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-[20px] bg-gradient-to-r from-[rgba(63,63,63,0.24)] to-[#45454538] bg-opacity-0 backdrop-blur-[1px] rounded-[20px] p-4 drop-shadow-2xl">
                <div className="font-bold text-[34px]  backdrop-blur-[20px] rounded-[12px] w-full text-center bg-gradient-to-r from-[rgba(74,4,78,0.09)] to-[rgba(74,4,78,0.26)]">
                    <p>Why I Built This Project</p>
                </div>
                <p className="font-medium text-[18px] text-center">I wanted to challenge myself and get better at working with React, JavaScript, and APIs, while also improving my design skills. Building this project felt like the perfect way to put all of that into practice. It was a fun way to experiment, learn by doing, and see how different pieces—from fetching data to creating a smooth user experience—come together in a real project.</p>
            </div>
        </div>
    )
}

export default About