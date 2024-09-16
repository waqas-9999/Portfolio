import React from "react";
import { FloatingDock } from "../components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconHome,
  IconNewSection,
  IconBrandWhatsapp ,
  IconBrandFacebook,
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.facebook.com/waqas.mayo.1253",
    },
    {
      title: "Whatsapp ",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/muhammad-waqas-shahab-69a846244/",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/waqas-9999",
    },
  ];
  return (
    <div className="flex items-end justify-center w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
