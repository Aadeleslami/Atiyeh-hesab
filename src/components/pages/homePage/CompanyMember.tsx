import { MemberListType, MemberType } from "@/Constants/listCompanyMember";
export default function CompanyMember() {
  return (
    <>
      <section className="p-4 space-y-4">
        <div className="  my-4 flex justify-between">
          <h2 className=" font-extrabold text-2xl mb-8">
            اعضای کاوشگران کاردان آتی نگر
          </h2>
          <button className="hidden md:block md:w-3/12 btn bg-blue_default text-white">
            مشاهده تمامی اعضا
          </button>
        </div>
        <div className=" flex flex-col md:flex-row justify-center items-center">
          {MemberListType.map((member: MemberType) => (
            <div
              key={member.id}
              className="max-w-sm mx-4 my-8 bg-slate-200 rounded-lg shadow-lg p-6  relative  "
            >
              <div className="flex justify-center mt-4">
                <img
                  src="/images/Isolation_Mode.png" // مسیر تصویر پیش‌فرض را به دلخواه تغییر دهید
                  alt={`${member.name} ${member.lastName}`}
                  className="w-20 h-20 rounded-full border absolute -top-10"
                />
              </div>
              <div className=" mt-4">
                <p className="flex  text-sm">
                  <span className="font-bold">نام: </span>
                  <span>{member.name}</span>
                </p>
                <p className="text-sm">
                  <span className="font-bold">نام خانوادگی: </span>
                  <span>{member.lastName}</span>
                </p>
                <p className="text-sm">
                  <span className="font-bold">سمت: </span>
                  <span>{member.position}</span>
                </p>
                <p className=" text-sm">
                  <span className="font-bold">شرح وظیفه: </span>
                  <span className=""> {member.description}</span>
                </p>
              </div>
            </div>
          ))}
          <button className=" w-full md:hidden  btn bg-blue_default text-white">
            مشاهده تمامی اعضا
          </button>
        </div>
      </section>
    </>
  );
}
