import { IconAbacus, IconBrandDatabricks, IconFileInvoice, IconTax } from "@tabler/icons-react";

export type ItemType = {
  id: number;
  title: string;
  desc: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  colorIcon: string;
};

export const ItemListType: ItemType[] = [
  {
    id: 1,
    title: "خدمات حسابداری",
    desc: "انجام صفر تا 100 امور حسابداری و مدیریت مباحث مالی برای انواع کسب و کارها",
    icon: IconAbacus,
    colorIcon: "#FFB800",
  },
  {
    id: 2,
    title: "خدمات مالیاتی",
    desc: "انجام صفر تا 100 امور مالیاتی و مدیریت سلامت مالیاتی برای انواع کسب و کارها و اشخاص",
    icon: IconTax,
    colorIcon: "#05C9A6",
  },
  {
    id: 3,
    title: "مشاوره مالیاتی",
    desc: "مشاوره و وکالت مالیاتی در راستای کاهش مالیات و جرائم مالیاتی به کمک رهنمودهای قانونی",
    icon: IconFileInvoice,
    colorIcon: "#3532B2",
  },
  {
    id: 4,
    title: "مشاوره مالی",
    desc: "بررسی فرآیند کسب و کار و شناسایی پتانسیل های سازمان در راستای سرمایه گذاری های سودآور",
    icon: IconBrandDatabricks,
    colorIcon: "#FFBF00",
  },
];
