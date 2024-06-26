"use client";
import Card from "@/components/Card";
import { useRouter } from "next/navigation";
import { FaTrainSubway } from "react-icons/fa6";
import Testimoni from "@/components/Testimoni";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { getBlogPosts } from "@/utils/contentful";
import { useState, useEffect } from "react";
import News from "@/components/CardNews";
export default function Home() {
  const router = useRouter();
  const [blogData, setBlogData] = useState<any>(null);
  const [blogData1, setBlogData1] = useState<any>(null);
  const [blogData2, setBlogData2] = useState<any>(null);
  const [blogData3, setBlogData3] = useState<any>(null);
  const [blogData4, setBlogData4] = useState<any>(null);
  useEffect(() => {
    getOtherArticle();
    getOtherArticle1();
    getOtherArticle2();
    getOtherArticle3();
    getOtherArticle4();
  }, []);
  const getOtherArticle = async () => {
    try {
      const response = await getBlogPosts();
      console.log("mengambil data dari:", response);
      console.log("data yang diambil", response[0]);
      setBlogData(response[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const getOtherArticle1 = async () => {
    try {
      const response = await getBlogPosts();
      console.log("mengambil data dari:", response);
      setBlogData1(response[1]);
    } catch (error) {
      console.log(error);
    }
  };
  const getOtherArticle2 = async () => {
    try {
      const response = await getBlogPosts();
      console.log("mengambil data dari:", response);
      setBlogData2(response[2]);
    } catch (error) {
      console.log(error);
    }
  };
  const getOtherArticle3 = async () => {
    try {
      const response = await getBlogPosts();
      console.log("mengambil data dari:", response);
      setBlogData3(response[3]);
    } catch (error) {
      console.log(error);
    }
  };
  const getOtherArticle4 = async () => {
    try {
      const response = await getBlogPosts();
      console.log("mengambil data dari:", response);
      setBlogData4(response[4]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="text-[#292570]">
      <section>
        <Hero />
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
              className="h-[50vh] object-cover md:w-auto md:h-auto"
              src="https://commuterline.id/app/sam/assets/home/9bd9b1f5f5a96532c8d7b88267259d25.png"
              alt="c-acces"
            />
            <div className="flex justify-end mb-4 ">
              <img
                onClick={() =>
                  (window.location.href =
                    "https://play.google.com/store/apps/details?id=com.kci.access&hl=en_US")
                }
                className=" w-32 md:w-auto object-contain justify-center items-center text-center cursor-pointer"
                src="https://commuterline.id/app/sam/assets/images/ac70ce07ac0616502090352789b6f44b.png"
                alt="google-play"
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
              gambar="https://commuterline.id/app/sam/assets/home/afe01f4b0ddf5b41902c8a1cf08f38e3.svg"
              alt="lacak kereta kapan aja"
              untung="Lacak kereta kapan aja"
            />
            <Card
              gambar="https://commuterline.id/app/sam/assets/home/43fdab8150da38d7cef5dd3f3cf2ddec.svg"
              alt="mudah tentukan jadwal"
              untung="Mudah tentukan jadwal"
            />
            <Card
              gambar="https://commuterline.id/app/sam/assets/home/a53a032aab2c51da9d7b6e6c984ada72.svg"
              alt="info perjalanan kereta api lengkap"
              untung="Fitur perjalanan lengkap"
            />
          </div>
        </div>
        {/* LAYANAN GAMBARAN BESAR AKHIR */}
        <div>
          <div className="  py-5 flex flex-col text-center items-center justify-center  mt-10 mx-4 md:mx-40">
            <h1 className="text-3xl font-semibold">
              Lebih mudah pakai C-Acces
            </h1>
            <h1 className=" mt-6  text-lg text-[#ed6b1e] font-medium">
              Unduh sekarang di Play Store
            </h1>
          </div>
        </div>
        <div className="  py-5">
          <div className="mx-2 md:mx-20 ">
            <div className=" scrollbar-hide   mx-4 md:mx-auto mb-10 flex  flex-row  gap-4 gap-y-10 overflow-x-auto">
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
        <div className="  py-5 flex flex-col text-center items-center justify-center  mt-3 mx-4 md:mx-40">
          <h1 className="text-3xl font-semibold">Commuter Line News</h1>
        </div>
        <div className="  py-5  ">
          <div className="mx-2 md:mx-20  ">
            <div className="  mx-4 md:mx-auto mb-10 flex   gap-4 gap-x-8 overflow-x-auto ">
              {/* NEWS AWAL */}
              <News
                url={`${blogData?.image.fields.file.url}`}
                judul={`${blogData?.title}`}
                author={`${blogData?.author}`}
                dibuat={`${blogData?.createdAt}`}
              />
              <News
                url={`${blogData1?.image.fields.file.url}`}
                judul={`${blogData1?.title}`}
                author={`${blogData1?.author}`}
                dibuat={`${blogData1?.createdAt}`}
              />
              <News
                url={`${blogData2?.image.fields.file.url}`}
                judul={`${blogData2?.title}`}
                author={`${blogData2?.author}`}
                dibuat={`${blogData2?.createdAt}`}
              />
              <News
                url={`${blogData3?.image.fields.file.url}`}
                judul={`${blogData3?.title}`}
                author={`${blogData3?.author}`}
                dibuat={`${blogData3?.createdAt}`}
              />
              <News
                url={`${blogData4?.image.fields.file.url}`}
                judul={`${blogData4?.title}`}
                author={`${blogData4?.author}`}
                dibuat={`${blogData4?.createdAt}`}
              />
            </div>
          </div>
        </div>
        {/* NEWS AKHIR */}

        {/* <Footer /> */}
      </section>
    </main>
  );
}
