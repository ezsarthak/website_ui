import dynamic from 'next/dynamic';
import React from "react";
import WebflowPageId from "@/components/WebflowPageId";
import HeroSection_0 from "@/components/HeroSection_0";
import AboutSection_1 from "@/components/AboutSection_1";

const ServicesSection_2 = dynamic(() => import("@/components/ServicesSection_2"));
const Section4_3 = dynamic(() => import("@/components/Section4_3"));
const Section6_5 = dynamic(() => import("@/components/Section6_5"));
const Section7_6 = dynamic(() => import("@/components/Section7_6"));
const Section8_7 = dynamic(() => import("@/components/Section8_7"));
const Section10_9 = dynamic(() => import("@/components/Section10_9"));
const Section11_10 = dynamic(() => import("@/components/Section11_10"));
const Section13_12 = dynamic(() => import("@/components/Section13_12"));
const Section14_13 = dynamic(() => import("@/components/Section14_13"));


export default function Home() {
  return (
    <>
      <WebflowPageId pageId="696f017570bc35c55e7849ad" />
      <main>
        <HeroSection_0 />
        <AboutSection_1 />
        <ServicesSection_2 />
        <Section4_3 />

        <Section6_5 />
        <Section7_6 />
        <Section8_7 />

        <Section10_9 />
        <Section11_10 />

        <Section13_12 />
        <Section14_13 />

      </main>
    </>
  );
}
