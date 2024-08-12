import Header from "@/Components/Header";
import Menu from "@/Components/Menu";
import Footer from "@/Components/Footer";
import Image from "next/image";

export default function Soccer() {
    return(
        <main className=" bg-[#1c71a6]">
            <Header />
            <Menu />
            <div className="text-center pt-12">
                <h1>Escolha o melhor plano pra você</h1>
            </div>
            <div className="flex justify-center items-center">
                <div className="border-4 rounded-[10px] shadow-lg bg-white w-60 h-64 m-12">
                    <h1 className=" text-center mt-5">Orca Suprema</h1>
                    <div className="text-center mt-3">
                        <ul>
                            <li>Beneficios</li>
                            <li>Beneficios</li>
                            <li>Beneficios</li>
                        </ul>
                    </div>
                </div>
                <div className="border-4 rounded-[10px] shadow-lg bg-white w-60 h-64 m-12">
                    <h1 className=" text-center mt-5">Orca Campeã</h1>
                    <div className="text-center mt-3">
                        <ul>
                            <li>Beneficios</li>
                            <li>Beneficios</li>
                            <li>Beneficios</li>
                        </ul>
                    </div>
                </div>
                <div className="border-4 rounded-[10px] shadow-lg bg-white w-60 h-64 m-12">
                    <h1 className=" text-center mt-5">Orca Leal</h1>
                    <div className="text-center mt-3">
                        <ul>
                            <li>Beneficios</li>
                            <li>Beneficios</li>
                            <li>Beneficios</li>
                        </ul>
                    </div>
                </div>
                <div className="border-4 rounded-[10px] shadow-lg bg-white w-60 h-64 m-12">
                    <h1 className=" text-center mt-5">Orca do Brasil</h1>
                    <div className="text-center mt-3">
                        <ul>
                            <li>Beneficios</li>
                            <li>Beneficios</li>
                            <li>Beneficios</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}