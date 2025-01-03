'use client'

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import "../styles/globals.css";
import NewsletterSubscribe from "./NewsletterSubscribe";
import { Analytics } from '@vercel/analytics/react';
import Link from 'next/link';

export default function Home() {

  return (
    <div className="bg-gradient-to-b from-black via-black to-gray-900 min-h-screen overflow-y-auto flex-col justify-center items-center">
        <Head>
          <title>DTB Insights | Network Architecture & Wireless Consulting</title>
          <meta name="description" content="Dalitso T Banda - Network architecture and wireless consulting expert. Learn about telecommunications, Linux systems, and network protocols." />
          <meta name="keywords" content="Network Architecture, Wireless Connectivity, Telecommunications, Linux Systems, Network Protocols" />
          <meta property="og:title" content="DTB Insights | Network Architecture & Wireless Consulting" />
          <meta property="og:description" content="Consulting on network architecture and wireless connectivity. Explore advanced telecommunications and network protocols." />
          <meta property="og:image" content="https://dtbinsights.com/Logo.png" />
          <meta property="og:url" content="https://dtbinsights.com/" />
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:title" content="DTB Insights | Network Architecture & Wireless Consulting"/>
          <meta name="twitter:description" content="Dalitso T Banda specializes in advanced network architecture and wireless systems consulting."/>
          <meta name="twitter:image" content="https://dtbinsights.com/Logo.png"/>

           {/* Structured Data (JSON-LD) */}
           <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "DTB Insights",
                "url": "https://dtbinsights.com/",
                "logo": "https://dtbinsights.com/Logo.png",
                "description": "Dalitso T Banda offers consulting services in network architecture and wireless connectivity.",
                "sameAs": [
                  "https://www.linkedin.com/in/dalitso-banda-6a5435189",
                  "https://wa.me/27769547017"
                ]
              })
            }}
          />
        </Head>


        <Analytics />

        {/* Site banner*/}
        <div className="w-screen">
          <Image
              className="top-3 left-3 absolute"
              src="/LogoDTB.png" // 
              alt="Site Logo"
              width={150}
              height={70}
            />
          <a href="#bottom" className="font-bold text-sm bg-gradient-to-r from-gray-900 to-emerald-900 
            absolute top-5 right-3 p-2 rounded-3xl opacity-80">
            Get in touch →
          </a>
        </div>

        {/* MOBILE: Heading and Site Logo */}
      <div className="bg-[url('/BG_img.png')] bg-cover bg-center w-full h-full p-8 md:hidden flex justify-center items-center">
        <div>
            <h1 className="text-4xl pt-24 font-sans text-white font-bold text-center">
            Advanced Connectivity and Network Infrastructure Consulting
            </h1>
            <div className="mt-5">
              <Image
                className="mx-auto p-3"
                src="/rating_icon.png" // 
                alt="Site Logo"
                width={220}
                height={200}
              />
            </div>
            <div className="mt-5 pb-7">
              <NewsletterSubscribe/>
            </div> 
          </div>  
        </div>

        {/* PC: Heading and Site Logo */}
        <div className="pb-10 hidden md:block bg-cover bg-center w-full h-full bg-[url('/BG_img.png')]">
          <div className="pt-24">
            <h1 className="text-4xl font-sans text-white font-bold text-center">
            Advanced Connectivity and Network Infrastructure Consulting            
            </h1>
          </div>
          <div className="mt-5">
            <Image
              className="mx-auto p-3"
              src="/rating_icon.png" // 
              alt="Site Logo"
              width={220}
              height={200}
            />
          </div>
          <div className="pb-5 mt-3">
            <NewsletterSubscribe/>
          </div> 
        </div>

        {/* @Mobile: Info and media about app capabilities */}
        <div className="text-left p-8 md:hidden">
          {/* Opening sentence describing app */}
          <p className="font-bold text-green-700 text-xl mb-4">
           About Me
          </p>
          <p className="font text-white text-lg mb-4">
            My name is Dalitso T Banda. I'm an engineer specialising in network architecture and wireless connectivity.
          </p>
          <p className="font text-white text-lg">
           I am interested in advanced Telecommunications, Network Protocols and Architecture, and Linux Systems. 
          </p>
          <div className="rounded-full p-4">
              <Image
                className="mx-auto rounded-full opacity-80"
                src="/Headshot.png" 
                alt="Site Logo"
                width={120}
                height={120}
              />
          </div>
          <p className="font text-white text-lg mb-4">
            Explore my insights on these topics by following my blog and subscribing to my newsletter.  
          </p>
          <p className="font text-white text-lg mb-4">
            Feel welcome to reach out to me for collaboration and consultation.
          </p>

          {/*menu selector */}
          <div className="w-full bg-gradient-to-r from-gray-900 to-emerald-900 p-3 mt-8 mb-8 rounded-full opacity-80 flex">
            <div className="w-1/3 flex justify-center items-center hover:bg-slate-700 rounded-l-full"> 
              <Link legacyBehavior href="#bottom">
                <a className="font-bold text-white text-xl text-center">
                  Get in touch
                </a>
              </Link>
            </div>
            <div className="w-1/3 flex justify-center items-center hover:bg-slate-700"> 
              <Link legacyBehavior href="blog"> 
                <a className="font-bold text-white text-xl text-center">
                  Blog
                </a>
              </Link>
            </div>
            <div className="w-1/3 flex justify-center items-center hover:bg-slate-700 rounded-r-full"> 
              <Link legacyBehavior href="#top">
                <a className="font-bold text-white text-xl text-center">
                  Newsletter
                </a>
              </Link>
            </div> 
          </div>

          {/* Get intouch section */}
          <p className="font-bold text-green-700 text-xl mt-4">
              Get in touch
          </p>
        </div>

        {/* @Laptop */}
        {/* @Laptop: Info and media about app capabilities */}
        <div className="text-left p-16 hidden md:block">
          {/* Openning sentence describing app */}
          <div className="flex">
            <div className="w-3/4">
            <p className="font-bold text-green-700 text-2xl p-2">
              About Me
            </p>
            <p className=" text-white p-2 text-xl font-lg">
              My name is Dalitso T Banda. I'm an engineer specialising in network architecture and wireless connectivity.
            </p>
            <p className=" text-white p-2 text-xl font-lg">
            I am interested in advanced Telecommunications, Network Protocols and Architecture, and Linux Systems. 
            </p>
            <p className=" text-white p-2 text-xl font-lg">
            Explore my insights on these topics by following my blog and subscribing to my newsletter.  
            </p>
            <p className=" text-white p-2 text-xl font-lg">
              Feel welcome to reach out to me for collaboration and consultation.
            </p>
            </div>
            <div className="rounded-full p-8 w-1/4">
              <Image
                className="mx-auto rounded-full opacity-80"
                src="/Headshot.png" 
                alt="Site Logo"
                width={150}
                height={150}
              />
            </div>
          </div>

          {/*menu selector */}
          <div className="w-full bg-gradient-to-r from-gray-900 to-emerald-900 p-3 mt-8 mb-8 rounded-full opacity-80 flex">
            <div className="w-1/3 flex justify-center items-center hover:bg-slate-700 rounded-l-full"> 
              <Link legacyBehavior href="#bottom">
                <a className="font-bold text-white text-2xl text-center">
                  Get in touch
                </a>
              </Link>
            </div>
            <div className="w-1/3 flex justify-center items-center hover:bg-slate-700"> 
              <Link legacyBehavior href="blog"> 
                <a className="font-bold text-white text-2xl text-center">
                  Blog
                </a>
              </Link>
            </div>
            <div className="w-1/3 flex justify-center items-center hover:bg-slate-700 rounded-r-full"> 
              <Link legacyBehavior href="#top">
                <a className="font-bold text-white text-2xl text-center">
                  Newsletter
                </a>
              </Link>
            </div> 
          </div>

          {/* Get in touch section */}
          <p className="font-bold text-green-700 text-xl mt-4">
              Get in touch
          </p>
        </div>

        {/* Contact Card */}
        <div className="p-6 max-w-md mx-auto bg-black rounded-lg shadow-lg mb-8">
          <p className="font-bold text-gray-100 text-xl mb-4 text-center">
              Contacts
          </p>
          {/* Email Contact */}
          <div className="flex items-center space-x-2 mb-2">
              <Image
                className=""
                src="/Email_Icon.png" // 
                alt="Site Logo"
                width={50}
                height={22}
              />
            <a
              href="mailto:tenthani2@gmail.com"
              className="text-white font-semibold hover:text-blue-800"
            >
              Email
            </a>
          </div>

          {/* WhatsApp Contact */}
          <div className="flex items-center space-x-2 mb-4">
            <Image
                className=""
                src="/WhatsApp_Icon.png" // 
                alt="Site Logo"
                width={50}
                height={22}
              />
            <a
              href="https://wa.me/27769547017"
              className="text-green-600 font-semibold hover:text-green-800"
            >
              WhatsApp
            </a>
          </div>

          {/* LinkedIn Contact */}
          <div className="flex items-center space-x-2">
          <Image
                className=""
                src="/LinkedIn_Icon.png" // 
                alt="Site Logo"
                width={50}
                height={22}
              />
            <a
              href="https://www.linkedin.com/in/dalitso-banda-6a5435189"
              className="text-blue-600 font-semibold hover:text-blue-800"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/*footer*/}
        <div id="bottom" className="bg-black h-40">
          <div className="w-screen h-20 p-3">
            <Image
                className=" left-3 absolute"
                src="/LogoDTB.png" // 
                alt="Site Logo"
                width={150}
                height={70}
              />
            <a href="#top" className="cursor-pointer mt-1 p-2 font-sans right-3 absolute bg-transperant text-white hover:bg-gradient-to-b 
            from-emerald-900 to-gray-900 focus:outline-emerald-900 focus:ring-2 focus:ring-green-700 
            rounded-3xl text-lg border border-white animate-pulse-button">
              Sign up
            </a>
          </div>
          <p className="ml-3 mt-3">copyright © 2024</p>
        </div>
    </div>
  );
}
