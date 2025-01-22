import { IconHammer } from "@tabler/icons-react";

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
    title: "دسترسی راحت",
    desc: "دسترسی اسان و راحت در سریع ترین زمان ممکن ",
    icon: IconHammer,
    colorIcon: "#FFB800",
  },
  {
    id: 2,
    title: "پشتیبانی 24 ساعته",
    desc: "در هر ساعت شبانه روز پاسخگو شما عزیزان هستیم",
    icon: IconHammer,
    colorIcon: "#FFB800",
  },
  {
    id: 3,
    title: "بروزرسانی دائمی",
    desc: "نرم افزار دائماً در حال بروزرسانی و تطبیق با آخرین بخشنامه",
    icon: IconHammer,
    colorIcon: "#FFB800",
  },
  {
    id: 4,
    title: "واسط کاربری اسان",
    desc: "نرم افزار دائماً در حال بروزرسانی و تطبیق با آخرین بخشنامه",
    icon: IconHammer,
    colorIcon: "#FFB800",
  },
];
