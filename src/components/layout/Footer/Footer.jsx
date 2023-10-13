import Image from "next/image"
import logo from '@/assets/logo.svg'
import call from '@/assets/icons/call.svg'
import whatsapp from '@/assets/icons/whatsapp.svg'
import message from '@/assets/icons/message.svg'
import telegram from '@/assets/icons/telegram.svg'
import instagram from '@/assets/icons/insta.svg'
import youtube from '@/assets/icons/youtube.svg'
import styles from './Footer.module.scss'
import logoWhite from '@/assets/logoWhite.svg'
import Link from "next/link"

const Footer = ({ navLinks }) => {
  return (
    <footer className={styles.footer + ' container'}>
      
      <div style={{ padding: 'clamp(6px,3vw,20px) 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop:'1px solid #808080', borderBottom:'1px solid #808080' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(10px,3vw,30px)' }}>
          <Image src={logo} alt="logo" />
          <p>Школа креативных профессий</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(10px,3vw,30px)' }}>
          <a href="#"><Image src={call} alt="call" /></a>
          <a href="#"><Image src={whatsapp} alt="whatsapp" /></a>
          <a href="#"><Image src={message} alt="message" /></a>
          <a href="#"><Image src={telegram} alt="telegram" /></a>
        </div>
      </div>
      
      <div className={styles.footer_navBlock}>
        <div className={styles.footer__nav}>
          {
            navLinks.map(el => (
              <Link key={el.title} href={el.link}>{el.title}</Link>
            ))
          }
        </div>
        <ol className={styles.footer__social_nav}>
          <li>Наши социальные сети</li>
          <li><a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Image src={instagram} /> instagram</a></li>
          <li><a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Image src={youtube} /> youtube</a></li>
        </ol>
      </div>
      <div className={styles.footer__company }>
        <Image src={logoWhite} alt="logo" />
        <div className={styles.footer__company_box }>
        <p>© 2023 | ОсОО «U!SkillZ» | Все права защищены.
          <br />Копирование материалов запрещено.</p>
        <p>Политика конфидециальности <br />
          Договор оферты</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer