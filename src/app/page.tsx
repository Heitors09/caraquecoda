import { BackgroundBeams } from "./components/ui/background-beam";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import BlurFade from "@/components/magicui/blur-fade";
import { BarChart, ChevronDown, CircuitBoard, Cloud, Code, Cpu, Database, Facebook, Instagram, Linkedin, PaperclipIcon, ServerCog, ShieldAlert, Smartphone, Twitter, Webhook, Zap } from "lucide-react";
import { CardBox } from "@/components/cardbox/cardbox";
import HomeSection from "@/components/home-section/home-section";
import ContactForm from "@/components/contact-form/contact-form";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { WavyBackground } from "@/components/ui/wavy-background";
import ShineBorder from "@/components/magicui/shine-border";
import CardServices from "@/components/card-services/card-services";
import CardAbout from "@/components/card-about/card-about";






export default function Home() {
  return (
  <div className="flex flex-col items-center">
     <HomeSection/>   
     <CardAbout/>
     <CardServices/>
     <div className=" text-white w-full h-screen mt-32 px-32">
      <div className="flex flex-col gap-7 text-sm">
       <h3 className="text-5xl font-bold w-[900px]">Conheça nossas <span className="text-[#FFC700]">etapas</span> de desenvolvimento</h3>
       <p className="opacity-70 w-[700px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
      </div>
      <div className="bg-[#0D0D0D] shadow-lg w-[1000px] p-5 flex flex-col gap-2 rounded-[8px] mt-7">
         <p>Etapas</p>
         <div className="h-[1px] w-full bg-zinc-700"/>
         <div className="flex">
           <div className="w-56 hover:bg-red-500 clip-box  rounded-l-[8px] h-12 bg-zinc-800 flex items-center justify-center gap-1 shadow-lg ">
            <p className="text-[#FFC700]">01.</p>
            <p>Contato</p>
            </div>
           <div className="w-56 clip-box-left -ml-[10px] flex items-center justify-center h-12 bg-zinc-800 gap-1 shadow-lg ">
           <p className="text-[#FFC700]">02.</p>
            <p>Análise</p>
           </div>
           <div className="w-56 clip-box-left flex items-center justify-center  h-12 bg-zinc-800 gap-1 shadow-lg">
           <p className="text-[#FFC700]">03.</p>
            <p>Design</p>
           </div>
           <div className="w-56 clip-box-left flex items-center justify-center  h-12 bg-zinc-800 gap-1 shadow-lg">
           <p className="text-[#FFC700]">04.</p>
            <p>Coding</p>
           </div>
           <div className="w-56 clip-box-inward-left rounded-r-[8px] flex items-center justify-center  h-12 bg-zinc-800 gap-1 shadow-lg">
           <p className="text-[#FFC700]">05.</p>
            <p>Entrega</p>
           </div>

         </div>
      </div>
     </div>
     <ContactForm/>
  </div>   
  );
}
