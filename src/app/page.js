"use client"
import Home from '@/components/screens/home/Home'
import Aos from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css'

export default function HomePage() {
  useEffect(() => {
    Aos.init({ easing: 'linear', duration: '2000', once: true })
  }, [])
  return (
    <Home />
  )
}
