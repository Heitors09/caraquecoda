'use client'

import { BackgroundBeams } from "./components/ui/background-beam";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import BlurFade from "@/components/magicui/blur-fade";
import { ArrowRight, BarChart, ChevronDown, ChevronRight, CircuitBoard, Cloud, Code, Cpu, Database, Facebook, Flame, Hexagon, Instagram, Linkedin, PaperclipIcon, ServerCog, ShieldAlert, Smartphone, Sun, Twitter, Webhook, Zap } from "lucide-react";
import { CardBox } from "@/components/cardbox/cardbox";
import HomeSection from "@/components/home-section/home-section";
import ContactForm from "@/components/contact-form/contact-form";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { WavyBackground } from "@/components/ui/wavy-background";
import ShineBorder from "@/components/magicui/shine-border";
import CardServices from "@/components/card-services/card-services";
import CardAbout from "@/components/card-about/card-about";
import DevelopmentStages from "@/components/development-stages/development-stages";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/bundle';
import { useEffect } from "react";
import { EffectCards } from 'swiper/modules';
import Reviews from "@/components/reviews/reviews";







export default function Home() {
  

  
  return (
  <div className="flex flex-col items-center">
     <HomeSection/>   
     <CardAbout/>
     <CardServices/>
     <DevelopmentStages/>
     <Reviews/>
     <ContactForm/>
  </div>   
  );
}
