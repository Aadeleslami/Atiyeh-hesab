import React from "react";

function StatisticsSection() {
  return (
    <section>
      <div className="w-full bg-blue_default text-white py-4 lg:flex lg:justify-around lg:rounded-md">
        <div className="flex flex-col justify-center items-center gap-4">
          <span>10000</span>
          <p>تعداد مشتریان راضی</p>
        </div>
        <div className="divider"></div>
        <div className="flex flex-col justify-center items-center gap-4">
          <span>1</span>
          <p>سال ها تجربه</p>
        </div>
        <div className="divider"></div>
        <div className="flex flex-col justify-center items-center gap-4">
          <span>100</span>
          <p>میزان موفقیت سرمایه</p>
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;
