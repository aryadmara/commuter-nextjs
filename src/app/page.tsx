import Image from "next/image";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import { FaTrainSubway } from "react-icons/fa6";
import Testimoni from "@/components/Testimoni";
import Footer from "@/components/Footer";
import Video from "@/components/Video";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marque";
export default function Home() {
  return (
    <main className="text-[#292570]">
      <section>
        {/* <Navbar /> */}
        <Hero />
        {/* <Video /> */}
        {/* OVERVIEW PERUSAHAAN AWAL */}
        <div className="w-full">
          <div className="  mx-6 md:mx-40 my-20 ">
            <div className=" flex flex-col md:flex-row">
              <div id="kiri" className="flex-1 px-5 text-center">
                <h1 className="text-4xl mb-8 font-semibold">
                  KAI Commuter Line
                </h1>
                <p className="">
                  KAI Commuter Line telah dipercaya untuk melakukan usaha di
                  bidang transportasi pada umumnya oleh banyak masyarakat,
                  khususnya dibidang perkeretaapian dengan menyediakan barang
                  atau jasa yang bermutu tinggi dan berdaya saing kuat yang
                  meliputi usaha pengangkutan orang dengan kereta api dan usaha
                  non angkutan penumpang dengan menerapkan prinsip-prinsip
                  Perseroan Terbatas.
                </p>
              </div>
              <div id="kanan" className="flex-1 px-5 mt-7 md:mt-0">
                <h3 className="text-xl md:text-2xl text-center font-semibold leading-7">
                  KAI Commuter terus berupaya menghadirkan layanan transportasi
                  yang aman dan nyaman untuk masyrakat. Setiap harinya, Commuter
                  Line digunakan oleh sekitar <br />
                  <span className="text-4xl font-bold text-[#ed6b1e]">
                    950.000
                  </span>{" "}
                  <br />
                  orang per hari
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* OVERVIEW PERUSAHAAN AKHIR */}
        {/* SERVICESS SINGKAT AWAL */}
        <div id="services" className=" bg-[url('')]">
          <div className="mx-6 md:mx-40   pt-10 font-semibold ">
            <h3 className="text-[#ed6b1e]">Unduh Aplikasi</h3>
            <h1 className=" text-3xl md:text-5xl pt-4">
              C-Access di genggaman,
              <br /> perjalanan lebih mudah dan nyaman!
            </h1>
            <img
              className="h-[50vh] w-screen md:w-auto md:h-auto"
              src="https://commuterline.id/app/sam/assets/home/9bd9b1f5f5a96532c8d7b88267259d25.png"
              alt=""
            />
            <div className="flex justify-end mb-4">
              <img
                className=" justify-center items-center text-center"
                src="https://commuterline.id/app/sam/assets/images/ac70ce07ac0616502090352789b6f44b.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* SERVICESS SINGKAT AKHIR */}
        {/* LAYANAN GAMBARAN BESAR AWAL */}
        <div className="flex flex-col bg-[#e7e9eb]">
          <div className="text-center mx-6 md:mx-60 my-12 md:my-20 space-y-10 ">
            <h2 className="text-4xl font-semibold ">
              Sebuah akses layanan informasi Digital 24/7 seputar Commuterline
              untuk kamu!
            </h2>
            <h4 className=" text-lg mx-6 md:mx-40">
              C-Access dalam genggaman, perjalanan lebih mudah, aman dan nyaman.
            </h4>
          </div>
          <div
            id="container"
            className=" mx-auto mb-20 grid grid-cols-1 md:grid-cols-3 gap-4 "
          >
            <Card
              gambar={
                <img src="https://commuterline.id/app/sam/assets/home/afe01f4b0ddf5b41902c8a1cf08f38e3.svg" />
              }
              untung="Lacak kereta kapan aja"
            />
            <Card
              gambar={
                <img src="https://commuterline.id/app/sam/assets/home/43fdab8150da38d7cef5dd3f3cf2ddec.svg" />
              }
              untung="Mudah tentukan jadwal"
            />
            <Card
              gambar={
                <img src="https://commuterline.id/app/sam/assets/home/a53a032aab2c51da9d7b6e6c984ada72.svg" />
              }
              untung="Fitur perjalanan lengkap"
            />
          </div>
        </div>
        {/* LAYANAN GAMBARAN BESAR AKHIR */}
        <div>
          <div className="py-5 flex flex-col text-center items-center justify-center  my-10 mx-4 md:mx-40">
            <h1 className="text-3xl font-semibold">
              Lebih mudah pakai C-Acces
            </h1>
            <h1 className=" text-lg text-[#ed6b1e] font-medium">
              Unduh sekarang di Play Store
            </h1>
          </div>
          <div className="  py-5">
            <div className="mx-2 md:mx-20 ">
              <div className="   mx-4 md:mx-auto mb-10 flex md:grid flex-row md:grid-cols-3 gap-4 gap-y-10 overflow-x-auto">
                {/* TERSTIMONIAL AWAL */}
                <Testimoni
                  gambar="https://i.pinimg.com/564x/df/31/8a/df318a910cd9179c46a147c916ebe1b8.jpg"
                  nama="IU"
                  kerja="Ibu rumah tangga"
                  testimoni={`"Sangat membantu untuk mengetahui jam kedatangan kereta dan memudahkan untuk mengetahui jumlah saldo kmt tanpa harus mengantri di loket".`}
                />
                <Testimoni
                  gambar="https://i.pinimg.com/564x/b9/6d/2d/b96d2d5c0706b380b173e2d20328cee0.jpg"
                  nama="Suzy"
                  kerja="Mahasiswa"
                  testimoni={`"Mantap! semakin memudahkan mobilitas para penggunanya".`}
                />
                <Testimoni
                  gambar="https://i.pinimg.com/564x/eb/f8/dc/ebf8dc9898ef6a51afa8ff35ed871d06.jpg"
                  nama="Yoon Jung"
                  kerja="Pedagang"
                  testimoni={`"Sangat bagus dan membantu memudahkan perjalanan kereta api jadi lebih praktis tidak perlu mengantri untuk pembayaran dan cek saldo di stasiun kereta api".`}
                />
                <Testimoni
                  gambar="https://i.pinimg.com/736x/f7/f9/b9/f7f9b95500424e103ef023318a81b871.jpg"
                  nama="Eun So"
                  kerja="Pegawai kantoran"
                  testimoni={`"Overall, the application appearance, promo, and features are okay and helpful.".`}
                />
                <Testimoni
                  gambar="https://i.pinimg.com/564x/05/05/14/050514c336106462dc58da7255e8da02.jpg"
                  nama="Min Ji"
                  kerja="Siswa SMA"
                  testimoni={`"After 2 months unused it due to higher fare compare to another company,finally I am back to use it after they adjust the fare to the previous one. Just suggestion, it would be good application".`}
                />
                <Testimoni
                  gambar="https://i.pinimg.com/564x/e4/f8/b2/e4f8b20a5c8dbec7737476e11f5af501.jpg"
                  nama="Soo He"
                  kerja="Mahasiswa"
                  testimoni={`"All in all this app is really great. I'm very happy that it even includes an emergency button (but I hope nobody has ever been in a position to use it). ".`}
                />
                {/* TERSTIMONIAL AKHIR */}
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </section>
    </main>
  );
}
