"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const ProfilePage: React.FC = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<any>(null);
  const [userData2, setUserData2] = useState<any>(null);
  const [userData3, setUserData3] = useState<any>(null);

  useEffect(() => {
    fetchUserData();
    fetchUserData1();
    fetchUserData2();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api");
      console.log("mengambil data dari :", response.data.results[0]);

      setUserData(response.data.results[0]);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  const fetchUserData1 = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api");
      console.log("mengambil data dari :", response.data.results[0]);

      setUserData2(response.data.results[0]);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  const fetchUserData2 = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api");
      console.log("mengambil data dari :", response.data.results[0]);

      setUserData3(response.data.results[0]);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <section className=" bg-white">
      <div className="flex flex-col relative bg-gradient-to-r from-[#292570] ">
        <img
          className="w-full object-none md:object-cover h-[250px] md:h-[500px] bg-no-repeat  bg-center  md:bg-cover border-b opacity-20"
          src="https://blog-cdn.kitalulus.com/blog/wp-content/uploads/2024/02/20100226/62cc3400191c33791c941a9d_gaji-masinis-kai.jpg"
          alt=""
        />
        <div className=" absolute px-6 md:px-40 py-6 md:py-20 text-center  md:text-left text-white">
          <h1 className=" mt-4 text-3xl md:text-7xl  align-middle  font-bold">
            Tim Kami
          </h1>
          <h1 className=" text-xl md:text-3xl  align-middle mt-5 md:mt-10">
            Kekuatan terbesar yang KCI miliki adalah para karyawan dengan
            keahlian maupun latar belakang yang inklusif, yang kami sebut dengan
            Insan KCI.
          </h1>
        </div>
      </div>
      <div className="flex justify-center my-11 space-x-4  md:space-x-10 items-center">
        <h2
          className=" bg-[#e7e9eb] py-4 px-4 md:px-10 text-[#2b3577] hover:text-white hover:bg-[#2b3577] font-bold rounded-xl  cursor-pointer"
          onClick={() => router.push("/profil")}
        >
          Company Information
        </h2>
        <h2 className=" bg-[#2b3577] py-4  px-4 md:px-10 text-white font-bold rounded-xl cursor-pointer">
          Teams
        </h2>
      </div>
      <div className=" mx-6 md:mx-40 mt-10 ">
        <h1 className=" text-5xl font-semibold text-[#292570] border-b">
          Pimpinan Perusahaan
        </h1>
        <h1 className=" text-3xl font-semibold mt-10">Board of Directors</h1>
      </div>

      <div className="flex flex-col items-center justify-center space-y-10 mb-10 ">
        {userData ? (
          <div className="flex flex-col md:flex-row bg-gradient-to-r from-[#ed6b1e] mx-4 md:mx-40 py-10 rounded-lg text-[#292570] mt-10">
            <img
              src={userData.picture.large}
              alt="Profile Picture"
              className="w-40 h-40 rounded-lg ml-10 flex justify-center "
            />

            <div className="px-8 md:px-20">
              <h1 className="text-2xl font-bold mt-4 mx-auto">{`${userData.name.first} ${userData.name.last}`}</h1>
              <h3 className=" font-semibold">Direktur Utama</h3>
              <p className=" mt-5">
                ‘Commander-in-Chief’ KCI ini dikenal sebagai leader yang
                membangun team berdasarkan strength-nya masing-masing. Karirnya
                dimulai dari Management Trainee, berkiprah di beberapa cabang
                dan divisi Kantor Pusat, hingga menjadi Kepala Kantor Wilayah I
              </p>
            </div>
          </div>
        ) : (
          <p>Loading..</p>
        )}
        {userData2 ? (
          <div className="flex flex-col md:flex-row bg-gradient-to-r from-[#ed6b1e] mx-4 md:mx-40 py-10 rounded-lg text-[#292570] mt-10 ">
            <img
              src={userData2.picture.large}
              alt="Profile Picture"
              className="w-40 h-40 rounded-lg ml-10"
            />
            <div className=" px-8 md:px-20">
              <h1 className="text-2xl font-bold mt-4">{`${userData2.name.first} ${userData2.name.last}`}</h1>
              <h3 className=" font-semibold">Direktur IT & Operasi</h3>
              <p className=" mt-5">
                {`${userData2.name.title}. ${userData2.name.first} merupakan sosok ‘life-long learner’ yang sangat
                  menikmati proses dalam mempelajari banyak hal, juga hal-hal baru.
                  Semasa kuliah, beliau pernah menjadi mahasiswa ITB jurusan Teknik
                  Fisika sekaligus mahasiswa UNPAD jurusan Ekonomi dalam waktu
                  bersamaan. Sejak bergabung di KCI pada tahun 1991 melalui program
                  MDP, ${userData2.name.title}. ${userData2.name.first} telah banyak berkontribusi dalam peningkatan
                  kualitas layanan dan kinerja di berbagai KCI Indonesia.`}
              </p>
            </div>
          </div>
        ) : (
          <p></p>
        )}
        {userData3 ? (
          <div className="flex flex-col md:flex-row bg-gradient-to-r from-[#ed6b1e] mx-4 md:mx-40 py-10 rounded-lg text-[#292570] mt-10">
            <img
              src={userData3.picture.large}
              alt="Profile Picture"
              className="w-40 h-40 rounded-lg ml-10"
            />
            <div className="px-8 md:px-20">
              <h1 className="text-2xl font-bold mt-4">{`${userData3.name.first} ${userData3.name.last}`}</h1>
              <h3 className=" font-semibold">Direktur Kepatuhan</h3>
              <p className=" mt-5">
                Pemimpin teknologi KCI Indonesia ini punya gaya kepemimpinan
                yang khas dan unik. Peraih Bachelor of Business dari Swinburne
                University of Technology, Melbourne-Australia ini mengaku senang
                bersosialisasi dengan banyak orang. Menurutnya, lewat kegiatan
                sosialisasi, beliau bisa mengobservasi macam-macam karakter
                manusia; yang mana hal ini sangat bermanfaat dalam praktek
                leadership saat membangun team dengan chemistry yang positif.
              </p>
            </div>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </section>
  );
};

export default ProfilePage;
