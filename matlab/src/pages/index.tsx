"use client";
import Image from "next/image";
import { Shojumaru } from "next/font/google";
import { FirstSection } from "./../components/FirstSection";
import { SecondSection } from "@/components/SecondSection";
import { ThirdSection } from "@/components/ThirdSection";
import { FourthSection } from "@/components/FourthSection";
import { FifthSection } from "@/components/FifthSection";
import { SixthSection } from "@/components/SixthSection";
import { SeventhSection } from "@/components/SeventhSection";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="text-white bg-black flex flex-col justify-between min-h-screen w-[1512px]">
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
            <SixthSection />
            <SeventhSection />
        </div>
    );
}
