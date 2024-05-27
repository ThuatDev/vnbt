// components/Header.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import VietnamImg from "@/components/img-country/VietnamImg";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// tạo 1 hàm Header
const Header = () => {
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Hoặc một loading spinner, hoặc một nội dung dự phòng khác
  }

  // Kiểm tra router trước khi sử dụng
  if (!router || !router.asPath) {
    console.error("Router is not available");
    return <div>Error: Router is not available</div>; // Hoặc xử lý lỗi khác tùy ý bạn
  }

  console.log(router.pathname);
  const country = router.asPath.replace("/", "").split("/");
  console.log(country);

  // Nếu `country` là mảng thì trả về phần tử đầu tiên, nếu không thì trả về chuỗi rỗng
  const countryName = Array.isArray(country) ? country[0] : "";
  return (
    <div className="container pl-80 pr-80">
      <Image
        src="/images/logo_vnbt.jpg" // Path to your image
        alt="Logo"
        width={238}
        height={80}
      />
      {/* tạo 1 đường line giữa 2 phần và đen  */}
      {/* {/* tạo thẻ để có thể canh padding  bên phải  */}
      <div
        className="flex justify-between
        border-b-2 border-black w"
      ></div>
      <VietnamImg country={Array.isArray(country) ? country[0] : ""} />
      <nav className="flex space-x-4 ">
        <Link href="/">Home</Link>
        <Link href="/vietnam">Vietnam</Link>
        <Link href="/cambodia">Cambodia</Link>
        <Link href="/thailand">Thailand</Link>
        <Link href="https://www.facebook.com/MyanmarBicycleTours">Myanmar</Link>
        <Link href="/multi-country">Multi-Country</Link>
        <Link href="/reviews">Reviews</Link>
        <Link href="/contact-us">Contact us</Link>
      </nav>
    </div>
  );
};

export default Header;
