import * as React from "react";

interface IProfilProps {}

const Profil: React.FunctionComponent<IProfilProps> = (props) => {
  return (
    <section className=" bg-white">
      <div className="flex justify-center my-11 space-x-4  md:space-x-10 items-center">
        <h2 className=" bg-[#2b3577] py-4  px-4 md:px-10 text-white font-bold rounded-xl cursor-pointer">
          Company Information
        </h2>
        <h2
          className=" bg-[#e7e9eb] py-4 px-4 md:px-10 text-[#2b3577] hover:text-white hover:bg-[#2b3577] font-bold rounded-xl  cursor-pointer"
          //   onClick={() => router.push("/iklan")}
        >
          Space Iklan
        </h2>
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
        <div className=" w-full my-10 md:my-20 z-50 hidden md:block">
          <img
            src="https://www.bumn.go.id/assets/frontend/images/content/akhlak_main.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Profil;
