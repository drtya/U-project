'use client'
import Header from '@/components/layout/Header'
import './globals.css'
import Footer from '@/components/layout/Footer'
import { store } from '../components/store/store'
import { Provider } from 'react-redux'

const navLinks = [
  {
    link: '/',
    title: 'Главное'
  },
  {
    link: '/services',
    title: 'Услуги'
  },
  {
    link: '/about',
    title: 'О нас'
  },
  {
    link: '/projects',
    title: 'Портфолио'
  },
  {
    link: '/contacts',
    title: 'Контакты'
  }
]

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Header navLinks={navLinks} />
          {children}
          <Footer navLinks={navLinks} />
        </Provider>

      </body>
    </html>
  )
}
