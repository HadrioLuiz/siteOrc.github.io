import CardVideos from "@/Components/CardVideos";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import InstagramCarousel from "@/Components/InstaFeed";
import MatchDate from "@/Components/MatchDate";
import Menu from "@/Components/Menu";
import TableChamp from "@/Components/TableChamp";

export default function Home() {
  return (
    <main className=" bg-[#D9D9D9] w-full h-full">
      <Header />
      <Menu />
      <div className="text-black text-center">
        <InstagramCarousel/>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex h-full w-full bg-[url('../Img/background.jpg')] bg-no-repeat bg-[length:1450px_2000px]">
          <MatchDate />
          <TableChamp />
        </div>
      </div>
      <div className="text-black text-center">
        <CardVideos />
      </div>
      <Footer />
    </main>
  );
}
    