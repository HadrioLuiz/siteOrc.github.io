"use client"

import { Open_Sans } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const open_sans = Open_Sans({
    weight:'600',
    style:'normal',
    subsets:['latin'],
    display: 'swap'
})

export default function Menu() {
    return (
        <div className={open_sans.className}>
            <nav className="w-full h-10 bg-[#141759]">
                <ul className="flex flex-wrap justify-end text-white align-middle pt-2 items-end space-x-3 mr-[297px]">
                    <li>
                        <Link className={`link ${usePathname === '/SoccerPage' ? 'active' : ''}`} href="/SoccerPage">
                            Futebol
                        </Link>
                    </li>
                    <li>
                        <Link className={`link ${usePathname === '/TeamPage' ? 'active' : ''}`} href="/TeamPage">
                            Elenco
                        </Link>
                    </li>
                    <li>
                        <Link className={`link ${usePathname === '/StorePage' ? 'active' : ''}`} href="/StorePage">
                            Loja
                        </Link>
                    </li>
                    <li>
                        <Link className={`link ${usePathname === '/TrophyPage' ? 'active' : ''}`} href="/TrophyPage">
                            Troféus
                        </Link>
                    </li>
                    <li>
                        <Link className={`link ${usePathname === '/ContactPage' ? 'active' : ''}`} href="/ContactPage">
                            Contato
                        </Link>
                    </li>
                    <li>
                        <Link className={`link ${usePathname === '/FanMemberPage' ? 'active' : ''}`} href="/FanMemberPage">
                            Sócio Torcedor
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}