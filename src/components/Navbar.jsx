import { Link, useLocation } from "react-router-dom"

function Navbar(){
    const location = useLocation();

    return (
        <div className="w-full h-[80px] flex pl-[5%]  pr-[6%] lg:pr-[5%] text-white justify-between items-center">
            <div className="flex gap-[62px] items-center">
                <Link to={'/'}><span className="text-2xl sm:3xl md:4xl lg:5xl font-semibold cursor-pointer flex gap-[10px] items-center justify-center"><img src="logo.png" className="w-[40px] h-[40px] object-cover rounded-full"/>CineScope</span></Link>
                <div className="hidden md:flex gap-[62px]">
                    <Link to={'/'} className="hover:underline hover:underline-offset-5 cursor-pointer" >Home</Link>
                    <Link to={'/movies'} className="hover:underline hover:underline-offset-5 cursor-pointer">Movies</Link>
                    <Link to={'/shows'}><p className="hover:underline hover:underline-offset-5 cursor-pointer">TV Shows</p></Link>
                    <Link to={'/about'}><p className="hover:underline hover:underline-offset-5 cursor-pointer">About</p></Link>
                </div>
            </div>
            <div className="hidden md:flex gap-[31px]">
                <button className="w-[114px] h-[35px] border rounded-full text-white hover:bg-fuchsia-900 transition duration-500 hover:border-0 cursor-pointer">Sign Up</button>
                <button className="w-[115px] h-[36px] rounded-full text-black bg-white hover:bg-fuchsia-900 hover:text-white transition duration-500 cursor-pointer">Sign In</button>
            </div>
            <div className="lg:hidden">
                <Link to={'/menu'}>
                    <img src="menu.png" className="w-[36px] object-cover lg:hidden"/>
                </Link>
            </div>
        </div>
    )
}

export default Navbar