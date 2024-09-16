"use client";
import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";
import BuycexTrade from "../../../public/BuycexTrade.png"
import BuycexHomeOne from "../../../public/BuycexHome.png"
import BuycexProfile from "../../../public/BuycexProfile.png"
import BuycexMarket from "../../../public/BuycexMarket.png"
import BuycexConvert from "../../../public/BuycexConvert.png"
import BuycexChat from "../../../public/BuycexChat.png"
import JaleebiHome from "../../../public/JaleebiHome.png"
import JaleebiEcomm from "../../../public/JaleebiEcomm.png"
import JaleebiReviews from "../../../public/JaleebiReviews.png"
import SafeDepositHome from "../../../public/SafeDepositHome.png"
import SafeDepositLogin from "../../../public/SafeDepositLogin.png"
import hz4jobsHome from "../../../public/hz4jobsHome.png"
import SamasimHome from "../../../public/smasimltdHome.png"
import SamasimArabic from "../../../public/smasimltdArabic.png"

export function HeroParallaxDemo() {
    return (
          <HeroParallax products={products} />
      );
    }
export const products = [
  {
    title: "Buycex Market",
    link: "https://buycex.com",
    thumbnail:BuycexMarket.src,
  },
  {
    title: "Buycex Trade",
    link: "https://buycex.com",
    thumbnail: BuycexTrade.src,
  },
  {
    title: "Buycex Profile",
    link: "https://buycex-repo.vercel.app/trade/p2p/advertiserdetail",
    thumbnail:JaleebiHome.src,
  },

  {
    title: "Buycex Chat",
    link: "https://buycex.com",
    thumbnail:BuycexChat.src,
  },
  {
    title: "Buycex Profile",
    link: "https://buycex-repo.vercel.app/trade/p2p/advertiserdetail",
    thumbnail:BuycexProfile.src,
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Jaleebi Store",
    link: "https://jalebiexpress.pk/product-category/jalebi-t-shirt/",
    thumbnail:JaleebiEcomm.src,
  },
  {
    title: "SafeDeposit",
    link: "https://safedeposit.online",
    thumbnail:SafeDepositHome.src,
  },
  {
    title: "Hz4jobs Home",
    link: "https://www.hz4jobs.com/",
    thumbnail:hz4jobsHome.src,
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:SafeDepositLogin.src,
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Buycex Convert",
    link: "https://buycex.com",
    thumbnail:BuycexConvert.src,
  },
  {
    title: "Jaleebi Reviews",
    link: "https://jalebiexpress.pk/experiences/",
    thumbnail:JaleebiReviews.src,
  },
  {
    title: "Smasimltd",
    link: "https://smasimltd.com",
    thumbnail:SamasimHome.src,
  },
  {
    title: "Samasim Arabic",
    link: "https://smasimltd.com/ar/",
    thumbnail:SamasimArabic.src,
  },
];
