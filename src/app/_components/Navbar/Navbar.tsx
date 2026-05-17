"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from '../../../../public/logo-sporting.png'
import {
    NativeSelect,
    NativeSelectOption,
} from "@/components/ui/native-select"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Navbar() {

    const [lang, setLang] = useState("English")

/*     function translatePage(lang: string) {

        //call on translate API
    } */

    return (
        <>
            <nav className='bg-navy text-white sticky top-0 right-0 left-0 p-4 lg:text-lg md:text-sm z-50'>
                <div className='list-none hidden lg:flex justify-between desktop '>
                    <ul className='flex gap-4 items-center'>
                        <li><Link href=""><Image src={logo} alt='scout bank logo' width={50} height={50}></Image></Link></li>
                        <li><Link href="/" className="font-bold" >The Scout Bank</Link></li>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/resources">Resources</Link> </li>

                    </ul>
                    <ul className='flex gap-4 items-center'>
                        <li><Link href="/register">Register</Link> </li>
                        <li><Link href="/login">Login</Link> </li>
                        <li><Link href="/dashboard">Dashboard</Link> </li>
                        <li> <NativeSelect value={lang} onChange={(e) => {
                            setLang(e.target.value)
                            console.log(e.target.value)
                        }}>
                            <NativeSelectOption value="">Translate to </NativeSelectOption>
                            <NativeSelectOption value="Arabic">Arabic</NativeSelectOption>
                            <NativeSelectOption value="English">English</NativeSelectOption>
                            <NativeSelectOption value="French">French</NativeSelectOption>
                            <NativeSelectOption value="Dutch">Dutch</NativeSelectOption>
                        </NativeSelect></li>
                        <li><Link href="/contactUs">Contact Us</Link></li>
                    </ul>
                </div>
                <div className='lg:hidden relative flex justify-between mobile md:flex-col'>
                    <div className='flex items-center gap-4 '>
                        <Link href=""><Image src={logo} alt='scout bank logo' width={50} height={50}></Image></Link>
                        <Link href="/" className="font-bold md:hidden">The Scout Bank</Link>
                    </div>
                    <div className='absolute right-3'>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger><i className="fa-solid fa-bars "></i></NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <NavigationMenuLink href="/">Home</NavigationMenuLink>
                                        <NavigationMenuLink href="/about">About Us</NavigationMenuLink>
                                        <NavigationMenuLink href="/resources">Resources</NavigationMenuLink>
                                        <NavigationMenuLink href='/register'>Register</NavigationMenuLink>
                                        <NavigationMenuLink href='/login'>Login</NavigationMenuLink>
                                        <NavigationMenuLink href='/dashboard'>Dasboard</NavigationMenuLink>
                                        <NavigationMenuLink href='/contactUs'>Contact Us</NavigationMenuLink>
                                        <NativeSelect value={lang} onChange={(e) => {
                                            setLang(e.target.value)
                                            console.log(e.target.value)
                                        }}>
                                        <NativeSelectOption value="">Translate to </NativeSelectOption>
                                        <NativeSelectOption value="Arabic">Arabic</NativeSelectOption>
                                        <NativeSelectOption value="English">English</NativeSelectOption>
                                        <NativeSelectOption value="French">French</NativeSelectOption>
                                        <NativeSelectOption value="Dutch">Dutch</NativeSelectOption>
                                    </NativeSelect>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </nav >
        </>
    )
}
/* direct user to dasboard and display loading and using his id to fill his boxes */
