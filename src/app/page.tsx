import Image from 'next/image'
"use client";
import { ThemeProvider } from "@material-tailwind/react";
import Nav from './components/Nav'
import Hero from './components/Hero'



export default function Home() {
  return (
   <>
   <ThemeProvider>
    <Nav />
    <Hero />
   </ThemeProvider>
   </>
  )
}
