import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconMapPinFilled,
  IconMailFilled,
  IconClock,
  IconMap2,
  IconPhoneCall,
  IconMail,
} from "@tabler/icons-react";

function Footer() {
  return (
    <div className="bg-[#FFFFFF] p-6 mb-32 lg:mb-4 mt-6 lg:mt-8 rounded-xl">
      <div className="grid lg:grid-cols-4 gap-6">
        <div>
          <div className="flex justify-start items-center gap-x-4 pb-2 lg:pb-4">
            <Image src="/images/logo.png" alt="موسسه" width={64} height={64} />
            {/* <p className="text-sm font-black">شریف تکنولوژی</p> */}
          </div>
          <div className="w-full">
            {/* <Logo width={100} height={100} /> */}
            <p className="text-sm leading-7 py-2 justify-start">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و کاربردهای متنوع با هدف بهبود
              ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال
              و آینده،
            </p>
          </div>
        </div>
        <div className="col-span-3">
          <div className="grid lg:grid-cols-4 items-center py-2 gap-6">
            <div className="text-sm flex font-semibold lg:col-span-3">
              <IconMapPinFilled color="#6059F7" />
              <span className="px-2">
              استان تهران، شهرستان تهران، بخش مرکزی، شهر تهران
              </span>
            </div>
            <div className="flex ">
              <IconMailFilled color="#6059F7" />
              <p className="px-2">info@test.ir</p>
            </div>
          </div>
          <div className="divider"></div>
          <ul className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 justify-between items-start gap-x-8 ">
            <li className="w-full lg:w-1/4">
              <p className="font-black text-base pb-4">دسترسی های سریع</p>
              <ul className="space-y-4 mt-2">
                <li className="text-xs lg:text-sm font-semibold hover:text-purple_default">
                  <Link href="/">صفحه اصلی</Link>
                </li>
                <li className="text-xs lg:text-sm  font-semibold hover:text-purple_default">
                  <Link href={`/`}>تماس با ما</Link>
                </li>
                <li className="text-xs lg:text-sm  font-semibold hover:text-purple_default">
                  <Link href={`/`}>درباره ما</Link>
                </li>
              </ul>
            </li>
            <li className="w-full lg:w-1/4">
              <p className="font-black text-base pb-4">تماس باما</p>
              <ul className="space-y-4 mt-2">
                <li className="text-xs font-semibold flex justify-start items-center">
                  <IconClock />
                  <span>8 صبح تا 5 غروب</span>
                </li>
                <li className="text-xs font-semibold flex justify-start items-center">
                  <IconMap2 />
                  <span>پارک علم فناوری</span>
                </li>
                <li className="text-xs font-semibold flex justify-start items-center">
                  <IconPhoneCall />
                  <span>054-467894</span>
                </li>
                <li className="text-xs font-semibold flex justify-start items-center">
                  <IconMail />
                  <span>info@gmail.ir</span>
                </li>
              </ul>
            </li>
            <li className="w-full lg:w-1/4">
              <p className="font-black text-base pb-4">راه های ارتباطی</p>
              <ul className="flex justify-start items-center gap-4">
                <li className="text-xs font-semibold">
                  <Link href={"/"}>
                    <Image
                      src={`/shared/Instagram.png`}
                      width={24}
                      height={24}
                      alt="instagram"
                    />
                  </Link>
                </li>
                <li className="text-xs font-semibold">
                  <Link href={"/"}>
                    <Image
                      src={`/shared/aparat.png`}
                      width={24}
                      height={24}
                      alt="meta"
                    />
                  </Link>
                </li>
                <li className="text-xs font-semibold">
                  <Link href={"/"}>
                    <Image
                      src={`/shared/linkdin.png`}
                      width={24}
                      height={24}
                      alt="meta"
                    />
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
