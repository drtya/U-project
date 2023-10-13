'use client'
import logo from '@/assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Header.module.scss'


const Header = ({navLinks}) => {
    const pathname = usePathname();
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
            <Link href={'/contacts'} className={styles.header__btn}>Свяжитесь с нами</Link>
        </header>
    )
}

export default Header