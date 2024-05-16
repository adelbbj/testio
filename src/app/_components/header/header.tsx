import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderUserSection from "./header-user-section";

export const Header: React.FC = () => {
  return (
    <header className="bg-white">
      <div className="container flex items-center justify-between my-4">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="تستیو"
            width={94}
            height={27}
            priority
          />
        </Link>

        <HeaderUserSection />
      </div>
    </header>
  );
};
