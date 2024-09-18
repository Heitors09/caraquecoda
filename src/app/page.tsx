'use client'

import HomeSection from "@/components/home-section/home-section";
import ContactForm from "@/components/contact-form/contact-form";
import CardAbout from "@/components/card-about/card-about";
import CardServices from "@/components/card-services/card-services";
import { Award, Code, Star, StarIcon, Terminal } from "lucide-react";
import ShineBorder from "@/components/magicui/shine-border";
import Image from "next/image";
import Reviews from "@/components/reviews/reviews";







export default function Home() {
  

  
  return (
  <div className="flex flex-col items-center">
     <HomeSection/>   
     <CardAbout/>
     <CardServices/>
     <Reviews/>
  </div>   
  );
}
