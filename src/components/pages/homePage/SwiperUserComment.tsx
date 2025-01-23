import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { UserCommentType, UserType } from "@/Constants/listUserComment";

function SwiperUserComment() {
  return (
    <section className="p-4 space-y-4">
      <div className="grid grid-cols-2">
        <div>
          <h2 className="font-extrabold text-2xl">نظرات کاربران</h2>
          <div className="flex justify-center border-2 border-slate-200 rounded-md mt-4">
            <Image
              src="/images/Comment.png"
              alt="راهکارهای مالیاتی حرفه‌ای برای کسب‌وکار شما"
              width={500}
              height={500}
            />
          </div>
          <div>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              {UserCommentType.map((user : UserType) => (
                <SwiperSlide key={user.id}>
                  <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6 text-right relative">
                    <div className="flex justify-end mb-4">
                      <Image
                        src="/images/Isolation_Mode.png" 
                        alt={`${user.name}`}
                        className="w-20 h-20 rounded-full border absolute -top-10"
                      />
                    </div>
                    <div className="mt-10">
                      <p className="text-sm">
                        <strong>نام:</strong> {user.name}
                      </p>
                      <p className="text-sm">
                        <strong>نوع کاربر:</strong> {user.userType}
                      </p>
                      <p className="text-sm">
                        <strong>نظر:</strong> {user.comment}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SwiperUserComment;
