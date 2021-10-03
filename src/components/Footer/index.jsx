import React from 'react';
import PaymentImg from '../../assets/paymentMethods.png';
import InstaImg from '../../assets/insta.png';
import VkImg from '../../assets/vk.png';
import './styles.scss';

export const Footer = () => <div className='footer'>
    <div className='footer__info'>
        <div className='footer__info-item'>ЧПТУП "marsa."
            Режим работы: с 11:00 до 20:00,
            без выходных
            Свидетельство 0042379 20.07.11 Минский Горисполком
        </div>
        <div className='footer__info-item'>
            УНП 191621312
            Минск, Слободская 12
            Дата регистрации в Торговом реестре РБ: 26.09.2020
        </div>
    </div>
    <div className='socials'>
        <a href='https://www.instagram.com/' target='_blank' className='social__item' to="https://outcast.by/">
            <img className='socials__img' src={InstaImg} />
        </a>
        <a href='https://vk.com/' target='_blank' className='social__item' to="/">
            <img className='socials__img' src={VkImg} />
        </a>
    </div>
    <img className='paymentMethods' src={PaymentImg} />
</div>;
