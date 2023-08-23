'use client'

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import "../styles/globals.css";
import NewsletterSubscribe from "./NewsletterSubscribe";

export default function Home() {

  return (
    <div className="bg-gradient-to-b from-black via-black to-gray-900 min-h-screen overflow-y-auto flex-col justify-center items-center">
        <Head>
          <title>Fashion Sketch App</title>
        </Head>

        {/* Site banner*/}
        <div className="w-screen">
          <Image
              className="top-3 left-3 absolute"
              src="/Logo-removebg-preview.png" // 
              alt="Site Logo"
              width={150}
              height={70}
            />
          {/*<button className="font-bold font-lg bg-gradient-to-r from-gray-900 to-emerald-900 
            absolute top-5 right-2 p-2 rounded-xl">
            Try Now →
            </button> */}
        </div>

        {/* MOBILE: Heading and Site Logo */}
        <div className="bg-[url('/image1.png')] w-screen h-screen p-8 md:hidden flex justify-center items-center">
          <div>
            <h1 className="text-4xl font-sans text-white font-bold text-center">
              Make beautiful fashion sketch designs without drawing
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
            <div className="mt-5">
              <NewsletterSubscribe/>
            </div> 
          </div>  
        </div>

        {/* PC: Heading and Site Logo */}
        <div className="pb-5 hidden md:block w-screen bg-[url('/image2.png')]">
          <div className="pt-24">
            <h1 className="text-4xl font-sans text-white font-bold text-center">
              Make beautiful fashion sketch designs without drawing
            </h1>
          </div>
          <div className="mt-4">
            <Image
              className="mx-auto p-3"
              src="/icon-removebg-preview.png" // 
              alt="Site Logo"
              width={220}
              height={200}
            />
          </div>
          <div className="pb-7 mt-3">
            <NewsletterSubscribe/>
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
        </div>
    </div>
  );
}
