import React from 'react';
import ContentMain from '../../components/ContentMain/ContentMain';
import ContentTop from '../../components/ContentTop/ContentTop';
import Cards from '../../components/Cards/Cards';
import './Content.css'
import Budget from '../../components/Budget/Budget';


const berita = () => {
    return (
        <>
        <div className='main-content'>
            <div className="content-grid">
            <ContentTop/>
            <Budget/>
            </div>
            <div className="content-grid pt-12">
            <Cards/>
            </div>
        </div>
        </>
    );
};

export default berita;