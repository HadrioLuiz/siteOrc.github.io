"use client"

import { usePathname } from "next/navigation";
import { Open_Sans } from "next/font/google";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import Logo from "../Img/teamLogo.png";
import Brand from "../Img/yourBrand.png"
import Image from "next/image";
import Link from "next/link";

const open_sans = Open_Sans({
    weight:'800',
    style:'normal',
    subsets:['latin'],
    display: 'swap'
})


export default function Header() {
    return (
        <main className="flex relative w-auto h-44 bg-[#2d41c4f7] ">
            <div className="flex flex-row">
                <div className="flex ml-2 items-center justify-start">
                    <Image
                        src={Brand}
                        width={180}
                        height={180}
                        alt="Your Brand"
                    />
                </div>
                <div className="flex ml-[450px] items-center justify-center">
                    <Link className={`link ${usePathname === '/' ? 'active' : ''}`} href="/">
                        <Image
                            src={Logo}
                            width={140}
                            height={140}
                            alt="Logo"
                        />
                    </Link>
                </div>
                <div className="flex ml-[450px] items-center justify-end">
                    <FaFacebookF color="white" className="h-10 w-10" />
                    <FaYoutube color="white" className="h-10 w-10 ml-1" />
                    <FaInstagram color="white" className="h-10 w-10 ml-3" />
                </div>
            </div>
        </main>
    );
}