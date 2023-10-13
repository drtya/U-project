'use client'
import Image from "next/image"
import homeImg from '@/assets/home/BigLogo.svg'
import styles from './Home.module.scss'
import alfa from '@/assets/home/alfa.png'
import euras from '@/assets/home/euras.png'
import prokuratura from '@/assets/home/prokuratura.png'
import minObrKR from '@/assets/home/minObrKR.png'
import Contacts from "../contacts/Contacts"
//bgDecore
import chart from '@/assets/home/bgDecore/chart-2.svg'
import clock from '@/assets/home/bgDecore/clock.svg'
import cup from '@/assets/home/bgDecore/cup.svg'
import figma from '@/assets/home/bgDecore/figma.svg'
import flash from '@/assets/home/bgDecore/flash.svg'
import global from '@/assets/home/bgDecore/global.svg'
import lampCharge from '@/assets/home/bgDecore/lamp-charge.svg'
import messages from '@/assets/home/bgDecore/messages-2.svg'
import python from '@/assets/home/bgDecore/python.svg'
import shieldSearch from '@/assets/home/bgDecore/shield-search.svg'
import verify from '@/assets/home/bgDecore/verify.svg'
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Scrollbar, A11y, Autoplay  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
const Home = () => {
  const decore_timer = 1000;
  return (
    <main>
      {/* home */}
      <section className={styles.home + ' container'}>
        <div className="row">
          <div className={styles.home_textbox}>
            <h1 className={styles.home_title}>
              U! – Команда лучших <br /> специалистов в IT
            </h1>
            <p className={styles.home_subtitle}>U! объединяет уникальные знания и навыки в <br /> области программирования, дизайна, и управления. <br /> Ваша компания может доверить свои важнейшие <br /> задачи экспертам из U!</p>
            <Link href={'/contacts'} className={styles.home_btn}>Свяжитесь с нами</Link>
          </div>
          <Image className={styles.home_logo} src={homeImg} />
        </div>
      </section>

      {/* power */}
      <section className={styles.power + ' container'}>
        <h2 className={styles.power_title}>Мощь топовых специалистов теперь на вашей стороне – <br /> используйте ее для своего успеха.</h2>
        <p className={styles.power_subtitle}>Мы инновационная компания, создающая веб-приложения и цифровые решения для клиентов по всему миру. <br />
          Наша миссия – превращать идеи в реальность с помощью передовых технологий и творческого подхода. С <br />
          объединением опыта и энергии, мы создаем уникальные цифровые продукты, способствующие росту и успеху <br />
          наших клиентов.</p>
      </section>

      {/* appreciate */}
      <section className={styles.appreciate}>
        <Image data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="200" data-aos-offset="0" src={shieldSearch} className={styles.appreciate_decore} />
        <Image data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="200" data-aos-offset="0" src={flash} className={styles.appreciate_decore} />
        <Image data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="200" data-aos-offset="0" src={global} className={styles.appreciate_decore} />
        <Image data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="200" data-aos-offset="0" src={cup} className={styles.appreciate_decore} />
        <h2 className={styles.appreciate_title}>Ценности компании:</h2>
        <Swiper modules={[ Scrollbar, A11y, Autoplay]}
                  spaceBetween={50}
                  autoplay={true}
                  slidesPerView={1}>
          <SwiperSlide className={styles.slider_bg}>
            <div className={styles.slider}>
              <h3 className={styles.slider_title}>Инновации</h3>
              
              <p className={styles.slider_subtitle}>Мы постоянно находились в поиске новых идей и передовых технологий. Инновации являются нашим двигателем, позволяя нам предоставлять клиентам самые современные и эффективные решения.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slider_bg}>
            <div className={styles.slider}>
              <h3 className={styles.slider_title}>Качество</h3>
              
              <p className={styles.slider_subtitle}>Мы стремимся к высочайшему качеству во всем, что делаем. От дизайна до разработки, каждый этап проекта выполняется с умением и вниманием к деталям.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slider_bg}>
            <div className={styles.slider}>
              <h3 className={styles.slider_title}>Сотрудничество</h3>
              
              <p className={styles.slider_subtitle}>Мы верим в силу командной работы. Сотрудничество как с нашими клиентами, так и внутри нашей компании, позволяет нам достигать уникальных результатов.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slider_bg}>
            <div className={styles.slider}>
              <h3 className={styles.slider_title}>Адаптивность</h3>
              
              <p className={styles.slider_subtitle}>Мир цифровых технологий постоянно меняется, и мы готовы адаптироваться к новым вызовам. Гибкость в подходе к проектам позволяет нам эффективно реагировать на изменения.</p>
            </div>
          </SwiperSlide>
        </Swiper>

      </section>

      {/* advantages */}
      <section className={styles.advantages + ' container'}>
        <Image data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="200" data-aos-offset="0" className={styles.advantages_decore} src={lampCharge} />
        <Image data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="200" data-aos-offset="0" className={styles.advantages_decore} src={clock} />
        <Image data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="200" data-aos-offset="0" className={styles.advantages_decore} src={messages} />
        <Image data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="200" data-aos-offset="0" className={styles.advantages_decore} src={verify} />
        <h2 className={styles.advantages_title}>Наши преимущества:</h2>
        <div style={{ display:'flex', justifyContent: 'space-around',flexWrap:'wrap', }}>
          <div data-aos="fade-right" data-aos-delay={decore_timer} className={styles.advantages_box}>
            <h3 className={styles.advantages_box_title}>Индивидуальный подход</h3>
            <p>Мы создаем решения, точно соответствующие уникальным потребностям клиента, с учетом бюджета и сроков.</p>
          </div>
          <div data-aos="fade-down" data-aos-delay={decore_timer} className={styles.advantages_box}>
            <h3 className={styles.advantages_box_title}>Стремление к вершинам инноваций</h3>
            <p>Наша компания всегда на грани новых технологий и идей, что позволяет нам предлагать современные решения, способствующие конкурентоспособности.</p>
          </div>
          <div data-aos="fade-left" data-aos-delay={decore_timer} className={styles.advantages_box}>
            <h3 className={styles.advantages_box_title}>Контроль качества</h3>
            <p>Все этапы проектов проходят строгий контроль, обеспечивая надежность и высокое качество наших продуктов.</p>
          </div>
          <div data-aos="fade-right" data-aos-delay={decore_timer} className={styles.advantages_box}>
            <h3 className={styles.advantages_box_title}>Интегрированный комплекс услуг</h3>
            <p>Наша компания предоставляет полный спектр услуг с начала и до конца проекта, минимизируя сложности для клиента.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay={decore_timer} className={styles.advantages_box}>
            <h3 className={styles.advantages_box_title}>Гибкость и реагирование на изменения</h3>
            <p>Мы готовы оперативно реагировать на рыночные изменения, предоставляя клиентам гибкие решения.</p>
          </div>
          <div data-aos="fade-left" data-aos-delay={decore_timer} className={styles.advantages_box}>
            <h3 className={styles.advantages_box_title}>Доказанная подтвержденная репутация</h3>
            <p>Мы имеем ряд успешных проектов и благодарные отзывы, демонстрируя нашу способность к предоставлению результатов.</p>
          </div>
        </div>
        <div style={{ display:'flex', justifyContent: 'space-around', gap:'4vw' }}>
          
        </div>
      </section>

      {/* services */}
      <section className={styles.services + ' container'}>
        
          <Image data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0" className={styles.services_decore} src={python} />
          <Image data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0" className={styles.services_decore} src={figma} />
          <Image data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0" className={styles.services_decore} src={chart} />
        
        <h2 className={styles.services_title}>Наши услуги</h2>
        <p className={styles.services_subtitle}>В U! мы предлагаем разнообразные услуги, которые охватывают все аспекты разработки, от концепции до <br /> воплощения, с акцентом на инновации, качество и удовлетворение клиентов.</p>
        <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay={decore_timer} data-aos-offset="0" style={{display:'flex',gap:'20px', justifyContent: 'space-around', marginBottom: '30px' }}>
          <div className={styles.services_box + " col-6"}>
            <h4 className={styles.services_box_title}>Программирование и разработка</h4>
            <p className={styles.services_box_subtitle}>Наши ведущие специалисты в области программирования создадут для вас мощные и эффективные веб-приложения, обеспечивая высочайший уровень функциональности и безопасности.</p>
          </div>
          <div className={styles.services_box + " col-6"}>
            <h4 className={styles.services_box_title}>Дизайн и пользовательский опыт</h4>
            <p className={styles.services_box_subtitle}>Наши дизайнеры превратят ваши идеи в визуально привлекательные и удобные приложения. Мы создаем уникальные дизайнерские решения, которые будут отражать вашу уникальную идентичность.</p>
          </div>
        </div>
        <div style={{display:'flex',gap:'20px', justifyContent: 'space-around' }}>
          <div data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay={decore_timer}
          data-aos-offset="0" className={styles.services_box + " col-6"}>
            <h4 className={styles.services_box_title}>Управление проектами и продуктами</h4>
            <p className={styles.services_box_subtitle}>Наши менеджеры по продуктам и проектам будут работать в тесном сотрудничестве с вами, чтобы обеспечить эффективное управление проектом, соблюдение сроков и достижение поставленных целей.</p>
          </div>
          <div className={styles.services_box + " col-6"} style={{ background: 'none', boxShadow: 'none' }}>
            <button className={styles.services_box_btn}>Узнать подробнее</button>
          </div>
        </div>
      </section>

      {/* about */}
      <section className={styles.about + ' container'}>
        <h2 className={styles.about_title}>О нас</h2>
        <div className={styles.about_box}>
          Наши решения возможны благодаря нашей выдающейся команде. Мы объединяем дизайнеров, бэкенд и фронтенд разработчиков с опытом работы более 4 лет. Наши специалисты не только обладают глубокими знаниями в своей области, но и делятся общей страстью к инновациям.
        </div>
        <div className={styles.about_more}>Более подробнее о нас можете узнать</div>
        <button className={styles.about_more_btn}>Здесь</button>

      </section>

      {/* projects */}
      <section className={styles.projects + ' container'}>
        <h2 className={styles.projects_title}>Наши проекты</h2>
        <p className={styles.projects_subtitle}>Мы гордимся каждым из этих проектов, которые стали не только техническими <br /> достижениями, но и важными шагами к достижению целей наших клиентов.</p>
        <div style={{ textAlign: 'center' }}>
          <div className="row" style={{ justifyContent: 'space-around', marginBottom: '4vw' }}>
            <div data-aos="fade-right" data-aos-delay={decore_timer} className={styles.projects_box}>
              <Image src={alfa} className={styles.projects_box_img} />
              <div>
                <h3 className={styles.projects_box_title}>Альфа Банк</h3>

                <p className={styles.projects_box_subtitle}>Удобный онлайн-инструмент для управления <br /> финансами, предоставляющий клиентам <br /> доступ к счетам, переводам и платежам</p>
              </div>
            </div>

            <div data-aos="fade-left" data-aos-delay={decore_timer} className={styles.projects_box}>
              <Image src={euras} className={styles.projects_box_img} />
              <div>
                <h3 className={styles.projects_box_title}>ЕВРАЗ</h3>

                <p className={styles.projects_box_subtitle}>Наше приложение планирования задач <br /> помогло ЕВРАЗ управлять проектами и <br /> сроками на разных континентах</p>
              </div>
            </div>
          </div>

          <div className="row" style={{ justifyContent: 'space-around' }}>
            <div data-aos="fade-right" data-aos-delay={decore_timer} className={styles.projects_box}>
              <Image src={minObrKR} className={styles.projects_box_img} />
              <div>
                <h3 className={styles.projects_box_title}>Гос - Мин образования КР</h3>

                <p className={styles.projects_box_subtitle}>Мы разработали веб-сайт для Минобразования <br /> КР, обеспечив легкий доступ к информации о <br />программах, событиях и новостях</p>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-delay={decore_timer} className={styles.projects_box}>
              <Image src={prokuratura} className={styles.projects_box_img} />
              <div>
                <h3 className={styles.projects_box_title}>Генпрокуратура РФ</h3>

                <p className={styles.projects_box_subtitle}>Разработали сайт для удобного анализа <br /> статистики правоохранительных <br /> органов</p>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.projects_more_btn}>Ещё больше проектов</button>
      </section>

      {/* contacts */}
      <Contacts />
    </main>
  )
}

export default Home