import Image from "next/image";
import Logo from "../Img/teamLogo.png";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({
    weight: '800',
    style: 'normal',
    subsets: ['latin'],
    display: 'swap'
}
)

export default function MatchDate() {
    return (
        <div className="h-[350px] w-full ml-52 mt-10 justify-center align-middle items-center">
            <div className=" w-[500px] h-72 text-xl text-black text-left">
                <h1 className={open_sans.className}>Campeonato XXXXX</h1>
                <p className={open_sans.className}>Proxima Partida</p>
                <div className=" flex">
                    <div className="ml-[69px] mt-2">
                        <Image
                            src={Logo}
                            width={95}
                            height={95}
                            alt="Logo"
                        />
                        <h2 className={open_sans.className}>Nome</h2>
                    </div>
                    <div className=" text-5xl ml-14 mt-10">
                        <h1 className={open_sans.className}>VS</h1>
                    </div>
                    <div className=" ml-16 mt-2">
                        <Image
                            src={Logo}
                            width={95}
                            height={95}
                            alt="Logo"
                        />
                        <h2 className={open_sans.className}>Nome</h2>
                    </div>
                </div>
                <div className=" text-lg text-black text-center">
                    <h5 className={open_sans.className}>Local:Zerao</h5>
                    <h5 className={open_sans.className}>00/00 00:00</h5>
                </div>
            </div>
        </div>
    )
};