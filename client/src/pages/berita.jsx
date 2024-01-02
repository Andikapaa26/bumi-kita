import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Myfooter from '../components/Footer';
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import axios from 'axios';


const berita = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get('http://localhost:3002/berita');
                console.log(res.data);
                setBooks(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllBooks();
    }, []);

    return (
        <>
            <Navbar />
            <div className=' pt-12 px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='faq'>
                <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.6 }}

                    className='text-center md:w-1/2 mx-auto'>
                    <h2 className="text-4xl text-neutralDGrey font-semibold mb-4">
                        Berita Terkini
                    </h2>
                    <p className="text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto">
                        The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who is joining the community, read about how our community are increasing their membership income and lot is more.
                    </p>
                </motion.div>

                {/* all blogs */}
                <motion.div
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.6 }}
                    className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between mt-16'>
                    {
                        books.map(book => (
                            <div key={book.id} className='mx-auto relative mb-12 cursor-pointer'>
                                <img src={book.gambar} alt="" className='mx-auto hover:scale-95 transition-all duration-300 ' style={{ width: '500px', height: '300px' }} />

                                <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute -bottom-12 left-0 right-0'>
                                    <h3 className='mb-3 text-neutralGrey font-semibold'>{book.judul_berita}</h3>
                                    <p className='mb-3 text-neutralBlack font-semibold'>Penulis : {book.penulis}</p>
                                    <div className="flex gap-8 items-center justify-center">
                                        <a href="/" className="font-bold text-brandPrimary hover:text-neutralBlack">
                                            Selengkapnya
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="17"
                                                height="11"
                                                viewBox="0 0 17 11"
                                                fill="none"
                                                className="inline-block ml-2"
                                            >
                                                <path
                                                    d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                                                    stroke="#4CAF4F"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }


                </motion.div>

            </div>
            <Myfooter />

        </>
    );
};

export default berita;