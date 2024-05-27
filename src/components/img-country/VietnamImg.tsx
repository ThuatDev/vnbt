import React from "react";
import Image from "next/image";
// trả về prop có kiểu dữ liệu là string và country có kiểu dữ liệu là string
type Props = {
  country: string;
};
function VietnamImg({ country }: Props) {
  if (country === "vietnam") {
    return <div>Vietnam Img</div>;
  }
  if (country == "cambodia") {
    return (
      <>
        <div className="flex space-x-4 p-4 justify-center">
          <Image
            src="/images/Cambodia~~element141~~17.jpg"
            alt="Vietnam"
            width={150}
            height={150}
          />
          <Image
            src="/images/Cambodia~~element141~~16.jpg"
            alt="Cambodia"
            width={150}
            height={150}
          />
          <Image
            src="/images/Cambodia~~element141~~4.jpg"
            alt="Thailand"
            width={150}
            height={150}
          />
          <Image
            src="/images/Cambodia~~element141~~18.jpg"
            alt="Myanmar"
            width={150}
            height={150}
          />
          <Image
            src="/images/Cambodia~~element141~~15.jpg"
            alt="Multi-Country"
            width={150}
            height={150}
          />
        </div>
      </>
    );
  }

  if (country === "thailand") {
    return <div>ThailandImg</div>;
  }
  if (country === "/") {
    return <div>main</div>;
  }
}
export default VietnamImg;
