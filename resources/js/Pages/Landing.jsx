import { testimonials } from "@/testimonials";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import FormLabel from "./components/FormLabel";
import FormInput from "./components/FormInput";
import InputField from "./components/InputField";
import FormTextArea from "./components/FormTextArea";
import { useState, useEffect } from 'react';
import { useForm, usePage } from "@inertiajs/react";


export default function Landing() {
    return (
        <div className="landing__wrapper dark:bg-black">
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
                                    <a href="#book">Book Now</a>
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
                <div id="about" className="about_us__section">
                    <div className="quote flex flex-col md:flex-row md:justify-between my-16 dark:text-cwhite">
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
                    <div id="services" className="services my-16">
                        <Bento />
                    </div>
                    <div className="optometrist">
                        <div className="header">
                            <h2 className="flex flex-col leading-tight text-2xl font-font1SemiBold dark:text-cwhite">
                                <span>Introducing Our</span>
                                <span>Dedicated Optometrist</span>
                            </h2>
                            <div className="doctor grid grid-cols-8 my-16 gap-4">
                                <div className="doctor__image col-span-8 md:col-span-3 bg-cdblue rounded-3xl h-[250px] md:h-[300px] w-full relative">
                                    <div className="image__wrapper overflow-hidden w-44 md:w-52 absolute bottom-0 left-1/2 -translate-x-1/2">
                                        <img src="/assets/images/doctor/dr_bgr.png" alt="doctor" />
                                    </div>
                                </div>
                                <div className="about__doctor col-span-8 md:col-span-5 h-[220px] md:h-[300px] w-full bg-clyellow rounded-3xl p-6">
                                    <div className="doctor__info">
                                        <h3 className="text-2xl font-font1SemiBold">Dr. Alermae Blaine Yu</h3>
                                        <span>Optometrist</span>
                                    </div>
                                    <div className="doctor__desc mt-4 md:mt-10 text-xs md:text-sm">
                                        <p>Dr. Alermae Blaine Yu is a dedicated optometrist who successfully passed the Optometrist Licensure Exam in 2022. She completed her education at Southwestern University and is committed to providing expert eye care, ensuring each patient receives the best vision solutions for their needs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonials">
                        <div className="header">
                            <h2 className="text-2xl font-font1SemiBold text-gray-500">What Our Patients Say</h2>
                        </div>
                        <div className="testimonies w-full flex overflow-x-hidden my-16 mask-image-fade">
                            <TestimoniesSlider />
                        </div>
                    </div>
                </div>
                <div id="book" className="book grid grid-cols-5 gap-8 my-16">
                    <div className="location col-span-5 lg:col-span-3 space-y-10 flex flex-col">
                        <div className="location__header space-y-4">
                            <div className="header space-y-3 dark:text-cwhite">
                                <p>Come Visit Us</p>
                                <h2 className="text-2xl font-font1Bold">Book an Appointment</h2>
                            </div>
                            <p className="text-sm text-gray-500">Schedule a consultation for expert eye care services today.</p>
                        </div>
                        <div className="h-full w-full">
                            <Map />
                        </div>
                    </div>
                    <div className="form col-span-5 lg:col-span-2">
                        <Form />
                    </div>
                </div>
            </div>
                <div className="landing__footer dark:bg-cwhite h-[25rem] w-full bg-cblack px-6 lg:px-[10%] xl:px-[15%] text-cwhite dark:text-cblack rounded-t-3xl">
                    <div className="footer__content py-[2rem] grid grid-cols-2 h-full gap-y-10">
                        <div className="sec__1 col-span-2 md:col-span-1 flex flex-col justify-between">
                            <div className="header text-4xl md:text-5xl lg:text-6xl xl:text-8xl flex flex-col font-font1SemiBold">
                                <span>Get Clearer</span>
                                <span>Vision <span className="text-cblue">Now</span></span>
                            </div>
                            <div className="location flex flex-col leading-tight">
                                <span className="text-gray-500 text-sm">Where we are located:</span>
                                <span>Espiritu St, Bislig, Philippines</span>
                            </div>
                        </div>
                        <div className="sec__2 col-span-2 md:col-span-1 flex flex-col justify-between items-end">
                            <div className="contact space-y-2 flex-shrink-0">
                                <div className="social-links flex space-x-2">
                                    <div className="facebook">
                                        <a href="https://www.facebook.com/qvisionbislig/">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-6 md:size-8" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="instagram">
                                        <a href="https://www.instagram.com/qvisionopticalclinic/">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-6 md:size-8" viewBox="0 0 24 24"><path fill="currentColor"  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="cta text-2xl font-font1SemiBold flex space-x-2 items-center">
                                    <span>Contact Us</span>
                                    <div className="arrow">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="copyright text-xs md:text-sm text-gray-500">
                                <span>&copy; Copyright {new Date().getFullYear()} by <a href="/admin" className="text-clpurple">QVision</a> <span className="hidden">x Uruta</span></span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}


const Nav = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode !== null) {
            return savedMode === 'true';
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        localStorage.setItem('darkMode', darkMode.toString());
    }, [darkMode]);

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    };

    return(
        <nav className="w-full mb-12 flex justify-between items-center">
            <div className="logo">
                <Logo />
            </div>
            <div className="links hidden md:block">
            <ul className="flex space-x-16 dark:text-cwhite">
                    <li><a href="#services" className="hover:italic hover:text-clpurple ctransition hover:underline">SERVICES</a></li>
                    <li><a href="#about" className="hover:italic hover:text-clpurple ctransition hover:underline">ABOUT US</a></li>
                </ul>
            </div>
            <div className="action flex space-x-4">
                <div className="mode__switch">
                    <div className={`switch p-1 rounded-full w-[60px] md:w-[80px] py-1 bg-cdgray flex items-center ${darkMode ? 'justify-end' : 'justify-start'} ctransition`} onClick={handleDarkModeToggle}>
                        <div className="icon__wrapper flex justify-center items-center w-[25px] h-[25px] md:w-[35px] md:h-[35px] p-1 bg-cwhite rounded-full">
                            {darkMode ? (
                               <svg xmlns="http://www.w3.org/2000/svg" className="w-6" viewBox="0 0 64 64">
                                    <circle cx={32} cy={32} r={32} fill="#405866"></circle>
                                    <g fill="#4f6977">
                                        <circle cx={29.31} cy={52.982} r={9.262}></circle>
                                        <path d="M41.943 24.333a3.936 3.936 0 0 1-7.869 0a3.934 3.934 0 0 1 7.869 0"></path>
                                        <circle cx={5.863} cy={36.434} r={3.86}></circle>
                                        <circle cx={6.211} cy={18.742} r={2.204}></circle>
                                        <circle cx={17.477} cy={19.481} r={3.446}></circle>
                                        <path d="M47.792 10.867a4.853 4.853 0 1 1-9.706 0a4.853 4.853 0 0 1 9.706 0"></path>
                                    </g>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6" viewBox="0 0 36 36"><path fill="#ffac33" d="M16 2s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2zm18 14s2 0 2 2s-2 2-2 2h-2s-2 0-2-2s2-2 2-2zM4 16s2 0 2 2s-2 2-2 2H2s-2 0-2-2s2-2 2-2zm5.121-8.707s1.414 1.414 0 2.828s-2.828 0-2.828 0L4.878 8.708s-1.414-1.414 0-2.829c1.415-1.414 2.829 0 2.829 0zm21 21s1.414 1.414 0 2.828s-2.828 0-2.828 0l-1.414-1.414s-1.414-1.414 0-2.828s2.828 0 2.828 0zm-.413-18.172s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828zm-21 21s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828zM16 32s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2z"></path><circle cx={18} cy={18} r={10} fill="#ffac33"></circle></svg>
                            )}
                        </div>
                    </div>
                </div>
                <button className="book px-4 py-1 md:px-6 md:py-2 text-sm md:text-base rounded-full black-btn dark:border-cwhite dark:hover:border-cblack">
                    <a href="#book">Book Online</a>
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

const Bento = () => {
    return(
        <div className="bento__wrapper grid grid-cols-8 gap-4 mt-16">
            <div className="consultation relative overflow-hidden bg-clgreen rounded-3xl p-6 h-[230px] md:h-[250px] w-full col-span-8 md:col-span-3">
                <div className="header">
                    <h3 className="text-xl md:text-2xl font-font1Bold mb-2">Eye Consultation</h3>
                    <p className="text-xs md:text-sm">Comprehensive eye exam to ensure eye health</p>
                </div>
                <BentoImage image={'eye_ball_rbg.png'} classes={'rotate-45 -bottom-14 md:-bottom-20 left-1/2 -translate-x-1/2'} size={'w-[200px] lg:w-[220px]'}/>
            </div>
            <div className="couple relative overflow-hidden bg-clyellow rounded-3xl p-6 h-[230px] md:h-[250px] w-full col-span-8 md:col-span-5">
                <div className="header">
                    <h3 className="text-xl md:text-2xl font-font1Bold flex flex-col leading-tight">
                        <span>Smiling Bright With</span>
                        <span>Perfect Sight</span>
                    </h3>
                </div>
                <BentoImage image={'couple_rbg.png'} classes={'-bottom-2 right-10 md:right-2 lg:right-4 xl:right-24'} size={'w-[180px] md:w-[210px] lg:w-[230px]'}/>
            </div>
            <div className="frame relative overflow-hidden bg-clpurple rounded-3xl p-6 h-[230px] md:h-[250px] w-full col-span-8 md:col-span-5">
                <div className="header">
                    <h3 className="text-xl md:text-2xl font-font1Bold flex flex-col leading-tight mb-2">Eyeglass Frames</h3>
                    <p className="text-xs md:text-sm">Stylish and durable frames to match your style</p>
                </div>
                <BentoImage image={'glasses_frame_rbg.png'} classes={'-bottom-12 -right-8 rotate-12'} size={'w-[220px] md:w-[250px] lg:w-[300px]'}/>
            </div>
            <div className="lenses relative overflow-hidden bg-clpink rounded-3xl p-6 h-[230px] md:h-[250px] w-full col-span-8 md:col-span-3">
                <div className="header">
                    <h3 className="text-xl md:text-2xl font-font1Bold flex flex-col leading-tight mb-2">Prescription Lenses</h3>
                    <p className="text-xs md:text-sm">Customized lenses for clear and comfortable vision</p>
                </div>
                <BentoImage image={'glasses_lens_rbg.png'} classes={'-bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2'} size={'w-[300px] md:w-[280px] lg:w-[300px]'}/>
            </div>

        </div>
    )
}

const BentoImage = ({ classes, image, alt, size }) => {
    return(
        <div className={`image__wrapper overflow-hidden absolute ${size} ${classes}`}>
            <img classes={`w-full h-full`} src={`/assets/images/services_img/${image}`} alt={alt} />
        </div>
    )
}

const TestimoniesSlider = () => {
    return(
        <div className="flex space-x-8 animate-infinite-scroll">
            {[...testimonials, ...testimonials].map((testimony) => (
                <div key={testimony.id} className="max-w-[230px] md:max-w-[300px] rounded-3xl bg-clgray overflow-hidden flex-shrink-0">
                    <div className="testimony p-6 h-[200px] md:h-[170px]">
                        <div className="rating flex mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg key={star} className="w-5 h-5" fill={star <= testimony.rating ? "#FBBF24" : "none"} stroke="#D1D5DB" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                            ))}
                        </div>
                        <div className="testimonies text-justify">
                            <p className="text-xs">{testimony.testimony}</p>
                        </div>
                    </div>
                    <div className="patient bg-cdgray h-[80px] md:h-[100px] grid grid-cols-3 gap-4 w-full">
                        <div className="patient__image col-span-1 flex justify-center items-center">
                            <div className="image__wrapper rounded-full w-[40px] md:w-[60px] overflow-hidden">
                                <img src="/assets/images/misc/blank.jpg" alt="patient" className="w-full h-full object-cover"/>
                            </div>
                        </div>
                        <div className="patient__info col-span-2 flex justify-center flex-col">
                            <h3 className="text-md md:text-lg font-font1SemiBold">{testimony.name}</h3>
                            <p className="text-xs md:text-sm text-gray-500">Patient</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

const Map = () => {
    const position = [8.188924, 126.355795];

    const customIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    return(
        <div className="w-full h-[300px] md:h-[400px] lg:h-full">
            <div className="map__wrapper  w-full h-full overflow-hidden rounded-3xl">
                <MapContainer
                    center={position}
                    zoom={17}
                    style={{height: '100%', width: '100%'}}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                      <Marker position={position} icon={customIcon}>
                        <Popup>
                            Qvision Bislig Branch
                        </Popup>
                    </Marker>

                </MapContainer>

            </div>
        </div>
    )
}

const Form = () => {
    const { data, setData, post, errors } =useForm({
        'name': '',
        'address': '',
        'email': '',
        'phone_number': '',
        'daily_acts': '',
        'last_checkup': '',
        'complaints': ''
    });
    const { booking, message } = usePage().props;

    const handleFormSubmit = (e) => {
        e.preventDefault();
        post('/booking', {
            onSuccess: () => {
                alert("Sakses");
                alert(booking, message);
            },
            onError: () => {
                alert("Not Sakses");
            }
        })
    }

    return (
        <form action="" className="bg-clgray p-6 rounded-3xl h-full">
            <InputField>
                <FormLabel htmlFor={'name'} textLabel={'Your Name'}/>
                <FormInput id={'name'} type={'text'} placeholder={'John Doe'} value={data.name} onChange={(e) => setData('name', e.target.value)} error={errors.name}/>
            </InputField>
            <InputField>
                <FormLabel htmlFor={'address'} textLabel={'Your Address'}/>
                <FormInput id={'address'} type={'text'} placeholder={'Purok, Street, Barangay'} value={data.address} onChange={(e) => setData('address', e.target.value)} error={errors.address}/>
            </InputField>
            <InputField>
                <FormLabel htmlFor={'email'} textLabel={'Your Email'}/>
                <FormInput id={'email'} type={'email'} placeholder={'johndoe@mail.com'} value={data.email} onChange={(e) => setData('email', e.target.value)} error={errors.email}/>
            </InputField>
            <InputField>
                <FormLabel htmlFor={'phone_number'} textLabel={'Your Phone Number'}/>
                <FormInput id={'phone_number'} type={'text'} placeholder={'09123456789'} value={data.phone_number} onChange={(e) => setData('phone_number', e.target.value)} error={errors.phone_number}/>
            </InputField>
            <InputField>
                <FormLabel htmlFor={'daily_acts'} textLabel={'Occupation / Daily Activities'}/>
                <FormInput id={'daily_acts'} type={'text'} placeholder={'e.g., Student, Reading'} value={data.daily_acts} onChange={(e) => setData('daily_acts', e.target.value)} error={errors.daily_acts}/>
            </InputField>
            <InputField>
                <FormLabel htmlFor={'last_checkup'} textLabel={'Last Eye Checkup'}/>
                <FormInput id={'last_checkup'} type={'date'} placeholder={'e.g., Student, Reading'} value={data.last_checkup} onChange={(e) => setData('last_checkup', e.target.value)} error={errors.last_checkup}/>
            </InputField>
            <InputField>
                <FormLabel htmlFor={'complaints'} textLabel={'Eye Concern / Complaints'}/>
                <FormTextArea id={'complaints'} placeholder={'Any discomfort, pain, or vision issues?'} value={data.complaints} onChange={(e) => setData('complaints', e.target.value)} error={errors.complaints}/>
            </InputField>
            <div className="submit w-full h-12 text-sm bg-cblack rounded-lg text-cwhite flex justify-center items-center border border-cblack black-btn">
                <button onClick={(e) => handleFormSubmit(e)}>Book Appointment</button>
            </div>
        </form>
    )
}
