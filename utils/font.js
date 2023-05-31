import { Roboto } from "next/font/google";
import localFont from "next/font/local";



export const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const national = localFont({
  src: [
    {
      path: "../public/fonts/TestNational2Condensed-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
        path: "../public/fonts/TestNational2Condensed-Medium.otf",
        weight: "500",
        style: "medium",
      },
    {
      path: "../public/fonts/TestNational2Condensed-Bold.otf",
      weight: "600",
      style: "bold",
    },
  ],
  variable: "--font-nation",
});