import Image from "next/image";
import takumark from "../../../../public/takumark.png";

export const Logo = () => {
  return <Image src={takumark} alt="logo" height={70} width={70} />;
};
