"use client";
import CardBudaya from "@/components/CardBudaya";
import * as React from "react";
import { useRouter } from "next/navigation";

interface IProfilProps {}

const Profil: React.FunctionComponent<IProfilProps> = (props) => {
  const router = useRouter();
  return (
    <section className=" bg-white">
      <div className="flex flex-col relative bg-gradient-to-r from-[#ed6b1e]">
        <img
          className="w-full object-none md:object-cover h-[250px] md:h-[500px] bg-no-repeat  bg-center  md:bg-cover border-b opacity-20"
          src="https://lumina-wordpress-prod.s3.ap-southeast-1.amazonaws.com/2022/11/teknisi-KAI.jpg"
          alt=""
        />
        <div className=" absolute px-6 md:px-40 py-20 text-center  md:text-left text-white">
          <h1 className=" text-2xl md:text-4xl  align-middle   ">
            Nilai & Budaya Perusahaan
          </h1>
          <h1 className=" mt-4 text-3xl md:text-7xl  align-middle  font-bold">
            Kereta Commuter Indonesia
          </h1>
        </div>
      </div>
      <div className="flex justify-center my-11 space-x-4  md:space-x-10 items-center">
        <h2 className=" bg-[#2b3577] py-4  px-4 md:px-10 text-white font-bold rounded-xl cursor-pointer">
          Company Information
        </h2>
        <h2
          className=" bg-[#e7e9eb] py-4 px-4 md:px-10 text-[#2b3577] hover:text-white hover:bg-[#2b3577] font-bold rounded-xl  cursor-pointer"
          onClick={() => router.push("/teams")}
        >
          Teams
        </h2>
      </div>
      <div className=" mx-6 md:mx-40 my-20">
        <h1 className=" text-5xl font-semibold text-[#292570] border-b">
          Visi dan Misi{" "}
        </h1>
        <p className=" text-md md:text-xl mt-4">
          Kereta Commuter Indonesia memiliki tata nilai sebagai komitmen
          perusahaan untuk mewujudkan visi dan misinya berdasarkan standar
          global dan penerapan tata kelola perusahaan yang baik (Good Corporate
          Governance )
        </p>
      </div>
      <div className=" w-full my-10 md:my-20">
        <div className=" h-[1000px] mx-4 md:mx-40 bg-[#292570] text-white flex flex-col pt-8 md:pt-20 pl-6 md:pl-96 pr-6 md:pr-20  relative overflow-hidden rounded-xl">
          <div className=" z-40">
            <h1 className=" font-semibold text-5xl">VISI</h1>
            <h2 className=" mt-5">
              Menjadi solusi ekosistem transportasi urban terbaik di Indonesia
            </h2>
            <h1 className="font-semibold text-5xl mt-10">MISI</h1>
            <h2 className=" mt-5">
              Menyediakan transportasi urban yang mengutamakan keselamatan,
              keamanan dan efisiensi dengan berbasis digital serta berwawasan
              lingkungan.
            </h2>
            <h2 className=" mt-5">
              Mengembangkan solusi transportasi urban yang terintegrasi melalui
              investasi sumber daya manusia, teknologi dan operasi serta
              pemeliharaan.
            </h2>
            <h2 className=" mt-5">
              Memajukan dan menginisiasi pengembangan transportasi urban untuk
              Indonesia melalui kolaborasi dengan pemangku kepentingan.
            </h2>
            <h2 className=" mt-5">
              Mengembangkan human capital yang mempunyai kompetensi, daya saing
              unggul, dan dapat menyesuaikan terhadap perubahan.
            </h2>
          </div>
          <img
            className="w-[100vw] md:w-[50vw] absolute -bottom-10 -left-16 md:-bottom-20 md:-left-52"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/CC_203_07.png/1200px-CC_203_07.png?20200713030934"
            alt=""
          />
        </div>
        <div className=" mx-6 md:mx-40 mt-32 text-right">
          <h1 className=" text-5xl font-semibold text-[#292570] border-b">
            Nilai & Budaya Perusahaan
          </h1>
        </div>
        <div className=" my-8 flex w-full h-[350px] bg-gradient-to-r from-[#0f939e] to-[#292570] overflow-hidden relative ">
          <img
            className="w-full object-cover opacity-20 "
            src="https://static.cdntap.com/tap-assets-prod/wp-content/uploads/sites/24/2021/10/syarat-menjadi-pramugari-kereta-api-lead.jpg"
            alt=""
          />
          <div className="  absolute w-[400px] md:w-[700px] h-[350px] text-white flex items-center justify-center  ">
            <h2 className=" font-semibold text-xl md:text-3xl px-4 py-4 ">
              Dalam rangka transformasi budaya untuk menyelaraskan sinergi core
              value BUMN yang sama. Maka seluruh pegawai BUMN wajib
              mengimplementasikan Core Values “AKHLAK”
            </h2>
          </div>
        </div>

        <div className=" mx-4">
          <div className=" w-full mx-0 md:mx-auto grid grid-cols-6 md:grid-cols-1 md:gap-5  py-5 overflow-x-auto">
            <div className="flex flex-row md:flex-col mx-auto gap-10 md:gap-6 text-[#292570] overflow-x-auto ">
              <CardBudaya
                gambar="https://commuterline.id/app/sam/assets/culture_value/0ca157c75268e5e391bd9156bcd45cfc.svg"
                huruf="AMANAH"
                subjudul="Memegang Teguh Amanah yang Diberikan"
                list1="Memenuhi Janji dan Komitmen."
                list2="Bertanggung Jawab atas Tugas, Keputusan dan Tindakan yang dilakukan."
                list3="Berpegang Teguh kepada Nilai Moral dan Etika."
              />
              <CardBudaya
                gambar="https://commuterline.id/app/sam/assets/culture_value/10ff551e099a87367164f2322f2bd888.svg"
                huruf="KOMPETEN"
                subjudul="Berdedikasi dan Mengutamakan Kepentingan Bangsa dan Negara"
                list1="Menjaga Nama Baik Sesama Pekerja, Direksi, Dewan Komisaris, Pemegang Saham dan Negara."
                list2="Rela Berkorban untuk Mencapai Tujuan yang Lebih Besar."
                list3="Patuh Kepada Pimpinan Sepanjang Tidak Bertentangan dengan Hukum dan Etika."
              />
              <CardBudaya
                gambar="https://commuterline.id/app/sam/assets/culture_value/94d66c9a2653de25d5e0d233ace2ede8.svg"
                huruf="HARMONIS"
                subjudul="Saling Peduli dan Menghargai Perbedaan"
                list1="Menghargai Setiap Orang Apapun Latar Belakangnya."
                list2="Suka Menolong Orang Lain."
                list3="Membangun Lingkungan Kerja yang Kondusif."
              />
              <CardBudaya
                gambar="https://commuterline.id/app/sam/assets/culture_value/44718fc8700b103ceeb9ebf34ff26f89.svg"
                huruf="LOYAL"
                subjudul="Berdedikasi dan Mengutamakan Kepentingan Bangsa dan Negara"
                list1="Menjaga Nama Baik Sesama Pekerja, Direksi, Dewan Komisaris, Pemegang Saham dan Negara."
                list2="Rela Berkorban untuk Mencapai Tujuan yang Lebih Besar."
                list3="Patuh Kepada Pimpinan Sepanjang Tidak Bertentangan dengan Hukum dan Etika."
              />
              <CardBudaya
                gambar="https://commuterline.id/app/sam/assets/culture_value/9d5c514c359db9a68651b08699ac20d3.svg"
                huruf="
            ADAPTIF"
                subjudul="Terus Berinovasi dan Antusias Dalam Menggerakan ataupun Menghadapi Perubahan"
                list1="Cepat Menyesuaikan Diri Untuk Menjadi Lebih Baik."
                list2="Terus Menerus Melakukan Perbaikan Mengikuti Perkembangan Teknologi."
                list3="Bertindak Proaktif."
              />
              <CardBudaya
                gambar="https://commuterline.id/app/sam/assets/culture_value/cde5d4cf360953fb0b5be2ff35c57fcb.svg"
                huruf="KOLABORATIF"
                subjudul="Membangun Kerjasama yang Sinergis"
                list1="Memberi Kesempatan Kepada Berbagai Pihak Untuk Berkontribusi."
                list2="Terbuka Dalam Bekerjasama Untuk Menghasilkan Nilai Tambah."
                list3="Menggerakan Pemanfaatan Berbagai Sumber Daya untuk Tujuan Bersama"
              />
            </div>
          </div>
        </div>
        <div className=" mx-6 md:mx-40 mt-32 ">
          <h1 className=" text-5xl font-semibold text-[#292570] border-b">
            Sejarah
          </h1>
        </div>
        <img
          className=" my-5 hidden md:block w-full object-cover"
          src="/kereta.png"
          alt=""
        />
        <div className="  ">
          <img
            className="w-full h-[600px]  mt-5 md:hidden object-cover "
            src="/kereta8.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Profil;
