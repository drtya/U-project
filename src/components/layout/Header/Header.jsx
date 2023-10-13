'use client'
import logo from '@/assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Header.module.scss'
import { useRouter } from 'next/navigation'


const Header = ({navLinks}) => {
    const pathname = usePathname();
    const router = useRouter();
    return (
        <header className={styles.header+' container'} >
            <Image className={styles.header_logo} src={logo} alt='logo' />
            <div className={styles.header__nav_menu}>
                {
                    navLinks.map(el=>{
                        const isActive = pathname === el.link
                        return (
                            <Link key={el.title} className={isActive ? styles.active : ''} href={el.link}>{el.title}</Link>
                        )
                    })
                }
            </div>
            <button onClick={(e)=>{
                e.preventDefault();
            }} className={styles.header__btn}>Свяжитесь с нами</button>
        </header>
    )
}

export default Header