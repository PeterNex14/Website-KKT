"use client";

import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { GrStatusPlaceholderSmall } from "react-icons/gr";
import { FaCircleArrowRight } from "react-icons/fa6";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';

import './styles.css';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navigation';

// Dynamically import the MapComponent with no SSR
const MapComponent = dynamic(() => import('../components/MapComponents'), {
  ssr: false,
});


export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <div id='header' className="mt-[72px] w-full">
        <div className="bg-[url('/intro-bg.jpg')] h-auto sm:h-[100vh] w-full flex justify-center items-center flex-col bg-">
          <div className=" bg-red-600 w-full h-full flex justify-center items-center flex-col bg-opacity-25 p-4 md:p-8">
            <p className="text-white text-[20px] md:text-[80px] lg:text-[100px] font-semibold text-center">
              Desa Passo
            </p>
            <p className="text-white w-[90%] md:w-[80%] text-center mb-4 text-[12px] md:text-[20px] lg:text-[25px]">
              Passo adalah sebuah desa di kecamatan Kakas Barat, Kabupaten Minahasa, Sulawesi utara, indonesia. Desa Passo adalah desa tertua yang ada di Minahasa. Desa ini didirikan pada tahun 1839.
            </p>
          </div>
        </div>

        <div id="sejarah_desa" className=" h-[40px] md:h-[80px]"></div>
        <div className="px-4 md:px-[50px] lg:px-[100px] flex flex-col">
          <p className="text-[32px] md:text-[48px] lg:text-[60px] font-semibold mb-[16px] md:mb-[24px]">Sejarah Desa</p>
          <p className="mb-[14px] text-[14px] md:text-[16px] lg:text-[18px]">Passo adalah sebuah desa indah di tepi Danau Tondano, Kecamatan Kakas Barat, Kabupaten Minahasa, Sulawesi Utara. Kakas Barat merupakan pemekaran dari Kecamatan Kakas. Passo mungkin dulunya bagian dari distrik Kakas dan dikenal karena banyaknya sumber mata air panas, yang dalam bahasa Minahasa disebut "Passo" (Panas).</p>
          <p className="mb-[14px] text-[14px] md:text-[16px] lg:text-[18px]">Selain kekayaan alam, Passo memiliki situs budaya, cerita rakyat, dan timbunan sampah kerang dari zaman prasejarah. Pada 1974, tim peneliti dari Pusat Penelitian Purbakala Indonesia dan Universitas Nasional Australia menemukan sampah kerang dan tulang belulang hewan purba berusia 7,000 tahun, serta perkakas dapur dan bekas arang dari zaman yang sama.</p>
          <p className="mb-[14px] text-[14px] md:text-[16px] lg:text-[18px]">Budayawan Minahasa, Rinto Tarore, meyakini bahwa Passo terbentuk sebagai pemukiman setelah perang Tondano, dibuktikan oleh kuburan tua seperti milik Daniel Supit (1768–1857), mantan hukum tua Rurukan yang pindah ke Passo pasca perang Tondano.</p>
          <p className="mb-[14px] text-[14px] md:text-[16px] lg:text-[18px]">Wanua Passo terdiri dari 9 Jaga (dusun/lingkungan). Seperti wanua lainnya di Minahasa, Passo dipimpin oleh seorang Hukum Tua yang dipilih langsung oleh masyarakat secara demokratis. Setelah terpilih, Hukum Tua menunjuk Sekretaris Desa (Sekdes) dan staf yang akan bertugas selama masa jabatannya.</p>
          <p className="mb-[24px] text-[14px] md:text-[16px] lg:text-[18px]">Pemimpin Jaga, yaitu Pala (Kepala Jaga) dan Meweteng (Wakil Kepala Jaga), dulunya dipilih oleh Hukum Tua, namun sekarang mereka dipilih langsung oleh warga di lingkungan masing-masing sesuai peraturan baru.</p>

          <div className="mb-4 flex flex-col md:flex-row justify-between gap-[24px] md:gap-[24px] lg:gap-[48px]">
            <div className="flex flex-col w-full">
              <img src="/sejarah_desa.jpeg" alt="" className="h-[250px] md:h-[300px] lg:h-[350px] rounded-2xl object-cover" />
              <p className="text-[14px] md:text-[16px] lg:text-[18px]">Periuk Tanah Liat. Sebuah jejak peninggalan budaya Austronesia di tanah Minahasa. Periuk dengan ukuran besar biasanya digunakan sebagai tempat menyimpan tulang belulang dari manusia yang meninggal.</p>
            </div>
            <div className="flex flex-col w-full">
              <img src="/sejarah_desa_2.jpeg" alt="" className="h-[250px] md:h-[300px] lg:h-[350px] rounded-2xl object-cover" />
              <p className="text-[14px] md:text-[16px] lg:text-[18px]">Tim Penggali Situs Purbakala do lokasi Gereja GMIM Passo oleh Ir. Peter Bell Wood dari Universitas Nasional Australidan A.R. Sugondo.</p>
            </div>
            <div className="flex flex-col w-full">
              <img src="/sejarah_desa_1.jpeg" alt="" className="h-[250px] md:h-[300px] lg:h-[350px] rounded-2xl object-cover" />
              <p className="text-[14px] md:text-[16px] lg:text-[18px]">Kerangka manusia purba yang di temukan di Situs Purbakala “Bukit Kerang Passo” (Lokasinya di gereja GMIM Immanuel Passo). Saat ini kerangka tersebut ada di museum Arkeolog Ranomu’ut Manado.</p>
            </div>
          </div>
          <div className='h-[40px]'></div>
          <p className='text-[30px] font-semibold'>Pemerintahan di Desa Passo</p>
          <p>Wanua Passo saat ini terdiri dari 9 Jaga (dusun/Lingkungan).
            Seperti wanua lainnya di Minahasa, wanua Passo pun dipimpin oleh seorang Hukum Tua yang dipilih langsung oleh masyarakat secara demokratis.
            Setelah terpilih maka Hukum Tua akan memilih Sekretaris Desa (Sekdes) dan orang-orang yang akan bertugas selama kepemimpinannya.</p>
          <p>Pala (Kepala Jaga) dan Meweteng (Wakil Kepala Jaga) adalah pemimpin di dusun/Jaga. Mereka dulunya dipilih juga oleh HukumTua, namun sejak ada peraturan baru, maka mereka dipilih langsung oleh warga di lingkungan masing-masing.
            Ini adalah nama-nama mereka yang pernah bertugas sebagai Hukum Tua di Passo:</p>

          <div className='mt-5 w-full flex flex-row justify-between'>
            <ul>
              <li>Lukas Sanger </li>
              <li>Hendrik Sanger</li>
              <li>Wilem ingkiriwang</li>
              <li>Ferdinan Ingkiriwang</li>
              <li>Eduard Ingkiriwang</li>
              <li>Manuel Ingkiriwang</li>
              <li>Johanis Kumendong</li>
            </ul>
            <ul>
              <li>Emil Sumayku</li>
              <li>Paulus Sanger</li>
              <li>Eskie Tumbelaka</li>
              <li>Alex Hendrik Sanger</li>
              <li>Wem Kaeng</li>
              <li>Semuel Sanger</li>
              <li>Attu Sanger</li>
            </ul>
            <ul>
              <li>Semuel Sanger (Terpilih Kembali)</li>
              <li>Jhoachim Sanger</li>
              <li>Wem Tumbelaka</li>
              <li>Frits Sumayku</li>
              <li>Harmen Kumaseh</li>
              <li>Charles taniowas</li>
              <li>Jhoni supit</li>
            </ul>
            <ul>
              <li>Adeline Walangitan-Supit </li>
              <li>Stery Livia Aseng </li>
              <li>Arnold Tamboto</li>
              <li>Jhoni Wehantouw</li>
              <li>Nelfin mamentu</li>
            </ul>
          </div>


        </div>

        <div id="potensi_desa" className="h-[80px]"></div>
        <div className="px-4 md:px-[50px] lg:px-[100px] flex flex-col md:flex-row">
          <p className="w-full font-semibold text-[32px] md:text-[48px] lg:text-[60px] leading-[40px] md:leading-[55px] lg:leading-[70px] mb-4 md:mb-0">
            Potensi <br />Desa
          </p>
          <div className="w-full">
            <p className="text-[14px] md:text-[16px] lg:text-[18px]">
              Desa Passo, seluas 351 hektare, memiliki potensi pemandian air panas, Danau Tondano, dan sektor pertanian sebagai sumber utama mata pencaharian. Pengelolaan yang baik di ketiga sektor ini sangat penting untuk kesejahteraan masyarakat, dengan peningkatan tata kelola lahan, fasilitas pemandian air panas, dan pelestarian Danau Tondano yang dapat meningkatkan ekonomi dan kualitas hidup penduduk.
            </p>
          </div>
        </div>

        <div className="h-[80px]"></div>
        <div className="px-4 md:px-[50px] lg:px-[100px] flex flex-col justify-between items-center gap-5">
          <div className="w-full h-auto bg-red-600 flex flex-col md:flex-row rounded-[14px]">
            <img src="/pemandian_air_panas_2.jpeg" alt="" className='w-full md:w-[520px] rounded-tl-[14px] rounded-tr-[14px] md:rounded-tr-none rounded-bl-none md:rounded-bl-[14px] object-cover' />
            <div className="flex flex-col p-4 md:p-10">
              <p className="text-[24px] md:text-[36px] font-semibold mb-4 text-white">Pemandian Air Panas</p>
              <p className="text-white text-[14px] md:text-[16px]">Seperti namanya, Passo yang dalam Bahasa Indonesia berarti panas, desa ini terkenal dengan titik mata air panas yang tersebar di hampir seluruh wilayahnya. Potensi ini dimanfaatkan oleh pemerintah dan masyarakat setempat sebagai sumber pemasukan. Terdapat tempat pemandian umum hingga kolam renang air panas dengan latar pemandangan indah Danau Tondano, yang menjadi daya tarik bagi wisatawan.</p>
            </div>
          </div>

          <div className="w-full h-auto bg-red-600 flex flex-col md:flex-row-reverse rounded-[14px]">
            <img src="/POTENSI_DESA_DANAU.jpg" alt="" className='w-full md:w-[520px] rounded-tr-[14px] rounded-tl-[14px] md:rounded-tl-none rounded-br-none md:rounded-br-[14px] object-cover' />
            <div className="flex flex-col p-4 md:p-10">
              <p className="text-[24px] md:text-[36px] font-semibold text-white mb-4">Danau Tondano</p>
              <p className="text-white text-[14px] md:text-[16px]">Danau dan sungai Tondano mempunyai peranan penting dalam menunjang kehidupan penduduk Desa Passo dan sekitarnya. Danau ini berfungsi sebagai sumber air baku untuk PDAM Kota Manado dan Tondano, pembangkit listrik tenaga air (PLTA) Tanggari dan Tonsea Lama, sumber irigasi, perikanan darat, dan obyek wisata yang menarik banyak pengunjung.</p>
            </div>
          </div>

          <div className="w-full h-auto bg-red-600 flex flex-col md:flex-row rounded-[14px]">
            <img src="/POTENSI_DESA_SAWAH.jpg" alt="" className='w-full md:w-[520px] rounded-tl-[14px] rounded-tr-[14px] md:rounded-tr-none rounded-bl-none md:rounded-bl-[14px] object-cover' />
            <div className="flex flex-col p-4 md:p-10">
              <p className="text-[24px] md:text-[36px] font-semibold text-white mb-4">Pertanian</p>
              <p className="text-white text-[14px] md:text-[16px]">Tahukah Anda bahwa Desa Passo, dengan luas lahan sekitar 351 hektare, mampu memproduksi padi, ikan, dan kangkung sepanjang tahun? Desa ini memiliki sektor pertanian yang sangat penting sebagai potensi sumber daya alamnya. Untuk meningkatkan kesejahteraan para petani, Pemerintah Desa telah membentuk Kelompok Tani Desa (Poktan Desa) sebagai wadah belajar guna meningkatkan pengetahuan dan keterampilan para petani. Dengan pengelolaan yang tepat, potensi Desa Passo dapat berkembang secara optimal, menjadikan desa ini contoh sukses dalam memanfaatkan sumber daya alam untuk kesejahteraan masyarakat.</p>
            </div>
          </div>
        </div>

        <div id='statistika_desa' className="h-[80px]"></div>
        <div className="px-4 md:px-[50px] lg:px-[100px] flex flex-col items-center">
          <p className="mb-4 text-[24px] md:text-[30px] lg:text-[35px]">Jumlah Penduduk</p>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-[80%] md:w-[30%] lg:w-[15%] p-4 bg-red-600 flex flex-col justify-center items-center rounded-[14px] mb-4">
              <p className="text-[30px] md:text-[35px] lg:text-[40px] font-bold text-white">2501</p>
              <p className="text-[18px] md:text-[20px] text-white">Jiwa</p>
            </div>
          </div>
        </div>

        <div className="h-[20px] md:h-[40px]"></div>

        <div className="px-4 md:px-[50px] lg:px-[100px] flex flex-col items-center">
          <p className="mb-4 text-[24px] md:text-[30px] lg:text-[35px]">Sarana Pendidikan</p>
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-10">
            <div className="w-[80%] md:w-[20%] lg:w-[15%] p-4 bg-red-600 flex flex-col justify-center items-center rounded-[14px]">
              <p className="text-[40px] md:text-[45px] lg:text-[50px] font-bold text-white">5</p>
              <p className="text-[18px] md:text-[20px] text-white">TK</p>
            </div>
            <div className="w-[80%] md:w-[20%] lg:w-[15%] p-4 bg-red-600 flex flex-col justify-center items-center rounded-[14px]">
              <p className="text-[40px] md:text-[45px] lg:text-[50px] font-bold text-white">2</p>
              <p className="text-[18px] md:text-[20px] text-white">SD</p>
            </div>
            <div className="w-[80%] md:w-[20%] lg:w-[15%] p-4 bg-red-600 flex flex-col justify-center items-center rounded-[14px]">
              <p className="text-[40px] md:text-[45px] lg:text-[50px] font-bold text-white">1</p>
              <p className="text-[18px] md:text-[20px] text-white">SMP</p>
            </div>
          </div>
        </div>

        <div className="h-[20px] md:h-[40px]"></div>

        <div className="px-4 md:px-[50px] lg:px-[100px] flex flex-col items-center">
          <p className="mb-4 text-[24px] md:text-[30px] lg:text-[35px]">Bangunan Gereja</p>
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-10">
            <div className="w-[80%] md:w-[15%] lg:w-[15%] p-4 bg-red-600 flex flex-col justify-center items-center rounded-[14px]">
              <p className="text-[40px] md:text-[45px] lg:text-[50px] font-bold text-white">1</p>
              <p className="text-[18px] md:text-[20px] text-white">GMIM</p>
            </div>
            <div className="w-[80%] md:w-[15%] lg:w-[15%] p-4 bg-red-600 flex flex-col justify-center items-center rounded-[14px]">
              <p className="text-[40px] md:text-[45px] lg:text-[50px] font-bold text-white">1</p>
              <p className="text-[18px] md:text-[20px] text-white">GPDI</p>
            </div>
            <div className="w-[80%] md:w-[15%] lg:w-[15%] p-4 bg-red-600 flex flex-col justify-center items-center rounded-[14px]">
              <p className="text-[40px] md:text-[45px] lg:text-[50px] font-bold text-white">1</p>
              <p className="text-[18px] md:text-[20px] text-white">Katolik</p>
            </div>
            <div className="w-[80%] md:w-[15%] lg:w-[15%] p-4 bg-red-600 flex flex-col justify-center items-center rounded-[14px]">
              <p className="text-[40px] md:text-[45px] lg:text-[50px] font-bold text-white">2</p>
              <p className="text-[18px] md:text-[20px] text-white">GMAHK</p>
            </div>
            <div className="w-[80%] md:w-[15%] lg:w-[15%] p-4 bg-red-600 flex flex-col justify-center items-center rounded-[14px]">
              <p className="text-[40px] md:text-[45px] lg:text-[50px] font-bold text-white">1</p>
              <p className="text-[18px] md:text-[20px] text-white">GCB</p>
            </div>
          </div>
        </div>

        <div id="perangkat_desa" className="h-[100px]"></div>
        <div className="flex flex-col items-center">
          <div className="mb-10 px-8 md:px-[100px] w-full">
            <p className="p-1 w-full text-[24px] md:text-[35px] flex bg-red-600 justify-center rounded-[14px] text-white">
              Perangkat Desa
            </p>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/aparat_desa/Nelfin_Mamentu_Hukum_Tua_Desa_Passo.png"
                  alt=""
                  className="bg-red-600 rounded-[14px] pt-[51px] md:pt-[0px]"
                />
                <p className="text-[16px] md:text-[20px] font-bold text-red-600">
                  Nelfin Mamentu
                </p>
                <p className="text-[12px] md:text-[14px]">Hukum Tua</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/aparat_desa/Adri_Walangitan_Sekretaris_Desa.png"
                  alt=""
                  className="bg-red-600 rounded-[14px]"
                />
                <p className="text-[16px] md:text-[20px] font-bold text-red-600">
                  Adri Walangitan
                </p>
                <p className="text-[12px] md:text-[14px]">Sekertaris</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/aparat_desa/Andriano_Manappo_Kasie_Pemerintahan.png"
                  alt=""
                  className="bg-red-600 rounded-[14px]"
                />
                <p className="text-[16px] md:text-[20px] font-bold text-red-600">
                  Andriano Manappo
                </p>
                <p className="text-[12px] md:text-[14px]">Kepala Seksi Pemerintahan</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/aparat_desa/Silvania_Rakian_Kasie_Kesejahteraan.png"
                  alt=""
                  className="bg-red-600 rounded-[14px]"
                />
                <p className="text-[16px] md:text-[20px] font-bold text-red-600">
                  Silvania Rakian
                </p>
                <p className="text-[12px] md:text-[14px]">Kepala Seksi Kesejahteraan</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/aparat_desa/Lavenia_Kaeng_Kaur_Tata_Usaha_Umum.png"
                  alt=""
                  className="bg-red-600 rounded-[14px]"
                />
                <p className="text-[16px] md:text-[20px] font-bold text-red-600">
                  Lavenia Kaeng
                </p>
                <p className="text-[12px] md:text-[14px]">Kepala Urusan Tata Usaha Umum</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/aparat_desa/Marjelina_Walean_S.Pd_Kaur_Pelayanan.png"
                  alt=""
                  className="bg-red-600 rounded-[14px]"
                />
                <p className="text-[16px] md:text-[20px] font-bold text-red-600">
                  Marjelina Walean S.Pd
                </p>
                <p className="text-[12px] md:text-[14px]">Kepala Urusan Pelayanan</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/aparat_desa/Syandi_Hermanus_Kaur_Perencanaan.png"
                  alt=""
                  className="bg-red-600 rounded-[14px]"
                />
                <p className="text-[16px] md:text-[20px] font-bold text-red-600">
                  Syandi Hermanus
                </p>
                <p className="text-[12px] md:text-[14px]">Kepala Urusan Perencanaan</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/aparat_desa/Yesika_Sanger_Kaur_Keuangan.png"
                  alt=""
                  className="bg-red-600 rounded-[14px]"
                />
                <p className="text-[16px] md:text-[20px] font-bold text-red-600">
                  Yesika Sanger
                </p>
                <p className="text-[12px] md:text-[14px]">Kepala Urusan Keuangan</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/aparat_desa/Sandra_Worang_Kepala_Jaga_1.png"
                  alt=""
                  className="bg-red-600 rounded-[14px]"
                />
                <p className="text-[16px] md:text-[20px] font-bold text-red-600">
                  Sandra Worang
                </p>
                <p className="text-[12px] md:text-[14px]">Kepala Jaga 1</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/aparat_desa/Indry_Kawonal_Meweteng_Jaga_1.png"
                  alt=""
                  className="bg-red-600 rounded-[14px]"
                />
                <p className="text-[16px] md:text-[20px] font-bold text-red-600">
                  Indry Kawonal
                </p>
                <p className="text-[12px] md:text-[14px]">Meweteng Jaga 1</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/aparat_desa/Donny_Mamangkey_Kepala_Jaga_2.png"
                  alt=""
                  className="bg-red-600 rounded-[14px]"
                />
                <p className="text-[16px] md:text-[20px] font-bold text-red-600">
                  Donny Mamangkey
                </p>
                <p className="text-[12px] md:text-[14px]">Kepala Jaga 2</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/aparat_desa/Jindry_Kawonal_Meweteng_Jaga_2.png"
                  alt=""
                  className="bg-red-600 rounded-[14px]"
                />
                <p className="text-[16px] md:text-[20px] font-bold text-red-600">
                  Jindry Kawonal
                </p>
                <p className="text-[12px] md:text-[14px]">Meweteng Jaga 2</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/aparat_desa/Diane_Kaeng_Kepala_Jaga_3.png"
                  alt=""
                  className="bg-red-600 rounded-[14px]"
                />
                <p className="text-[16px] md:text-[20px] font-bold text-red-600">
                  Diane Kaeng
                </p>
                <p className="text-[12px] md:text-[14px]">Kepala Jaga 3</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/aparat_desa/Chandra_Kowal_Meweteng_Jaga_3.png"
                  alt=""
                  className="bg-red-600 rounded-[14px]"
                />
                <p className="text-[16px] md:text-[20px] font-bold text-red-600">
                  Chandra Kowal
                </p>
                <p className="text-[12px] md:text-[14px]">Meweteng Jaga 3</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/aparat_desa/Serfianto_Lumoindong_Kepala_Jaga_4.png"
                  alt=""
                  className="bg-red-600 rounded-[14px]"
                />
                <p className="text-[16px] md:text-[20px] font-bold text-red-600">
                  Serfianto Lumoindong
                </p>
                <p className="text-[12px] md:text-[14px]">Kepala Jaga 4</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/aparat_desa/Noldy_Lumoindong_Kepala_Jaga_5.png"
                  alt=""
                  className="bg-red-600 rounded-[14px]"
                />
                <p className="text-[16px] md:text-[20px] font-bold text-red-600">
                  Noldy Lumoindong
                </p>
                <p className="text-[12px] md:text-[14px]">Kepala Jaga 5</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/aparat_desa/Wenny_Sanger_Meweteng_Jaga_5.png"
                  alt=""
                  className="bg-red-600 rounded-[14px]"
                />
                <p className="text-[16px] md:text-[20px] font-bold text-red-600">
                  Wenny Sanger
                </p>
                <p className="text-[12px] md:text-[14px]">Meweteng Jaga 5</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/aparat_desa/Rinto_Rakian_Kepala_Jaga_6_1.png"
                  alt=""
                  className="bg-red-600 rounded-[14px]"
                />
                <p className="text-[16px] md:text-[20px] font-bold text-red-600">
                  Rinto Rakian
                </p>
                <p className="text-[12px] md:text-[14px]">Kepala Jaga 6</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/aparat_desa/Irwan_Lela_Kepala_Jaga_7.png"
                  alt=""
                  className="bg-red-600 rounded-[14px]"
                />
                <p className="text-[16px] md:text-[20px] font-bold text-red-600">
                  Irwan Lela
                </p>
                <p className="text-[12px] md:text-[14px]">Kepala Jaga 7</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/aparat_desa/Jerel_Rakian_Meweteng_Jaga_7.png"
                  alt=""
                  className="bg-red-600 rounded-[14px]"
                />
                <p className="text-[16px] md:text-[20px] font-bold text-red-600">
                  Jerel Rakian
                </p>
                <p className="text-[12px] md:text-[14px]">Meweteng Jaga 7</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/aparat_desa/Jeklin_Rasu_Kepala_Jaga_8.png"
                  alt=""
                  className="bg-red-600 rounded-[14px]"
                />
                <p className="text-[16px] md:text-[20px] font-bold text-red-600">
                  Jeklin Rasu
                </p>
                <p className="text-[12px] md:text-[14px]">Kepala Jaga 8</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/aparat_desa/Ronaldino_Wehantaouw_Meweteng_Jaga_8.png"
                  alt=""
                  className="bg-red-600 rounded-[14px]"
                />
                <p className="text-[16px] md:text-[20px] font-bold text-red-600">
                  Ronaldino Wehantaouw
                </p>
                <p className="text-[12px] md:text-[14px]">Meweteng Jaga 8</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/aparat_desa/Meyta_Wonua_Kepala_Jaga_9.png"
                  alt=""
                  className="bg-red-600 rounded-[14px]"
                />
                <p className="text-[16px] md:text-[20px] font-bold text-red-600">
                  Meyta Wonua
                </p>
                <p className="text-[12px] md:text-[14px]">Kepala Jaga 9</p>
              </div>
            </SwiperSlide>
            {/* Repeat SwiperSlide for other village officials */}
          </Swiper>
        </div>
        <div id='peta_desa' className="h-[80px]"></div>
        <div className="px-4 sm:px-8 md:px-16 lg:px-[100px] flex flex-col md:flex-row md:items-start md:justify-between">
          <p className="text-[40px] sm:text-[50px] md:text-[60px] font-semibold mb-4 md:mb-0">Peta Desa</p>
          <div className="w-full md:w-1/2">
            <p className="text-base sm:text-lg md:text-xl">
              Desa Passo terletak pada koordinat 1°1223’LU dan 1,2324°51,23’87’, dengan ketinggian 700 meter di atas permukaan laut. Batas wilayahnya adalah Desa Gagaran (Kecamatan Remboken) di sebelah utara, Desa Tountimomor di sebelah selatan, Danau Tondano di sebelah timur, dan Desa Totolan di sebelah barat.
            </p>
          </div>
        </div>

        <div className="h-[40px] sm:h-[60px] md:h-[80px]"></div>

        <div className="mb-8 sm:mb-10 md:mb-[40px] px-4 sm:px-8 md:px-[100px] flex flex-col md:flex-row md:justify-between items-center">
          <div className="w-full flex flex-col items-center md:items-start rounded-[14px]">
            <div className="w-full z-0">
              <MapComponent />
            </div>
            <div className="h-[20px] sm:h-[30px] md:h-[30px]"></div>
            <Link href="https://maps.app.goo.gl/b1s59f9jo1LHszQg7" className='w-full'>
              <button
                className="w-full p-3 bg-red-700 rounded-lg text-white hover:bg-white hover:text-red-700 hover:border hover:border-red-700"
              >
                Explore Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div id='kkt' className="h-[80px]"></div>
      <div className="px-4 sm:px-8 lg:px-[100px] flex flex-col items-center">
        <p className="mb-6 sm:mb-8 lg:mb-10 p-1 w-full text-[28px] sm:text-[30px] lg:text-[35px] flex bg-red-600 justify-center rounded-[14px] text-white text-center">
          KKT 139 Universitas Sam Ratulangi
        </p>
        <div className="w-full flex flex-col gap-8 sm:gap-10">
          <div className="w-full flex flex-wrap justify-center gap-8 sm:gap-10">
            {[
              { imgSrc: '/peserta_kkt/kordi_posko.png', name: 'Jonathan T. Muaja', role: 'Kordinator Posko' },
              { imgSrc: '/peserta_kkt/Sekertaris.png', name: 'Alda Paendong', role: 'Sekertaris' },
              { imgSrc: '/peserta_kkt/bendahara.png', name: 'Geavly T. Suak', role: 'Bendahara' },
              { imgSrc: '/peserta_kkt/kordi_bid_program.png', name: 'Heidy Talumepa', role: 'Koordinator Bidang Program' },
              { imgSrc: '/peserta_kkt/anggota_bid_program.png', name: 'Elizabet R. Pulakiang', role: 'Anggota Bidang Program' },
              { imgSrc: '/peserta_kkt/kordi_bid_pelaporan.png', name: 'Tiara F.A Mustafa', role: 'Koordinator Bidang Pelaporan' },
              { imgSrc: '/peserta_kkt/anggota_bid_pelaporan.png', name: 'Diva A. Bawohang', role: 'Anggota Bidang Pelaporan' },
              { imgSrc: '/peserta_kkt/kordi_bid_perlengkapan.png', name: 'Steven A. Sumarna', role: 'Koordinator Bidang Perlengkapan' },
              { imgSrc: '/peserta_kkt/anggota_bid_perlengkapan.png', name: 'Rafael W. Taroreh', role: 'Anggota Bidang Perlengkapan' }
            ].map(({ imgSrc, name, role }, index) => (
              <div key={index} className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] flex flex-col justify-center items-center rounded-[14px] bg-white shadow-md">
                <img src={imgSrc} alt={name} className=" w-full rounded-[14px]" />
                <p className="text-[18px] sm:text-[20px] font-bold text-red-600">{name}</p>
                <p className="mb-6 text-[12px] sm:text-[14px] text-center">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-[80px]"></div>

      <footer className="bg-red-600 text-white py-8 px-4 sm:px-8 lg:px-[100px]">
        <div className="flex flex-col">
          <div className="w-full">
            <p className="text-[14px] sm:text-[16px]">&copy; 2024 Desa Passo. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div >
  );
}
