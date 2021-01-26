import React from 'react';
// import mobile from '../img/desktop.png'
import programmer from '../img/programmer.svg'
import Typical from 'react-typical'
import { DiReact, DiAndroid, DiDjango, DiPostgresql, DiHtml5, DiCss3Full, DiNodejs} from "react-icons/di";
function Hero() {
    return (
        <div className="max-h-full min-w-full font-poppins absolute">
            <div className=" relative flex flex-col h-screen md:grid md:max-h-screen md:grid-cols-2">
                <div className="h-1/2 md:col-span-1 md:h-screen md:items-center">
                    <h1 className=" pl-10 pt-5 uppercase text-2xl font-poppins font-extrabold tracking-widest">JD | Dev</h1>
                    <img className=" px-2 h-3/4 md:px-10 object-fill" src={programmer} alt=""/>
                </div>

                {/* Text Area  */}
                <div className="bg-red-300 h-1/2 md:col-span-1 md:h-screen md:border-l-4 md:border-gray-600 md:flex
                md:flex-col md:justify-between md:items-center ">
                    <div className="p-6 md:my-auto md:p-5 lg:p-24">
                        <h1 className="flex flex-col mb-5 text-4xl md:flex-row font-poppins md:text-6xl lg:text-8xl lg:mb-10 font-bold tracking-wide uppercase">Joshua Dignadice</h1>
                        <h1 className="flex md:flex-row text-xl font-poppins lg:text-4xl">I'm{' '} 
                        <span className="ml-2 text-xl font-normal tracking-wide mb-5 lg:text-4xl"><Typical
                                loop={Infinity}
                                wrapper="b"
                                steps={[ 
                                    "a Software Engineer",
                                    1000,
                                    "a Mobile Developer",
                                    1000,
                                    "a Web Developer",
                                    1000,
                                    "inlove in Coding",
                                    1000,
                                    "a Chess Player",
                                    1000,
                                    ]}
                                />
                        </span>
                        </h1>
                        <p className="tracking-wider text-gray-800">
                            Qui id cillum ex sunt ex dolore officia pariatur. Eiusmod exercitation eiusmod aute irure labore non magna laborum. Ex et adipisicing ex fugiat. Voluptate sint proident cillum deserunt.
                        </p>
                            <div className="justify-around mt-5 md:mt-10 my-auto flex flex-wrap">
                            <DiDjango      className="text-lg shadow-lg bg-gray-200 h-12 w-12 md:h-16 md:w-16 rounded-full text-red-400 p-2" />
                            <DiPostgresql  className="text-lg shadow-lg bg-gray-200 h-12 w-12 md:h-16 md:w-16 rounded-full text-red-400 p-2" />
                            <DiReact       className="text-lg shadow-lg bg-gray-200 h-12 w-12 md:h-16 md:w-16 rounded-full text-red-400 p-2"/>
                            <DiNodejs      className="text-lg shadow-lg bg-gray-200 h-12 w-12 md:h-16 md:w-16 rounded-full text-red-400 p-2" />
                            <DiAndroid     className="text-lg shadow-lg bg-gray-200 h-12 w-12 md:h-16 md:w-16 rounded-full text-red-400 p-2" /> 
                            <DiHtml5       className="text-lg shadow-lg bg-gray-200 h-12 w-12 md:h-16 md:w-16 rounded-full text-red-400 p-2" />
                            <DiCss3Full    className="text-lg shadow-lg bg-gray-200 h-12 w-12 md:h-16 md:w-16 rounded-full text-red-400 p-2" />
                            </div>  
                    
                    </div>

                </div>
            </div>
        </div>
        
    )
}

export default Hero
