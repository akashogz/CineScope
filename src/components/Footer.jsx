function Footer(){
    return(
        <div className="flex items-center text-white flex-col w-full gap-[40px] pb-[30px] lg:text-[20px] mt-[40px] overscroll-none overflow-y-none">
            <div className="flex gap-[16%] lg:gap-[290px] w-full px-[10%] items-center justify-center">
                <p className="hover:underline hover:underline-offset-5 cursor-pointer">About</p>
                <p className="hover:underline hover:underline-offset-5 cursor-pointer">Privacy Policy</p>
                <p className="hover:underline hover:underline-offset-5 cursor-pointer">Contact</p>
            </div>
            <div className="flex justify-center flex-col items-center gap-[10px]">
                <p>@2025 CineScope. All Rights Reserved.</p>
                <p className="text-[16px]">Made by Akash Gautam</p>
                <div className="flex gap-[10px] justify-center items-center">
                    <a className="flex justify-center items-center gap-[10px]" href="https://www.linkedin.com/in/akashog/" target="_blank" rel="noopener noreferrer"><img src="/linkedin.png" className="w-[24px] h-[24px] object-cover"/>|</a>
                    <a className="flex justify-center items-center gap-[10px]" href="https://www.github.com/akashogz/" target="_blank" rel="noopener noreferrer"><img src="/github.png" className="w-[24px] h-[24px] object-cover"/>|</a>
                    <a className="text-[14px]" href="mailto:akashogz@gmail.com" target="_blank" rel="noopener noreferrer">akashogz@gmail.com</a>
                </div>
            </div>
        </div>
    )
}

export default Footer