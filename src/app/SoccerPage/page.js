import MaleTeam from "../../Img/MaleTeam.jpeg";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Menu from "@/Components/Menu";
import { Open_Sans } from "next/font/google";
import Image from "next/image";

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
            <div className="text-left text-2xl mt-14 ml-40">
                <h1 className={open_sans.className}>Nosso Time</h1>
            </div>
            <div className="grid grid-cols-2 ml-20 mr-20 mt-[-30px] justify-center align-middle">
                <div>
                    <Image
                        src={MaleTeam}
                        alt="Time Masculino"
                        className=" m-20 h-[400px] w-[500px] shadow-xl rounded-[10px]"
                    />
                    <div className=" mt-[-160px] ml-24 text-[#f2e7e7] text-left text-2xl">
                        <h1 className={open_sans.className}>Profissional masculino</h1>
                    </div>
                </div>
                <div>
                    <Image
                        src={MaleTeam}
                        alt="Time Masculino"
                         className=" m-20 h-[400px] w-[500px] shadow-xl rounded-[10px]"
                    />
                    <div className="mt-[-160px] ml-24 text-[#f2e7e7] text-left text-2xl">
                        <h1 className={open_sans.className}>Profissional feminino</h1>
                    </div>
                </div>
                <div>
                    <Image
                        src={MaleTeam}
                        alt="Time Masculino"
                         className=" m-20 mt-36 h-[400px] w-[500px] shadow-xl rounded-[10px]"
                    />
                    <div className="mt-[-160px] ml-24 text-[#f2e7e7] text-left text-2xl">
                        <h1 className={open_sans.className}>Sub-20 masculino</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}