import React from "react";
import { MacbookScroll } from "../components/ui/macbook-scroll";
import Link from "next/link";
import WLogo from '../../../public/WLogo.png'
import Image from "next/image";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
          <span>
            Check Out My LinkedIn Profile <br />It's Worth a Look!
          </span>
        }
        badge={
          <Link href="/">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </Link>
        }
        src={WLogo.src}
        showGradient={false}
      />
    </div>
  );
}
// W logo
const Badge = ({ className }: { className?: string }) => {
  return (
    <Image src={WLogo} alt="Logo" className="w-20 h-14"/>
  );
};
