import Header from "@/Components/Header";
import Menu from "@/Components/Menu";
import Footer from "@/Components/Footer";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({
    weight:'800',
    style:'normal',
    subsets:['latin'],
    display: 'swap'
})

export default function Soccer() {
    return(
        <main className=" bg-[#1c71a6]">
            <Header />
            <Menu />
            <div className="text-center pt-12 text-4xl">
                <h1 className={open_sans.className}>Escolha o melhor plano pra você</h1>
            </div>
            <div className="flex justify-center items-center">
                <div className="border-4 rounded-[10px] shadow-lg bg-white w-60 h-64 m-12">
                    <div className="bg-gray-400 w-44 h-10 ml-7 rounded-[20px]">
                        <h1 className=" text-center pt-2 mt-5">Orca Suprema</h1>
                    </div>
                    <div className="text-center mt-3">
                        <ul>
                            <li>Beneficios</li>
                            <li>Beneficios</li>
                            <li>Beneficios</li>
                        </ul>
                    </div>
                    <div className=" ml-7 bg-gray-500 rounded-[20px] mt-[90px] w-44 h-8 pt-1">
                        <h1 className="text-center">Valor</h1>
                    </div>
                    <div className="ml-7 bg-gray-500 rounded-[20px] mt-[10px] w-44 h-8 pt-1">
                        <h1 className="text-center">Assinar</h1>
                    </div>
                </div>
                <div className="border-4 rounded-[10px] shadow-lg bg-white w-60 h-64 m-12">
                    <div className="bg-gray-400 w-44 h-10 ml-7 rounded-[20px]">
                        <h1 className=" text-center pt-2 mt-5">Orca Campeã</h1>
                    </div>
                    <div className="text-center mt-3">
                        <ul>
                            <li>Beneficios</li>
                            <li>Beneficios</li>
                            <li>Beneficios</li>
                        </ul>
                    </div>
                    <div className=" ml-7 bg-gray-500 rounded-[20px] mt-[90px] w-44 h-8 pt-1">
                        <h1 className="text-center">Valor</h1>
                    </div>
                    <div className="ml-7 bg-gray-500 rounded-[20px] mt-[10px] w-44 h-8 pt-1">
                        <h1 className="text-center">Assinar</h1>
                    </div>
                </div>
                <div className="border-4 rounded-[10px] shadow-lg bg-white w-60 h-64 m-12">
                    <div className="bg-gray-400 w-44 h-10 ml-7 rounded-[20px]">
                        <h1 className=" text-center pt-2 mt-5">Orca Leal</h1>
                    </div>
                    <div className="text-center mt-3">
                        <ul>
                            <li>Beneficios</li>
                            <li>Beneficios</li>
                            <li>Beneficios</li>
                        </ul>
                    </div>
                    <div className=" ml-7 bg-gray-500 rounded-[20px] mt-[90px] w-44 h-8 pt-1">
                        <h1 className="text-center">Valor</h1>
                    </div>
                    <div className="ml-7 bg-gray-500 rounded-[20px] mt-[10px] w-44 h-8 pt-1">
                        <h1 className="text-center">Assinar</h1>
                    </div>
                </div>
                <div className="border-4 rounded-[10px] shadow-lg bg-white w-60 h-64 m-12">
                    <div className="bg-gray-400 w-44 h-10 ml-7 rounded-[20px]">
                        <h1 className=" text-center pt-2 mt-5">Orca do Brasil</h1>
                    </div>
                    <div className="text-center mt-3">
                        <ul>
                            <li>Beneficios</li>
                            <li>Beneficios</li>
                            <li>Beneficios</li>
                        </ul>
                    </div>
                    <div className=" ml-7 bg-gray-500 rounded-[20px] mt-[90px] w-44 h-8 pt-1">
                        <h1 className="text-center">Valor</h1>
                    </div>
                    <div className="ml-7 bg-gray-500 rounded-[20px] mt-[10px] w-44 h-8 pt-1">
                        <h1 className="text-center">Assinar</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}