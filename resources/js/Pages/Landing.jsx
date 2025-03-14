
export default function Landing() {
    return (
        <div className="landing__wrapper">
            <div className="landing__content px-4 md:px-8 py-4 lg:px-[10%] xl:px-[15%] xl:py-[3rem]">
                <Nav />
                <div className="hero__section h-[20rem] md:h-[25rem] lg:h-[35rem]">
                    <div className="hero__wrapper bg-clblue h-full rounded-3xl px-8 grid grid-cols-2">
                        <div className="hero__text col-span-2 md:col-span-1 space-y-8 flex flex-col justify-center">
                            <div className="header font-font1Bold text-5xl md:text-4xl lg:text-6xl">
                                <h1 className="flex flex-col">
                                    <span>Your Eyes</span>
                                    <span>Our Focus</span>
                                </h1>
                            </div>
                            <div className="sub">
                                <p className="flex flex-col leading-tight text-xs md:text-base">
                                    <span>From comprehensive eye exams to advanced</span>
                                    <span>treatments, we are committed to protecting and</span>
                                    <span>enhancing your vision. Schedule your visit today!</span>
                                </p>
                            </div>
                            <div className="action">
                                <button className="px-8 py-2 bg-cblack rounded-xl black-btn">
                                    <span>Book Now</span>
                                </button>
                            </div>
                        </div>
                        <div className="hero__image col-span-2 md:col-span-1 relative hidden md:block">
                            <div className="image_wrapper overflow-hidden absolute bottom-0 md:w-[25rem] lg:w-[35rem]">
                                <img src="/assets/images/hero/girl_with_glasses.png" alt="hero" className="w-full h-full"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="metrics__section grid grid-cols-2 justify-items-center md:flex md:justify-between items-center my-28 gap-y-8 flex-wrap">
                    <div className="patients flex items-center space-x-4">
                        <p className="font-font2SemiBold text-4xl md:text-5xl text-cblue">500+</p>
                        <p className="flex flex-col leading-tight text-sm text-gray-500">
                            <span>Happy</span>
                            <span>Patients</span>
                        </p>
                    </div>
                    <div className="line border border-gray-200 h-[50px] hidden md:block"></div>
                    <div className="experience flex items-center space-x-4">
                        <p className="font-font2SemiBold text-4xl md:text-5xl text-cblue">20</p>
                        <p className="flex flex-col leading-tight text-sm text-gray-500">
                            <span>Years of</span>
                            <span>Eye Care</span>
                        </p>
                    </div>
                    <div className="line border border-gray-200 h-[50px] hidden md:block"></div>
                    <div className="satisfaction flex items-center space-x-4">
                        <p className="font-font2SemiBold text-4xl md:text-5xl text-cblue">98%</p>
                        <p className="flex flex-col leading-tight text-sm text-gray-500">
                            <span>Customer</span>
                            <span>Satisfaction</span>
                        </p>
                    </div>
                    <div className="line border border-gray-200 h-[50px] hidden md:block"></div>
                    <div className="branches flex items-center space-x-4">
                        <p className="font-font2SemiBold text-4xl md:text-5xl text-cblue">2</p>
                        <p className="flex flex-col leading-tight text-sm text-gray-500">
                            <span>Branches in</span>
                            <span>the Philippines</span>
                        </p>
                    </div>
                </div>
                <div className="about_us__section">
                    <div className="quote flex flex-col md:flex-row md:justify-between">
                        <div className="header">
                            <h2 className="font-font1SemiBold flex flex-col leading-tight text-4xl lg:text-5xl">
                                <span>Your eye deserves</span>
                                <span>the best</span>
                            </h2>
                        </div>
                        <div className="sub">
                            <p className="flex flex-col leading-tight text-justify text-sm lg:text-base mt-8 md:mt-0">
                                <span>At Q Vision Optical Clinic, we are dedicated to providing</span>
                                <span>exceptional eye care with a commitment to precision, innovation,</span>
                                <span>and patient-centered service. We offer comprehensive eye</span>
                                <span>exams, high-quality prescription eyewear, and advanced vision </span>
                                <span>correction solutions tailored to your needs. </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="landing__footer h-[30rem] w-full bg-cblack lg:px-[10%] xl:px-[15%] text-cwhite">
                <div className="border border-red-500">hello</div>
            </div> */}
        </div>
    );
}


const Nav = () => {
    return(
        <nav className="w-full mb-12 flex justify-between items-center">
            <div className="logo">
                <Logo />
            </div>
            <div className="links hidden md:block">
                <ul className="flex space-x-16">
                    <li><a href="#">SERVICES</a></li>
                    <li><a href="#">ABOUT US</a></li>
                </ul>
            </div>
            <div className="action flex space-x-4">
                <div className="mode__switch">
                    <div className="switch p-1 rounded-full w-[60px] md:w-[80px] py-1 bg-cdgray flex items-center justify-start">
                        <div className="icon__wrapper flex justify-center items-center w-[25px] h-[25px] md:w-[35px] md:h-[35px] p-1 bg-cwhite rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6" viewBox="0 0 36 36"><path fill="#ffac33" d="M16 2s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2zm18 14s2 0 2 2s-2 2-2 2h-2s-2 0-2-2s2-2 2-2zM4 16s2 0 2 2s-2 2-2 2H2s-2 0-2-2s2-2 2-2zm5.121-8.707s1.414 1.414 0 2.828s-2.828 0-2.828 0L4.878 8.708s-1.414-1.414 0-2.829c1.415-1.414 2.829 0 2.829 0zm21 21s1.414 1.414 0 2.828s-2.828 0-2.828 0l-1.414-1.414s-1.414-1.414 0-2.828s2.828 0 2.828 0zm-.413-18.172s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828zm-21 21s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828zM16 32s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2z"></path><circle cx={18} cy={18} r={10} fill="#ffac33"></circle></svg>
                        </div>
                    </div>
                </div>
                <button className="book px-4 py-1 md:px-6 md:py-2 text-sm md:text-base bg-cblack rounded-full black-btn">
                    <span>Book Online</span>
                </button>
            </div>
        </nav>
    )
}

const Logo = () => {
    return(
        <div>
            <img src="/assets/images/qvision-logo.png" alt="logo"  className="w-28 md:w-32"/>
        </div>
    );
}
