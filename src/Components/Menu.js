import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({
    weight:'600',
    style:'normal',
    subsets:['latin'],
    display: 'swap'
})

export default function Menu(){
    return (
        <div className={open_sans.className}>
            <nav className="w-full h-10 bg-[#141759]">
                <ul className="flex flex-wrap justify-end text-white align-middle pt-2 items-end space-x-3 mr-[297px]">
                    <li>Futebol </li>
                    <li>Elenco </li>
                    <li>Loja </li>
                    <li>Troféus </li>
                    <li>Contato </li>
                    <li>Sócio </li>
                </ul>
            </nav>
        </div>
    )
}