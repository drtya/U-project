'use client'
import React from 'react'
//logos
import alfa from '@/assets/projects/alfa.svg'
import euras from '@/assets/projects/euras.svg'
import gazprom from '@/assets/projects/gazprom.svg'
import healthBalance from '@/assets/projects/healthBalance.svg'
import minObr from '@/assets/projects/minObr.svg'
import prokuratur from '@/assets/projects/prokuratur.svg'
import texta from '@/assets/projects/texta.svg'
import Image from 'next/image'
import styles from './Projects.module.scss'
// import Swiper core and required modules
import { Pagination, Scrollbar, A11y, Autoplay, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Projects = () => {

  const ourProjects = [
    {
      id: 1,
      name: 'Альфа Банк',
      descr: 'Удобный онлайн-инструмент для управления финансами, предоставляющий клиентам доступ к счетам, переводам и платежам',
      logo: alfa,
      // imgs:[]
    },
    {
      id: 2,
      name: 'ЕВРАЗ',
      descr: 'Наше приложение планирования задач помогло ЕВРАЗ управлять проектами и сроками на разных континентах',
      logo: euras,
      // imgs:[]
    },
    {
      id: 3,
      name: 'Гос - Мин образования КР',
      descr: 'Мы разработали веб-сайт для Минобразования КР, обеспечив легкий доступ к информации о программах, событиях и новостях',
      logo: minObr,
      // imgs:[]
    },
    {
      id: 4,
      name: 'Генпрокуратура РФ',
      descr: 'Разработали сайт для удобного анализа статистики правоохранительных органов',
      logo: prokuratur,
      // imgs:[]
    },
    {
      id: 5,
      name: 'Газпром Медиа',
      descr: 'Создали сайт для Газпром Медиа, обеспечив легкий доступ к контенту и информации о медийных проектах',
      logo: gazprom,
      // imgs:[]
    },
    {
      id: 6,
      name: 'HealthBalance',
      descr: 'Создали интуитивное мобильное приложение HealthBalance для отслеживания активности, здоровья и фитнеса',
      logo: healthBalance,
      // imgs:[]
    },
    {
      id: 7,
      name: 'Texta',
      descr: 'Разработали приложение Texta, которое автоматически генерирует высококачественный контент для блогов и публикаций',
      logo: texta,
      // imgs:[]
    },

  ]
  return (
    <div className={styles.projects + " container"}>
      <h2 className={styles.projects_title}>Наши проекты</h2>
      {ourProjects.map(el => (
        el.id % 2 === 0 ?
          <div data-aos="fade-right" className={styles.projects_box}>
            <div className='row'>
              <div style={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <Image className={styles.projects_box_img} src={el.logo} />
                <h3 className={styles.projects_box_title}>{el.name}</h3>
                <p className={styles.projects_box_descr}>{el.descr}</p>
              </div>
              <div className={styles.checkProj} style={{ width: '50%', margin: 'auto' }}>
                <div className={styles.projects_slider_box}>

                  <Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    loop={true}
                    spaceBetween={50}
                    autoplay={true}
                    slidesPerView={1}
                    pagination={{ clickable: true }}>
                    <SwiperSlide style={{ backgroundColor: 'black' }} className={styles.projects_box_imgProj}>
                      <Image />
                    </SwiperSlide>
                    <SwiperSlide className={styles.projects_box_imgProj}>
                      <Image />
                    </SwiperSlide>
                    <SwiperSlide className={styles.projects_box_imgProj}>
                      <Image />
                    </SwiperSlide>
                    <SwiperSlide className={styles.projects_box_imgProj}>
                      <Image />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <button className={styles.checkProj_btn} >Перейти на сайт</button>
              </div>

            </div>
          </div>
          :
          <div data-aos="fade-left" className={styles.projects_box}>
            <div className='row'>
              <div style={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <Image className={styles.projects_box_img} src={el.logo} />
                <h3 className={styles.projects_box_title}>{el.name}</h3>
                <p className={styles.projects_box_descr}>{el.descr}</p>
              </div>
              <div className={styles.checkProj} style={{ width: '50%', margin: 'auto' }}>
                <div className={styles.projects_slider_box}>

                  <Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}

                    spaceBetween={50}
                    autoplay={true}
                    slidesPerView={1}
                    pagination={{ clickable: true }}>
                    <SwiperSlide style={{ backgroundColor: 'black' }} className={styles.projects_box_imgProj}>
                      <Image />
                    </SwiperSlide>
                    <SwiperSlide className={styles.projects_box_imgProj}>
                      <Image />
                    </SwiperSlide>
                    <SwiperSlide className={styles.projects_box_imgProj}>
                      <Image />
                    </SwiperSlide>
                    <SwiperSlide className={styles.projects_box_imgProj}>
                      <Image />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <button className={styles.checkProj_btn} >Перейти на сайт</button>
              </div>

            </div>
          </div>
      ))}
    </div>
  )
}

export default Projects