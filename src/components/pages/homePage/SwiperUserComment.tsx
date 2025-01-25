"use client"
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { UserCommentType, UserType } from "@/Constants/listUserComment";

function SwiperUserComment() {
  return (
    <section className="p-4 space-y-4">
          <h2 className="font-extrabold text-2xl">نظرات کاربران</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center">
        <div>
          <div className=" hidden lg:flex justify-center  rounded-md mt-4">
            <Image
              src="/images/Comment.png"
              alt="راهکارهای مالیاتی حرفه‌ای برای کسب‌وکار شما"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {UserCommentType.map((user: UserType) => (
              <SwiperSlide key={user.id} className="">
                <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6 text-right relative w-64 mt-10 content-center ">
                  <div className="flex justify-end mb-4">
                    <Image
                      src="/images/Isolation_Mode1.jpg"
                      alt={`${user.name}`}
                      className="w-20 h-20 rounded-full border absolute -top-10 object-cover"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="mt-4">
                    <p className="flex text-sm">
                      <span className="font-bold">نام: </span>
                      <span>{user.name}</span>
                    </p>
                    <p className="text-sm">
                      <span className="font-bold">نام خانوادگی: </span>
                      <span>{user.lastName}</span>
                    </p>
                    <p className="text-sm">
                      <span className="font-bold">نظر: </span>
                      <span>{user.comment}</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default SwiperUserComment;
