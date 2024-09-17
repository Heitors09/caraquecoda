'use client'

import HomeSection from "@/components/home-section/home-section";
import ContactForm from "@/components/contact-form/contact-form";
import CardAbout from "@/components/card-about/card-about";
import CardServices from "@/components/card-services/card-services";







export default function Home() {
  

  
  return (
  <div className="flex flex-col items-center">
     <HomeSection/>   
     <CardAbout/>
     <CardServices/>
  </div>   
  );
}
