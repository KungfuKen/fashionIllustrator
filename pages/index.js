'use client'

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import "../styles/globals.css";
import { Analytics } from '@vercel/analytics/react';

export default function Home() {

  return (
    <div className="bg-gradient-to-b from-black via-black to-gray-900 min-h-screen overflow-y-auto flex-col justify-center items-center">
        <Head>
          <title>Fashion Sketcher</title>
        </Head>

        <Analytics />

        {/* Site banner*/}
        <div className="w-screen">
          <Image
              className="top-3 left-3 absolute"
              src="/Logo-removebg-preview.png" // 
              alt="Site Logo"
              width={150}
              height={70}
            />
          <a href="#bottom" className="font-bold text-sm bg-gradient-to-r from-gray-900 to-emerald-900 
            absolute top-5 right-3 p-2 rounded-3xl opacity-80">
            Pricing →
          </a>
        </div>

        {/* MOBILE: Heading and Site Logo */}
        <div className="bg-[url('/image1.png')] w-screen h-fit p-8 md:hidden flex justify-center items-center">
          <div>
            <h1 className="text-4xl pt-24 font-sans text-white font-bold text-center">
              Create Fashion Sketches With Little Drawing
            </h1>
            <div className="mt-5">
              <Image
                className="mx-auto p-3"
                src="/icon-removebg-preview.png" // 
                alt="Site Logo"
                width={220}
                height={200}
              />
            </div>

            <div className="pb-5 mt-3">
              <h3 className="mb-1 text-2xl font-sans text-white font-bold text-center">Join the waiting list</h3>

              <div className="flex justify-center items-center w-full">
                  <a href="https://zc.vg/j4w6i" className="cursor-pointer mt-2 p-4 font-sans px-4 py-2 bg-transperant text-white hover:bg-gradient-to-b 
                  from-emerald-900 to-gray-900 focus:outline-emerald-900 focus:ring-2 focus:ring-green-700
                  rounded-3xl text-lg border border-white animate-pulse-button">
                  Sign-up
                  </a>
              </div>          
            </div>  
          </div>  
        </div>

        {/* PC: Heading and Site Logo */}
        <div className="pb-10 hidden md:block w-screen bg-[url('/image2.png')]">
          <div className="pt-24">
            <h1 className="text-4xl font-sans text-white font-bold text-center">
              Create Fashion Sketches With Little Drawing
            </h1>
          </div>
          <div className="mt-5">
            <Image
              className="mx-auto p-3"
              src="/icon-removebg-preview.png" // 
              alt="Site Logo"
              width={220}
              height={200}
            />
          </div>
          <div className="pb-5 mt-3">
            <h3 className="mb-1 text-2xl font-sans text-white font-bold text-center">Join the waiting list</h3>

            <div className="flex justify-center items-center w-full">
                <a href="https://zc.vg/j4w6i" className="cursor-pointer mt-2 p-4 font-sans px-4 py-2 bg-transperant text-white hover:bg-gradient-to-b 
                from-emerald-900 to-gray-900 focus:outline-emerald-900 focus:ring-2 focus:ring-green-700
                rounded-3xl text-lg border border-white animate-pulse-button">
                Sign-up
                </a>
            </div>          
          </div> 
        </div>

        {/* @Mobile: Info and media about app capabilities */}
        <div className="text-left p-8 md:hidden">
          {/* Openning sentence describing app */}
          <p className="font-bold text-white text-lg">
            Create beautiful fashion designs quickly and easily by using verbal discriptions. 
            Make edits and adjust your designs easily with online tools.           
          </p>
          <div className="rounded-2xl p-8">
            <Image
              className="mx-auto rounded-3xl opacity-80"
              src="/frontPageGif.gif" 
              alt="Site Logo"
              width={270}
              height={500}
            />
          </div>

          {/* Create designs section */}
          <h1 className="text-4xl text-white font-sans font-bold pb-4">
            Create beautiful designs
          </h1>
          <p className="font-bold text-white font-lg">
             Write descriptions of the fashion designs you would like to create, you can be as detailed as you like. 
             This will then generate the image of this description.
          </p>
          <div className="rounded-2xl p-8">
            <Image
              className="mx-auto rounded-3xl opacity-80"
              src="/PromptExample.gif" 
              alt="Site Logo"
              width={270}
              height={500}
            />
          </div>

          {/* Edit designs section */}
          <h1 className="text-4xl text-white font-sans font-bold pb-4">
            Edit designs to perfection
          </h1>
          <p className="font-bold text-white font-lg">
             Fine tune your designs with the editor. Draw on details you would like to edit or remove and the designs will be 
             recreated with your changes. 
          </p>
          <div className="rounded-2xl p-8">
            <Image
              className="mx-auto rounded-3xl opacity-80"
              src="/ShoulderEdit.gif" 
              alt="Site Logo"
              width={270}
              height={500}
            />
            <Image
              className="mx-auto rounded-3xl opacity-80 pt-1"
              src="/EditPrompt.png" 
              alt="Site Logo"
              width={270}
              height={500}
            />
          </div>

          {/* Get inspiration sentence */}
          <h1 className="text-4xl text-white font-sans font-bold pb-4">
            Get inspiration
          </h1>
          <p className="font-bold text-white font-lg">
            You get inspiration from our gallary of pervious designs. You can edit pervious designs and make them your own.
          </p>
          <div className="rounded-2xl p-8">
            <Image
              className="mx-auto rounded-3xl opacity-80"
              src="/gallary1.gif" 
              alt="Site Logo"
              width={300}
              height={500}
            />
          </div>

          {/* Pricing section */}
         
          <h1 className="text-4xl text-white font-sans font-bold pb-4">
            Pricing 
          </h1>
          <p className="font-bold text-white font-lg">
            The pricing is yet to be confirmed but free trials, and a free mode will be offered. The paid pricing will be around 
            $15 to $25 per month. 
          </p>
          <div className="rounded-2xl p-8">
            <Image
              className="mx-auto rounded-3xl opacity-80"
              src="/pricing.png" 
              alt="Site Logo"
              width={300}
              height={500}
            />
          </div>
        </div>

        {/* @Laptop */}
        {/* @Laptop: Info and media about app capabilities */}
        <div className="text-left p-8 hidden md:block">
          {/* Openning sentence describing app */}
          <div className="flex">
            <div className="w-1/2">
              <h1 className="text-3xl p-8 font-bold text-white font-lg">
                Create beautiful fashion designs quickly and easily by using verbal discriptions. 
                Make edits and adjust your designs easily with online tools. 
              </h1>
            </div>
            <div className="rounded-2xl p-8 w-1/2">
              <Image
                className="mx-auto rounded-3xl opacity-80"
                src="/frontPageGif.gif" 
                alt="Site Logo"
                width={270}
                height={500}
              />
            </div>
          </div>
          {/* Create designs section */}
          <div className="flex">
            <div className="rounded-2xl p-8 w-1/2">
              <Image
                className="mx-auto rounded-3xl opacity-80"
                src="/PromptExample.gif" 
                alt="Site Logo"
                width={270}
                height={500}
              />
            </div>
            <div className="w-1/2 p-8">
              <h1 className="text-4xl text-white font-sans font-bold pb-4">
                Create beautiful designs
              </h1>
              <p className="text-2xl text-white font-lg">
                Write descriptions of the fashion designs you would like to create, you can be as detailed as you like. 
                This will then generate the image of this description.
              </p>
            </div>
          </div>

          {/* Edit designs section */}
          <div className="flex">
            <div className="w-1/2 p-8">
              <h1 className="text-4xl text-white font-sans font-bold pb-4">
                Edit designs to perfection
              </h1>
              <p className="text-2xl text-white font-lg">
                Fine tune your designs with the editor. Draw on details you would like to edit or remove and the designs will be 
                recreated with your changes. 
              </p>
            </div>
          <div className="rounded-2xl p-8 w-1/2">
            <Image
              className="mx-auto rounded-3xl opacity-80"
              src="/ShoulderEdit.gif" 
              alt="Site Logo"
              width={270}
              height={500}
            />
            <Image
              className="mx-auto rounded-3xl opacity-80 pt-1"
              src="/EditPrompt.png" 
              alt="Site Logo"
              width={270}
              height={500}
            />
          </div>
        </div>

          {/* Get inspiration sentence */}
          <div className="flex">
            <div className="rounded-2xl p-8 w-1/2">
                <Image
                  className="mx-auto rounded-3xl opacity-80"
                  src="/gallary1.gif" 
                  alt="Site Logo"
                  width={300}
                  height={500}
                />
            </div>
            <div className="w-1/2 p-8">
              <h1 className="text-4xl text-white font-sans font-bold pb-4">
                Get inspiration
              </h1>
              <p className="text-2xl text-white font-lg">
                You get inspiration from our gallary of pervious designs. You can edit pervious designs and make them your own.
              </p>
            </div>
          </div>

          {/* Pricing section */}
          <div className="flex">
            <div className="w-1/2 p-8">
              <h1 className="text-4xl text-white font-sans font-bold pb-4">
                Pricing 
              </h1>
              <p className="text-2xl text-white font-lg">
                The pricing is yet to be confirmed but free trials, and a free mode will be offered. The paid pricing will be around 
                $15 to $25 per month.  
              </p>
            </div>
            <div className="rounded-2xl p-8 w-1/2">
              <Image
                className="mx-auto rounded-3xl opacity-80"
                src="/pricing.png" 
                alt="Site Logo"
                width={300}
                height={500}
              />
            </div>
          </div>
        
        </div>
        <div id="bottom" className="bg-black h-40">
          <div className="w-screen h-20 p-3">
            <Image
                className=" left-3 absolute"
                src="/Logo-removebg-preview.png" // 
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
          <div className="w-fit absolute right-3">
          <a href="https://www.instagram.com/fashion_illustrata" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl shadow hover:opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.5 3.5a8 8 0 0111.4 0 8 8 0 010 11.4 8 8 0 01-11.4 0 8 8 0 010-11.4zM16 11a4 4 0 11-8 0 4 4 0 018 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.5 6.5l1 1" />
            </svg>
            <span>Instagram</span>
          </a>
          </div>
          <p className="ml-3 mt-3">copyright © 2025</p>
        </div>
    </div>
  );
}
