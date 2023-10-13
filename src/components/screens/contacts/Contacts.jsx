'use client'
import React from 'react'
import styles from './Contacts.module.scss'
import Image from 'next/image'
import call from '@/assets/icons/call.svg'
import location from '@/assets/icons/location.svg'
import time from '@/assets/icons/time.svg'
import message from '@/assets/icons/message.svg'
import { useDispatch, useSelector } from 'react-redux'
import { send, setName, setEmail, setMessage } from '@/components/store/states/sendMessage'

const Contacts = () => {
    const sendMessage = useSelector((state) => state.sendMess.value)
    const dispatch = useDispatch();
    let inputs = [
        {
            name: 'Имя',
            activity: false,
            foo: (e) =>{
                dispatch(setName(e.target.value))
            },
            id: 1
        },
        {
            name: 'Email',
            activity: false,
            foo: (e) =>{
                dispatch(setEmail(e.target.value))
            },
            id: 2
        },
        {
            name: 'Сообщение',
            activity: false,
            foo: (e) =>{
                dispatch(setMessage(e.target.value))
            },
            id: 3
        }]

    return (
        <div className={styles.contacts + ' container'}>
            <h2 className={styles.contacts_title}>Свяжитесь с нами</h2>
            <div className={styles.contacts_block}>
                <form className={styles.contacts_form}>
                    <p className={styles.contacts_form_title}>Мы всегда готовы ответить на ваши вопросы и предоставить дополнительную информацию!</p>
                    {inputs.map(el => (
                        <input type="text" key={el.id} onChange={(e)=>el.foo(e)} placeholder={el.name} className={`${styles.contacts_form_input} ${el.activity ? styles.active : ''}`} />
                    ))}
                    <button className={sendMessage ? styles.contacts_form_btn_send : styles.contacts_form_btn} onClick={(e) => { e.preventDefault(); dispatch(send()) }}>{sendMessage ? 'Отправлено' : 'Отправить'}</button>
                </form>
                <div data-aos-duration="2000" data-aos-once="true" data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0" className={styles.contacts_info}>
                    <h3 className={styles.contacts_info_title}>Информация</h3>
                    <p className={styles.contacts_info_text}><Image src={message} /> u.skillz.edu@gmail.com</p>
                    <p className={styles.contacts_info_text}><Image src={call} /> +996 554 201 506</p>
                    <p className={styles.contacts_info_text}><Image src={location} /> ул.Манаса 91/1</p>
                    <p className={styles.contacts_info_text}><Image src={time} /> 09:00-20:00</p>
                </div>
            </div>

        </div>
    )
}

export default Contacts