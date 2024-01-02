import React, {useState, useEffect} from 'react';
import './login.css';
import Navbar from '../../components/Navbar';
import video from './Loginasset/video1.mp4';
import logo from './Loginasset/logo.png';
import { Link, useNavigate } from 'react-router-dom'
import { FaUserShield, FaGoogle, FaGithub, FaFacebookF  } from 'react-icons/fa6';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from "react-icons/ai";
import Axios from 'axios'
import MyFooter from '../../components/Footer';

const login = () => {

    const [loginusername, setLoginUserName] = useState('')
    const [loginpassword, setLoginPassword] = useState('')
    const navigateTo = useNavigate()

    const [loginStatus, setLoginStatus] = useState()
    const [statusHolder, setStatusHolder] = useState('message')

    
    const loginuser=(e)=>{
        e.preventDefault();
        Axios.post('http://localhost:3002/login', {
            LoginUserName : loginusername,
            LoginPassword : loginpassword
        }).then((response)=>{
            console.log()
            if(response.data.message || loginusername == '' || loginpassword == ''){
                navigateTo('/login')
                setLoginStatus('User Tidak di Temukan')
            }
            else{
                navigateTo('/dashboard')
            }
        })
    };

    useEffect ( ( )=>{
        if(loginStatus !== ''){
        setStatusHolder('showMessage')
        setTimeout(() =>{
             setStatusHolder ('message') //
        }, 4000);
        }
    },[loginStatus])

    const onSubmit = () =>{
        setLoginUserName('')
        setLoginPassword('')
    }
    

    return (
        <>
            <Navbar />
            <div style={{ paddingTop: '10px' }}>
                <div className='loginPage flex'>
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

                            <form action="" className='form grid' onSubmit={onSubmit}>

                                <span className={statusHolder}>{loginStatus}</span>

                                <div className="inputDiv">
                                    <label htmlFor="username">Username</label>
                                    <div className="input flex">
                                        <FaUserShield className='icon' />
                                        <input type="text" id='username' placeholder='Masukan Username' onChange={(event)=>{
                                            setLoginUserName(event.target.value)
                                        }} />
                                    </div>
                                </div>

                                <div className="inputDiv">
                                    <label htmlFor="password">Password</label>
                                    <div className="input flex">
                                        <BsFillShieldLockFill className='icon' />
                                        <input type="password" id='password' placeholder='Masukan Password' onChange={(event)=>{
                                            setLoginPassword(event.target.value)
                                        }}  />
                                    </div>
                                </div>

                                <button type='sumbit' className='btn flex' onClick={loginuser}>
                                    <span>Masuk</span>
                                    <AiOutlineSwapRight className='icon' />
                                </button>

                                <span className='forgotPassword'>
                                    Lupa Kata Sandi? <a href="">Klik disini</a>
                                </span>

                            </form>
                            <div className="text-center space-x-3">
                                <button className="btn btn-circle hover:bg-green hover:text-white">
                                <FaGoogle />
                                </button>
                                <button className="btn btn-circle hover:bg-green hover:text-white">
                                <FaFacebookF />
                                </button>
                                <button className="btn btn-circle hover:bg-green hover:text-white">
                                    <FaGithub />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MyFooter />

        </>
    );
};

export default login;