import Menu from "@/Components/Menu";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Image from "next/image";
import Foto from "../../Img/FotoHistoria.jpeg";


export default function Soccer() {
    return (
        <main>
            <Header />
            <Menu />
            <div className="grid grid-cols-2 gap-1 bg-white shadow-2xl border-4 w-[1000px] ml-56 mt-10 p-10 pt-16">
                <div>
                    <h1>
                        O Oratório Recreativo Clube, conhecido carinhosamente como Orca Demolidora,
                        é uma equipe que se destaca não apenas pela sua paixão pelo futebol,
                        mas também pela sua determinação em crescer e se estabelecer como uma força no esporte.
                        A motivação para esse crescimento vem de várias fontes, todas profundamente enraizadas na comunidade e na história do clube.
                    </h1>
                    <h2>
                        História e Tradição
                        Desde sua fundação, o Oratório sempre teve como objetivo promover o futebol e outras atividades recreativas. A história do clube é marcada por momentos de superação e conquistas, que servem como inspiração constante para jogadores, torcedores e dirigentes. A tradição de lutar com garra e determinação é um legado passado de geração em geração, motivando todos os envolvidos a buscarem sempre o melhor.
                        Comunidade e Apoio
                        A força do Oratório vem, em grande parte, do apoio da sua comunidade. Os torcedores são a alma do clube, proporcionando uma base sólida e apaixonada que motiva o time a se esforçar ao máximo em cada partida. O envolvimento da comunidade não se limita aos dias de jogo; há um apoio contínuo nas atividades do clube, nas categorias de base e nos projetos sociais, que fortalecem o vínculo entre o time e seus fãs.
                        Ambição e Futuro
                        O Oratório não se contenta apenas com as conquistas do passado. A visão do clube é ambiciosa, mirando sempre mais alto, com planos para melhorias estruturais, parcerias estratégicas e um aumento na visibilidade no cenário nacional. Essa ambição é alimentada por um desejo intrínseco de colocar o Oratório no mapa do futebol brasileiro, destacando-se não apenas como um time competitivo, mas também como um modelo de gestão e desenvolvimento esportivo.
                        Conclusão
                        O Oratório Recreativo Clube é um exemplo de como a paixão pelo futebol, o apoio da comunidade e a determinação de crescer podem impulsionar um time a novos patamares. A motivação do clube para crescer no futebol é uma combinação de respeito pela sua história, compromisso com a comunidade e uma visão ambiciosa para o futuro. Com esses pilares, o Oratório continua sua jornada, inspirando e conquistando cada vez mais espaço no coração dos amantes do esporte.
                    </h2>
                </div>
                <div className="pl-5">
                    <Image
                        src={Foto}
                        width={1000}
                        height={1000}
                        alt="Old Picture"
                    />
                </div>
            </div>
            <Footer />
        </main>
    )
}