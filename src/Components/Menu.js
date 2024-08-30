"use client"

import Link from "next/link";
import { Open_Sans } from "next/font/google";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const open_sans = Open_Sans({
    weight: '600',
    style: 'normal',
    subsets: ['latin'],
    display: 'swap'
})

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#141759] p-4">
            <div className="max-w-7xl mx-auto flex justify-between">
                <div className="hidden md:flex space-x-4">
                    <ul className="flex justify-center ml-[387px] text-white align-middle pt-2 items-center space-x-3">
                        <li className=" hover:underline">
                            <Link className={`link ${usePathname === '/' ? 'active' : ''}`} href="/">
                                Página inicial
                            </Link>
                        </li>
                        <li className=" hover:underline">
                            <Link className={`link ${usePathname === '/SoccerPage' ? 'active' : ''}`} href="/SoccerPage">
                                Futebol
                            </Link>
                        </li>
                        <li className=" hover:underline">
                            <Link className={`link ${usePathname === '/StorePage' ? 'active' : ''}`} href="/StorePage">
                                Loja
                            </Link>
                        </li>
                        <li className=" hover:underline">
                            <Link className={`link ${usePathname === '/TrophyPage' ? 'active' : ''}`} href="/TrophyPage">
                                Troféus
                            </Link>
                        </li>
                        <li className=" hover:underline">
                            <Link className={`link ${usePathname === '/ContactPage' ? 'active' : ''}`} href="/ContactPage">
                                Contato
                            </Link>
                        </li>
                        <li className=" hover:underline">
                            <Link className={`link ${usePathname === '/FanMemberPage' ? 'active' : ''}`} href="/FanMemberPage">
                                Sócio Torcedor
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="text-white focus:outline-none"
                    >
                         {isOpen ? <IoCloseSharp size={24} /> : <IoMenu size={24} />} {/* Ícones de menu e fechar */}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden mt-4">
                    <ul className="flex flex-col justify-start text-left align-middle text-white pt-2">
                        <li className=" hover:underline">
                            <Link className={`link ${usePathname === '/' ? 'active' : ''}`} href="/">
                                Página inicial
                            </Link>
                        </li>
                        <li className=" hover:underline">
                            <Link className={`link ${usePathname === '/SoccerPage' ? 'active' : ''}`} href="/SoccerPage">
                                Futebol
                            </Link>
                        </li>
                        <li className=" hover:underline">
                            <Link className={`link ${usePathname === '/StorePage' ? 'active' : ''}`} href="/StorePage">
                                Loja
                            </Link>
                        </li>
                        <li className=" hover:underline">
                            <Link className={`link ${usePathname === '/TrophyPage' ? 'active' : ''}`} href="/TrophyPage">
                                Troféus
                            </Link>
                        </li>
                        <li className=" hover:underline">
                            <Link className={`link ${usePathname === '/ContactPage' ? 'active' : ''}`} href="/ContactPage">
                                Contato
                            </Link>
                        </li>
                        <li className=" hover:underline">
                            <Link className={`link ${usePathname === '/FanMemberPage' ? 'active' : ''}`} href="/FanMemberPage">
                                Sócio Torcedor
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}