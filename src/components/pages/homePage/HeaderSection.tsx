import Image from "next/image";
import React from "react";

function HeaderSection() {
  return (
    <header>
      <div className="p-4 space-y-4 lg:flex lg:flex-row-reverse lg:justify-between lg:items-center">
        <Image
          src="/images/headerImage.png"
          alt="راهکارهای مالیاتی حرفه‌ای برای کسب‌وکار شما"
          width={500}
          height={500}
        />

        <div className="space-y-4">
          <h1 className="font-extrabold text-2xl">
            راهکارهای مالیاتی حرفه‌ای برای کسب‌وکار شما
          </h1>
          <p className="font-light">
            با سال‌ها تجربه و تخصص در ارائه خدمات مالیاتی، ما به کسب‌وکارها کمک
            می‌کنیم تا با اطمینان و بهینه‌سازی مالیاتی، رشد کنند.
          </p>
          <button className="btn bg-blue_default text-white">
            شروع 7 روز رایگان
          </button>
        </div>
      </div>
    </header>
  );
}

export default HeaderSection;
