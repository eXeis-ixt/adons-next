"use client";
import React from 'react'
import Nav from '../components/Nav'
import { ThemeProvider } from "@material-tailwind/react";
import sravan from '../assets/337275186_745877227154331_3018009090933633609_n.jpg'
import Image from 'next/image';

import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
  } from "@material-tailwind/react";
function page() {
  return (
    <>
    <div className=' container'>

    <ThemeProvider>
    <Nav />
    <div className=' mt-4'>
    <Image src={sravan} className=' rounded-xl' height={500} width={500} />
    <h1 className=' text-8xl text-indigo-700 bold uppercase '>CEO Sravan is gay</h1>
        <a href="https://www.facebook.com/sarvan45" target='_blank'>
    <Button>
        Facebook
    </Button>
    </a>
    </div>
    </ThemeProvider>
    </div>
    
    </>
  )
}

export default page