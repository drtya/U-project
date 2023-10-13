'use client'
import Image from 'next/image'
import React from 'react'
import macBook from '@/assets/about/MacbookPro.png'
import styles from './About.module.scss'
// import noPhoto from '@/assets/about/noPhoto.jpg'
import {A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const About = () => {

  const ourTeam = [
    {
      name: 'ФИО',
      job: 'Должность',
      image: ''
    },
    {
      name: 'ФИО',
      job: 'Должность',
      image: ''
    },
    {
      name: 'ФИО',
      job: 'Должность',
      image: ''
    },
    {
      name: 'ФИО',
      job: 'Должность',
      image: ''
    },
    {
      name: 'ФИО',
      job: 'Должность',
      image: ''
    }
  ]
  return (
    <div className="main">
      <div className={styles.about + " container"}>
        <h2 className={styles.about_title}>О компании</h2>
        <div className={styles.about_subtitle_box}>U! Веб-студия уже зарекомендовала себя в разработке посадочных страниц, интернет-магазинов, корпоративных сайтов и создании веб-приложений. Наши усилия направлены на то, чтобы вы вышли впереди конкурентов. Мы достигаем этой цели, обеспечивая высокую скорость загрузки ваших цифровых продуктов, повышенную функциональность и превосходную навигацию.</div>
        <div className={styles.about_info}>
          <div className={styles.about_info_box}>
            <h4 className={styles.about_info_box_title}>Более 50+</h4>
            <p className={styles.about_info_box_subtitle}>Проектов</p>
          </div>
          <div className={styles.about_info_box}>
            <h4 className={styles.about_info_box_title}>10 опытных</h4>
            <p className={styles.about_info_box_subtitle}>Специалистов</p>
          </div>
          <div className={styles.about_info_box}>
            <h4 className={styles.about_info_box_title}>7 лет</h4>
            <p className={styles.about_info_box_subtitle}>На рынке</p>
          </div>
        </div>
        <div className={styles.about_skills}>
          <div className={styles.about_skills_box}>
            <h4 className={styles.about_skills_title}>Наши умения и навыки</h4>
            <p className={styles.about_skills_subtitle}>U-Skillz - это студия, которая воплощает проекты любой сложности, создавая веб-сайты, мобильные приложения и обеспечивая SEO-продвижение.
              Наше дизайн-направление также предоставляет услуги по разработке логотипов, корпоративной айдентики и созданию креативных веб-продуктов для компаний. Кроме того, команда U-SkillZ обеспечивает техническую поддержку и доработку ваших веб-сайтов. После завершения разработки предлагаем настройку рекламных кампаний и долгосрочное сопровождение вашего проекта.</p>
          </div>
          <Image src={macBook} className={styles.about_skills_image} />
        </div>
      </div>
      <div className={styles.team}>
        <h2 className={styles.team_title}>Наша команда</h2>
        <Swiper
          modules={[ A11y, Autoplay]}
          autoplay={true}
          slidesPerView={4}>
          {ourTeam.map(team => (
            <SwiperSlide className={styles.team_box}>
              <div className={styles.team_box_img}>
                {team.image && <Image style={{ width: '100%', height: '100%' }} src={team.image} />}
              </div>
              <p style={{ fontSize: 'clamp(14px,3vw,24px)', fontWeight: '700' }}><span style={{ fontSize: 'clamp(12px,2vw,22px)', fontWeight: '500' }}>{team.name}</span> <br /> {team.job}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <section className={styles.history + ' container'}>
        <h2 className={styles.history_title}>История компании</h2>
        <div className={styles.history_block}>
          <div data-aos="fade-right" className={styles.history_box}>
            <h3 className={styles.history_box_title}>2016 - Веб-студия U!</h3>
            <p> Веб-студия U-SkillZ была основана в 2016 году. Наш путь был испытан трудностями, но результативен: мы сформировали бренд, предоставляющий выдающиеся программные услуги</p>
          </div>
          <div data-aos="fade-down" className={styles.history_box}>
            <h3 className={styles.history_box_title}> 2017 - Путешествие началось</h3>
            <p>В 2016 году несколько друзей, полных энтузиазма и мечтаний, основали компанию по разработке веб-сайтов. В течение первого года к нам присоединились первые клиенты, которые положили начало нашему пути. Многие из них остаются с нами и по сей день.</p>
          </div>
          <div data-aos="fade-left" className={styles.history_box}>
            <h3 className={styles.history_box_title}>2018 - От микро до малого</h3>
            <p>Мы посвятили следующие два года упорному труду. Наша команда U-SkillZ выросла до 7 талантливых веб-дизайнеров и разработчиков, превратив нас из микрокомпании в небольшую фирму. Ура!</p>
          </div>
          <div data-aos="fade-right" className={styles.history_box}>
            <h3 className={styles.history_box_title}>2019 - Взрывной и продуктивный</h3>
            <p>Полны энергии и вдохновения! Новые веб-проекты и надежные партнеры! Мы не только разрабатывали совершенно новые веб-сайты и проводили ребрендинг существующих, но и оказывали активную поддержку нашим постоянным клиентам.</p>
          </div>
          <div data-aos="fade-up" className={styles.history_box}>
            <h3 className={styles.history_box_title}>2020 - Пандемия и локдаун</h3>
            <p>Коронавирус и удалённая работа в 2020 году были тяжелыми испытаниями для многих компаний, и некоторые из них даже не смогли выдержать этот вызов. Мы окунулись в мир онлайна и пересмотрели наши методы работы. Были моменты, когда нам было действительно сложно, но именно 2020 год сделал нас еще сильнее и лучше!</p>
          </div>
          <div data-aos="fade-left" className={styles.history_box}>
            <h3 className={styles.history_box_title}>2021 - Релокейт</h3>
            <p>В середине этого года мы расширились и открыли новый офис в Бишкеке. Теперь, с уверенностью, мы можем сказать, что успешно освоили новый рынок и успешно интегрировались в работу. Идем вперед с новыми вызовами!</p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About