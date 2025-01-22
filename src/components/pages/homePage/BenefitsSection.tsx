import Image from "next/image";
import React from "react";

function BenefitsSection() {
  return (
    <section>
      <div className="p-4 space-y-4 lg:flex lg:justify-start lg:items-center lg:gap-x-12">
        <Image
          src="/images/Benefits.png"
          alt="مزایای همکاری با مؤسسه"
          width={500}
          height={500}
        />

        <div className="space-y-4">
          <h1 className="font-extrabold text-2xl">مزایای همکاری با مؤسسه</h1>
          <p className="font-light">
            <span>کاهش هزینه‌های مالیاتی</span>
            <br />
            <span>جلوگیری از جریمه‌های مالیاتی</span>
            <br />
            <span>خدمات سریع و دقیق</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
