import React from 'react';
import Navbar from '../components/Navbar';
import Myfooter from '../components/Footer';
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";


const kontak = () => {
    const conta = [
        {
            id: 1,
            title: "Alamat",
            decription:
                "Taman Puri Indah D13 Kota Serang Provinsi Banten.",
            image: "/src/assets/icons/Map.png",
        },
        {
            id: 2,
            title: "Whatsapp",
            decription:
                "+62-8515-648-2633",
            image: "/src/assets/icons/Whatsapp.png",
        },
        {
            id: 3,
            title: "Email",
            decription:
                "bumikitainfo@gmail.com.",
            image: "/src/assets/icons/Envelope.png",
        },
        {
            id: 4,
            title: "Website",
            decription:
                "Bumikita.com",
            image: "/src/assets/icons/click.png",
        },
    ]
    return (
        <>
            <Navbar />
            <div className='"'>
                <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto ">

                    {/* service cards */}
                    <motion.div
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="mt-20 text-center md:w-1/2 mx-auto"
                    >
                        <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">
                            Lebih Dekat Dengan Kami.
                        </h2>
                        <p className="text-neutralGrey">
                            Apa yang kami lakukan?
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="mt-14 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12"
                    >
                        {conta.map((conta) => (
                            <div
                                key={conta.id}
                                className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-brandPrimary transition-all duration-300 flex items-center justify-center h-full"
                            >
                                <div className="">
                                    <div className="bg-[#E8F5E9] w-14 h-14 mx-auto mb-4 rounded-tl-3xl rounded-br-3xl">
                                        <img src={conta.image} alt="" className="-ml-2" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                                        {conta.title}
                                    </h4>
                                    <p className="text-sm text-neutralGrey">{conta.decription}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <Myfooter />
        </>
    );
};

export default kontak;