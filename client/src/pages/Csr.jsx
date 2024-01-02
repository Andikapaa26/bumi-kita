import React from 'react';
import Navbar from '../components/Navbar';
import Myfooter from '../components/Footer';
import Maecenas from '../assets/maecenas.png'

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const CSR = () => {
    return (
        <>
            <Navbar />
            <div className=" bg-neutralSilver">
                <div className="pt-32 text-center py-12 mx-auto">
                     <h1 className='text-3xl font-semibold text-neutralDGrey'>Container / Search </h1>
                </div>
            </div>

            <div className="my-12">
                {/* company stats */}
                <motion.div
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.6 }}
                    className="px-4 lg:px-14 max-w-screen-2xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-start items-center gap-8">
                        <div className="md:w-1/3">
                            <img src={Maecenas} alt="" />
                        </div>

                        {/* stats */}
                        <div className="md:w-2/3 mx-auto">
                            <div>
                                <h1 className='text-neutralBlack text-4xl font-semibold py-4'>HIMATASKA</h1>
                                <h4 className='py-4 text-neutralBlackc text-xl font-semibold'>SK</h4>
                                <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-6">
                                    Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                                    lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                                    eu enim metus. Vivamus sed libero ornare, tristique quam in,
                                    gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                                    laoreet elit at ligula molestie, nec molestie mi blandit.
                                    Suspendisse cursus tellus sed augue ultrices, quis tristique
                                    nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                                    pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                                    vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                                    eget efficitur libero condimentum id. Curabitur id nibh id sem
                                    dignissim finibus ac sit amet magna.
                                </p>
                                <h5 className="text-brandPrimary text-xl font-semibold mb-2">Tim Smith</h5>
                                <p className="text-base text-neutralGrey mb-8">
                                    British Dragon Boat Racing Association
                                </p>
                                <div>
                                    <button className="btn-primary text-white">
                                        Selengkapnya
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="8"
                                            viewBox="0 0 14 8"
                                            fill="none"
                                            className="inline-block ml-2"
                                        >
                                            <path
                                                d="M10.2503 7.00012L12.7201 4.53039C13.013 4.23749 13.013 3.7626 12.7201 3.4697L10.2503 0.999966M12.5004 4.00004L1.50012 4.00004"
                                                stroke="white"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="my-12" id="product">
                {/* company stats */}
                <motion.div
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.6 }}
                    className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-16">
                    <div className="flex flex-col md:flex-row justify-start items-center gap-8">
                        <div className="md:w-1/3">
                            <img src={Maecenas} alt="" />
                        </div>

                        {/* stats */}
                        <div className="md:w-2/3 mx-auto">
                            <div>
                                <h1 className='text-neutralBlack text-4xl font-semibold py-4'>HIMATASKA</h1>
                                <h4 className='py-4 text-neutralBlackc text-xl font-semibold'>SK</h4>
                                <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-6">
                                    Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                                    lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                                    eu enim metus. Vivamus sed libero ornare, tristique quam in,
                                    gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                                    laoreet elit at ligula molestie, nec molestie mi blandit.
                                    Suspendisse cursus tellus sed augue ultrices, quis tristique
                                    nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                                    pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                                    vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                                    eget efficitur libero condimentum id. Curabitur id nibh id sem
                                    dignissim finibus ac sit amet magna.
                                </p>
                                <h5 className="text-brandPrimary text-xl font-semibold mb-2">Tim Smith</h5>
                                <p className="text-base text-neutralGrey mb-8">
                                    British Dragon Boat Racing Association
                                </p>
                                <div>
                                    <button className="btn-primary text-white">
                                        Selengkapnya
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="8"
                                            viewBox="0 0 14 8"
                                            fill="none"
                                            className="inline-block ml-2"
                                        >
                                            <path
                                                d="M10.2503 7.00012L12.7201 4.53039C13.013 4.23749 13.013 3.7626 12.7201 3.4697L10.2503 0.999966M12.5004 4.00004L1.50012 4.00004"
                                                stroke="white"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <Myfooter/>
        </>
    );
};

export default CSR;