import Image from "next/image";
import { Noto_Serif_JP } from "next/font/google";
import takumark from "../../../../public/takumalog.png";

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: "800",
  variable: "--font-noto-serif",
});

export const Logo = () => {
  return (
    <div className="flex items-center justify-left w-full pl-4 relative">
      <Image src={takumark} alt="logo" height={70} width={70} />
      <h2 className={`${notoSerif.className} text-2xl absolute left-18`}>
        琢磨会
      </h2>
    </div>
  );
};
