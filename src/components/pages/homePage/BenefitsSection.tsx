import Image from "next/image";
import React from "react";

function BenefitsSection() {
  return (
    <section>
      <div className="p-4  space-y-4 flex flex-col justify-center items-center lg:flex lg:flex-row lg:justify-start lg:gap-x-16 lg:items-center">
        <Image
          className=""
          src="/images/Benefit.png"
          alt="از کاوشگران کاردان آتی نگر بیشتر بدانید"
          width={500}
          height={500}
        />

        <div className="space-y-4 ">
          <h2 className="font-extrabold text-2xl">
            از کاوشگران کاردان آتی نگر بیشتر بدانید
          </h2>
          <p className="font-light">
            تاسیس موسسه غیر تجاری کاوشگران کاردان آتی نگر درتاریخ وارد شوید به
            شماره ثبت 58126 به شناسه ملی وارد شوید ثبت و امضا ذیل دفاترتکمیل
            گردیده که خلاصه آن به شرح زیر جهت اطلاع عموم آگهی میگردد. نام :
            کاوشگران کاردان آتی نگر موسسه غیر تجاری موضوع فعالیت :1-انجام کلیه
            خدمات حسابداری و مدیریت تجزیه وتحلیل، طراحی و استقرار سیستم کنترل
            های داخلی و مدیریتی تهیه و تنظیم اطلاعات مالی از قبیل صورت های مالی
            سالیانه، میان دوره ای، تلفیقی سایر گزارش های مالی و مدیریتی پیاده
            سازی و استقرار نرم افزارهای مالی و عملیاتی در زمینه حسابداری تهیه
            مدارک حساب، تنظیم اسناد حسابداری و ....
          </p>
          <button className="w-full md:w-3/12 btn bg-blue_default text-white">
            مشاهده بیشتر
          </button>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
