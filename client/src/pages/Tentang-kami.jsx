import React from 'react';
import Navbar from '../components/Navbar';
import icon from "../assets/icon.svg";
import Myfooter from '../components/Footer';

const Tentangkami = () => {
    return (
        <>
            <Navbar />
            <div className='text-center pt-32'>
                <h1 className='text-neutralBlack text-4xl font-semibold'>Tentang Kami</h1>
                <h5 className='font-semibold font-montserrat'>Bumi Kita</h5>
            </div>
            <div className=''>
                <div className='px-4 lg:px-10 max-w-screen-xl mx-auto min-h-screen h-screen'>
                    <div className='w-full mx-auto'>
                        <div className="my-28 md:my-8 py-10 flex flex-col md:flex-row items-center justify-between">
                            <div className=''>
                                <img src={icon} alt="" />
                            </div>
                            <div className='md:w-2/3'>
                                <p className='text-neutralDGrey text-base mb-10 font-poppins text-justify'>Bumi Kita adalah perusahaan yang berkomitmen untuk menciptakan dampak positif dan membangun Indonesia. Dengan semangat "Bergerak Untuk Membangun Indonesia", kami menjalankan misi kami dengan penuh dedikasi. Kami berfokus pada inovasi dan keberlanjutan dalam setiap sektor bisnis yang kami jalani. Kami percaya bahwa melalui kerja keras, kolaborasi, dan inovasi, kita dapat mencapai perubahan yang positif untuk masyarakat Indonesia. Dalam setiap langkah yang kami ambil, kami berusaha untuk memberikan kontribusi yang nyata dalam memajukan negeri ini. Bergabunglah dengan Bumi Kita, dan mari bersama-sama membangun masa depan yang lebih cerah dan berkembang untuk Indonesia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Myfooter />
        </>
    );
};

export default Tentangkami;
