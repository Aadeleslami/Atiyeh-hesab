import Image from "next/image";
import React from "react";

function BenefitsSection() {
  return (
    <section>
      <div className="p-4  space-y-4 flex flex-col justify-center items-center lg:flex lg:flex-row lg:justify-start lg:gap-x-16 lg:items-center">
        <Image
          className=""
          src="/images/Benefit.png"
          alt="از آتیه حساب بیشتر بدانید"
          width={500}
          height={500}
        />

        <div className="space-y-4 ">
          <h2 className="font-extrabold text-2xl">از آتیه حساب بیشتر بدانید</h2>
          <p className="font-light">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
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
