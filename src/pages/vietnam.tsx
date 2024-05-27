import Link from "next/link";
import React from "react";

const Vietnam = () => {
  return (
    <>
      <div className="flex space-x-4 p-4">
        <Link href="/vietnam/from-hcm">Cycling from HCM city</Link>
        <Link href="/vietnam/mekong-delta">Cycling Mekong Delta</Link>
        <Link href="/vietnam/from-dalat">Cycling from Da Lat</Link>
        <Link href="/vietnam/from-nhatrang">Cycling from Nha Trang</Link>
        <Link href="/vietnam/from-hoian">Cycling from Hoi An</Link>
        <Link href="/vietnam/from-hue">Cycling from Hue</Link>
        <Link href="/vietnam/from-sapa">Cycling from Sapa</Link>
        <Link href="/vietnam/from-hanoi">Cycling from Ha Noi</Link>
      </div>
    </>
  );
};

export default Vietnam;
