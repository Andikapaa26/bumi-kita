import React from 'react';
import './regist.css'
import Navbar from '../../components/Navbar';
import video from './Loginasset/video1.mp4';
import logo from './Loginasset/logo.png';
import {useState} from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import { FaUserShield } from 'react-icons/fa6';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";
import MyFooter from '../../components/Footer';

const regist = () => {

    const [email, setEmail] = useState('')
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const createUser=()=>{
        Axios.post('http://localhost:3002/regist', {
            Email : email,
            UserName : username,
            Password : password
        }).then(()=>{
            console.log('User Telah di Tambahkan');
        })
    };

    return (
        <>
            <Navbar />
            <div  style={{ paddingTop: '10px' }}>
                <div className='registerPage flex'>
                    <div className='container flex'>
                        <div className='videoDiv'>
                            <video src={video} autoPlay muted loop></video>

                            <div className='textDiv'>
                                <h2 className='title'> Mari Bergabung Dengan Bumi Kami!</h2>
                                <p>Maksimalkan Dana CSR untuk Menuju Indonesia Sejahtera</p>
                            </div>

                            <div className='kelasDiv flex'>
                                <span className='text'>Tidak Memiliki Akun?</span>
                                <Link to={'/regist'}>
                                    <button className='btn'>Daftar Sekarang</button>
                                </Link>
                            </div>

                        </div>

                        <div className="formDiv flex">
                            <div className="headerDiv">
                                <img src={logo} alt="Logo Image" />
                                <h3>Welcome Back</h3>
                            </div>

                            <form action="" className='form grid'>

                            <div className="inputDiv">
                                    <label htmlFor="email">Email</label>
                                    <div className="input flex">
                                        <MdMarkEmailRead className='icon' />
                                        <input type="email" id='email' placeholder='Masukan Email' onChange={(event)=>{
                                            setEmail(event.target.value)
                                        }} />
                                    </div>
                                </div>

                                <div className="inputDiv">
                                    <label htmlFor="username">Username</label>
                                    <div className="input flex">
                                        <FaUserShield className='icon' />
                                        <input type="text" id='username' placeholder='Masukan Username' onChange={(event)=>{
                                            setUserName(event.target.value)
                                        }}  />
                                    </div>
                                </div>

                                <div className="inputDiv">
                                    <label htmlFor="password">Password</label>
                                    <div className="input flex">
                                        <BsFillShieldLockFill className='icon' />
                                        <input type="password" id='password' placeholder='Masukan Password' onChange={(event)=>{
                                            setPassword(event.target.value)
                                        }}  />
                                    </div>
                                </div>

                                <button type='submit' className='btn flex' onClick={createUser}>
                                    <span>Daftar</span>
                                    <AiOutlineSwapRight className='icon' />
                                </button>

                                <span className='forgotPassword'>
                                    Lupa Kata Sandi? <a href="">Klik disini</a>
                                </span>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <MyFooter/>
        </>
    );
};

export default regist;