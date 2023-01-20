import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import styles from "./banner.module.scss"
const Banner = () => {
  return (
    <section className={styles.banner}>
     
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-6 g-4">
            <div className={styles.left_side}>
              <h1>Gələcəyini Dizayn Et!!</h1>
              <p>
                Əyləncəli mühit, maraqlı dostlar, daim sizin inkişafınız üçün
                çalışan1 mərkəzlə ixtisasınızı dəyişməyə hazırsınız? İnanılmaz
                görünsə də bu bizimlə mümkündür!
              </p>
              <button>Odenissiz Kanusltasiya</button>
            </div>
          </div>

          <div className="col-lg-6 g-4">
          <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className={styles.img} src="https://source.unsplash.com/1600x900/?nature,water" alt="" /></SwiperSlide>
        <SwiperSlide><img className={styles.img} src="https://source.unsplash.com/1600x900/?nature,water" alt="" /></SwiperSlide>
        <SwiperSlide><img className={styles.img} src="https://source.unsplash.com/1600x900/?nature,water" alt="" /></SwiperSlide>
        <SwiperSlide><img className={styles.img} src="https://source.unsplash.com/1600x900/?nature,water" alt="" /></SwiperSlide>
        <SwiperSlide><img className={styles.img} src="https://source.unsplash.com/1600x900/?nature,water" alt="" /></SwiperSlide>
        <SwiperSlide><img className={styles.img} src="https://source.unsplash.com/1600x900/?nature,water" alt="" /></SwiperSlide>
        <SwiperSlide><img className={styles.img} src="https://source.unsplash.com/1600x900/?nature,water" alt="" /></SwiperSlide>
        <SwiperSlide><img className={styles.img} src="https://source.unsplash.com/1600x900/?nature,water" alt="" /></SwiperSlide>
      
      </Swiper>
          </div>
        </div>
    </section>
  );
};

export default Banner;
