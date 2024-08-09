import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({
    weight: '800',
    style: 'normal',
    subsets: ['latin'],
    display: 'swap'
})

export default function CardVideos() {
    return (
        <div className="flex bg-[#2C2F73] justify-cente w-full h-96">
            <div className=" text-center w-full">
                <iframe
                    className="ml-40 mt-10 shadow-lg rounded-xl border-8 border-blue-900"
                    width="500"
                    height="300"
                    src="https://www.youtube.com/embed/dE_BzN2S1NM"
                    title="Himno del Oratório Recreativo Clube (Hino do Oratório Recreativo Clube)"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
            </div>
            <div className=" pt-14 text-center text-4xl text-white w-full">
                <h1 className={open_sans.className}> Canal do clube no Youtube</h1>
                <div className="text-left text-xl pl-40 pt-3">
                    <h3 className={open_sans.className}> Serie Rumo a Elite</h3>
                    <h3 className={open_sans.className}> Treinos</h3>
                    <h3 className={open_sans.className}> Entrevistas</h3>
                    <h3 className={open_sans.className}> Jogos ao vivo</h3>
                </div>
            </div>
        </div>
    )
};