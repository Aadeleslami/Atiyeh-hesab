import localFont from "next/font/local";

export const morabba = localFont({
  src: [
    {
      path: "../../public/fonts/Morabba-Heavy.ttf",
      weight: "200",
    },
    {
      path: "../../public/fonts/Morabba-Regular.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/Morabba-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Morabba-SemiBold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Morabba-Bold.ttf",
      weight: "800",
    },
    {
      path: "../../public/fonts/Morabba-Black.ttf",
      weight: "1000",
    },
  ],
  variable: "--font-morabba",
});
