import React from "react";
import logo from "../assets/logo.png"
import Navbar from '../components/Navbar';
import Myfooter from '../components/Footer';
import aboutImg from "../assets/about.png";
import mahen from '../assets/mahen.png'
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Home = () => {
  const services = [
    {
      id: 1,
      title: "Membantu",
      decription:
        "Membantu perusahaan untuk menemukan pengaju terbaik maupun sebaliknya.",
      image: "/src/assets/icons/membership.png",
    },
    {
      id: 2,
      title: "Mempertimbangkan",
      decription:
        "Membantu mempertimbangkan penerima CSR  untuk mitra perusahaan lewat metode yang ilmiah dan ideal.",
      image: "/src/assets/icons/association.png",
    },
    {
      id: 3,
      title: "Memastikan",
      decription:
        "Memastikan pengaju memaksimalkan dana mitra dan memberikan dampak baik berkelanjutan untuk daerah yang dibina.",
      image: "/src/assets/icons/group-club.png",
    },
  ]
  return (
    <>
      <Navbar />
      <div className=" bg-neutralSilver">
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex justify-center items-center">
          <div className="w-full mx-auto">
            <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
              <div style={{ padding: '130px' }}>
                <img src={logo} alt="" />
              </div>
              {/* hero text */}
              <div className="md:w-1/2">
                <h1 className='text-5xl font-semibold text-neutralDGrey'>Maksimalkan Pengabdian </h1>
                <h1 className='text-5xl font-semibold mb-4 text-brandPrimary'>Untuk Kesejahteraan Gemilang </h1>
                <p className='text-neutralDGrey text-base mb-8 '>Menjawab Keresahan dan Kebutuhan Corporate Social Responsibility.</p>
                <div className="flex flex-wrap gap-2">
                  <button className='btn-primary'>
                    Bergabung Sebagai Mitra
                  </button>
                  <button className='btn-primary'>
                    Bergabung Sebagai Pengaju
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center my-8"
        >
          <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
            Mengabdi Bersama Kami!
          </h2>
          <p className="text-neutralGrey">
            Mitra dan Pengaju yang melakukan pengabdian bersama kami
          </p>
          <div className="my-12 flex flex-wrap justify-between items-center gap-8 ">
            <img src="src/assets/icons/company1.png" alt="" />
            <img src="src/assets/icons/company2.png" alt="" />
            <img src="src/assets/icons/company3.png" alt="" />
            <img src="src/assets/icons/company4.png" alt="" />
            <img src="src/assets/icons/company5.png" alt="" />
            <img src="src/assets/icons/company6.png" alt="" />
            <img src="src/assets/icons/company7.png" alt="" />
          </div>
        </motion.div>

        {/* service cards */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="mt-20 text-center md:w-1/2 mx-auto"
        >
          <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">
            Memberikan Solusi Terbaik Untuk Corporate Social Responsibility.
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
          className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-brandPrimary transition-all duration-300 flex items-center justify-center h-full"
            >
              <div className="">
                <div className="bg-[#E8F5E9] w-14 h-14 mx-auto mb-4 rounded-tl-3xl rounded-br-3xl">
                  <img src={service.image} alt="" className="-ml-5" />
                </div>
                <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                  {service.title}
                </h4>
                <p className="text-sm text-neutralGrey">{service.decription}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div>
        {/* about text */}
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
          <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
            >
              <img src={aboutImg} alt="" className="w-full" />
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="md:w-3/5 mx-auto">
              <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
                Templat Pengajuan Proposal Ilmiah
              </h2>
              <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
                Templat ini bagian penting dari pengajuan hibah CSR karena disusun secara ilmiah dan terukur, sehingga kami dapat melakukan seleksi awal secara metodis, mendasar, dan dapat dipertanggungjawabkan secara akademis.
              </p>
              <button className="btn-primary"> Unduh Templat Poposal</button>
            </motion.div>
          </div>
        </div>

        {/* company stats */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-4xl text-neutralDGrey font-semibold mb-2 md:w-2/3">
                Membangun Indonesia  <br /> <span className="text-brandPrimary">Melewati Pengabdian</span>
              </h2>
              <p>Mengabdi bersama ratusan mitra perusahaan dan organisasi.</p>
            </div>

            {/* stats */}
            <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <img src="/src/assets/icons/group.png" alt="" />
                  <div>
                    <h4 className="text-2xl text-neutralDGrey font-semibold">2,245,341</h4>
                    <p>Members</p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <img src="/src/assets/Check.png" alt="" />
                  <div>
                    <h4 className="text-2xl text-neutralDGrey font-semibold">828,867</h4>
                    <p>Event Bookings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      <div className="my-12">

        {/* company stats */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="px-4 lg:px-14 max-w-screen-2xl mx-auto  py-16">
          <div className="flex flex-col md:flex-row justify-start items-center gap-8">
            <div className="md:w-1/5">
              <img src={mahen} alt="" />
            </div>

            {/* stats */}
            <div className="md:w-2/3 mx-auto">
              <div>
                <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-6">
                  “Aplikasi CSR ini sangat membantu bagi perusahaan saya untuk menjalankan program kerja agar mencapai keberhasilan yang lebih tinggi. Terimakasih kepada BumiKita karena telah membantu dalam pencairan dana CSR”
                </p>
                <h5 className="text-brandPrimary text-xl font-semibold mb-2">Muhammad Mahendra P</h5>
                <p className="text-base text-neutralGrey mb-8">
                  Ketua Organisasi XCX
                </p>
                <div>
                  <div className="flex gap-8 items-center flex-wrap">
                    <img src="/src/assets/icons/company1.png" alt="" className="cursor-pointer" />
                    <img src="/src/assets/icons/company2.png" alt="" className="cursor-pointer" />
                    <img src="/src/assets/icons/company3.png" alt="" className="cursor-pointer" />
                    <img src="/src/assets/icons/company4.png" alt="" className="cursor-pointer" />
                    <img src="/src/assets/icons/company5.png" alt="" className="cursor-pointer" />
                    <img src="/src/assets/icons/company6.png" alt="" className="cursor-pointer" />
                    <div className="flex gap-8 items-center">
                      <a href="/" className="font-bold text-brandPrimary hover:text-neutralBlack">
                        Pendapat Lainnya
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
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <motion.div

          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex items-center justify-center lg:w-1/2 mx-auto">
          <div className="text-center">
            <h2 className="lg:text-5xl text-2xl text-neutralBlack font-semibold mb-4 lg:leading-snug">
              Bergabung Bersama Kami!
            </h2>
            <div className="flex gap-8 items-center justify-center">
              <button className="btn-primary text-white">
                Untuk Indonesia Sejahtera
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
        </motion.div>
      </div>
      <Myfooter />
    </>
  );
};

export default Home;
