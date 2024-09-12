import { BackgroundBeams } from "./components/ui/background-beam";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import BlurFade from "@/components/magicui/blur-fade";
import { BarChart, ChevronDown, Cloud, Code, Cpu, Database, Facebook, Instagram, Linkedin, PaperclipIcon, ServerCog, ShieldAlert, Smartphone, Twitter, Webhook, Zap } from "lucide-react";
import { CardBox } from "@/components/cardbox/cardbox";
import HomeSection from "@/components/home-section/home-section";
import ContactForm from "@/components/contact-form/contact-form";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { WavyBackground } from "@/components/ui/wavy-background";
import ShineBorder from "@/components/magicui/shine-border";
import CardAbout from "@/components/card-about/card-about";






export default function Home() {
  return (
  <div className="flex flex-col items-center">
    <HomeSection/>   
     <div className=" h-screen w-full my-12 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h3 className="text-2xl text-white my-5 flex gap-2">Serviços<span className="text-[#FFC700]">disponiveis</span></h3>
      </div>
      <div className=" w-full gap-5 grid px-12 grid-cols-4 my-5">
         <ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-2xl text-white">
           <Webhook className="size-12 bg-[#FFC700] rounded-[8px] p-2"/>
           <h3 className="text-xl">Desenvolvimento Web</h3>
           <p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
           <p className="text-[#FFC700] text-xs">Saiba mais</p>
         </ShineBorder>
         <ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-2xl text-white">
  <BarChart className="size-12 bg-[#FFC700] rounded-[8px] p-2" />
  <h3 className="text-xl">Análise de Dados e Visualização</h3>
  <p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  <p className="text-[#FFC700] text-xs">Saiba mais</p>
</ShineBorder>

         <ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-2xl text-white">
  <ServerCog className="size-12 bg-[#FFC700] rounded-[8px] p-2" />
  <h3 className="text-xl">DevOps e Automação de Infraestrutura</h3>
  <p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  <p className="text-[#FFC700] text-xs">Saiba mais</p>
</ShineBorder>

<ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-2xl text-white">
  <Database className="size-12 bg-[#FFC700] rounded-[8px] p-2" />
  <h3 className="text-xl">Gerenciamento de Bancos de Dados</h3>
  <p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  <p className="text-[#FFC700] text-xs">Saiba mais</p>
</ShineBorder>

<ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-2xl text-white">
  <ShieldAlert className="size-12 bg-[#FFC700] rounded-[8px] p-2" />
  <h3 className="text-xl">Segurança da Informação</h3>
  <p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  <p className="text-[#FFC700] text-xs">Saiba mais</p>
</ShineBorder>

<ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-2xl text-white">
  <Cloud className="size-12 bg-[#FFC700] rounded-[8px] p-2" />
  <h3 className="text-xl">Arquitetura em Nuvem</h3>
  <p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  <p className="text-[#FFC700] text-xs">Saiba mais</p>
</ShineBorder>

<ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-2xl text-white">
  <Cpu className="size-12 bg-[#FFC700] rounded-[8px] p-2" />
  <h3 className="text-xl">Desenvolvimento de Sistemas Embutidos</h3>
  <p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  <p className="text-[#FFC700] text-xs">Saiba mais</p>
</ShineBorder>

<ShineBorder color={["#FFF9C4", "#FFB74D", "#795548"]} className="bg-[#0D0D0D] px-5 py-7 items-start flex flex-col gap-4 w-full h-full rounded-2xl text-white">
  <Zap className="size-12 bg-[#FFC700] rounded-[8px] p-2" />
  <h3 className="text-xl">Automação de Processos de Negócio</h3>
  <p className="text-xs opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  <p className="text-[#FFC700] text-xs">Saiba mais</p>
</ShineBorder>
      </div>
     </div>
    <ContactForm/>
  </div>   
  );
}
