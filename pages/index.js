'use client'

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import "../styles/globals.css";
import { Analytics } from '@vercel/analytics/react';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function Home() {
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/prediction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: e.target.prompt.value,
      }),
    });
    let prediction = await response.json();
    if (response.status !== 201) {
      setError(prediction.detail);
      return;
    }
    setPrediction(prediction);

    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await sleep(1000);
      const response = await fetch("/api/" + prediction.id);
      prediction = await response.json();
      if (response.status !== 200) {
        setError(prediction.detail);
        return;
      }
      console.log({prediction})
      setPrediction(prediction);
    }
  };

  const handleReload = () => {
    setPrediction(null); // Reset the prediction state
  };

  return (
    <div className="bg-gradient-to-b from-black via-black to-gray-900 min-h-screen overflow-y-auto flex-col justify-center items-center]">
        <Head>
          <title>Fashion Sketch App</title>
        </Head>

        {/* Site banner*/}
        <div className="w-screen h-auto bg-black">
          <Image
              className="top-3 left-3 absolute"
              src="/Logo.png" // 
              alt="Site Logo"
              width={150}
              height={70}
            />
          <button className="font-bold font-lg bg-gradient-to-r from-gray-900 to-emerald-900 
            absolute top-4 right-2 p-2 rounded-xl">
            Try Now →
          </button> 
        </div>

        {/* Heading and Site Logo */}
        <div className="mt-24 pb-4">
          <h1 className="text-4xl font-sans text-white font-bold text-center">
            Make beautiful fashion sketch designs without drawing
          </h1>
          <Image
            className="mx-auto p-3"
            src="/icon.png" // 
            alt="Site Logo"
            width={200}
            height={200}
          />
        </div>

        {/* Info and media about app capabilities */}
        <div className="text-left p-8">
          {/* Openning sentence describing app */}
          <p className="font-bold text-white font-lg">
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
              src="/gallary.png" 
              alt="Site Logo"
              width={300}
              height={500}
            />
          </div>
        </div>
        
        <div className="rounded-lg w-1/2 p-8 bg-stone-950 mx-auto">
          <p className="text-lg font-sans mb-1 text-white">
          </p>
          <form className="w-full" >
            <input
              type="text"
              name="sign up"
              placeholder="Type your email..."
              className="w-full font-sans bg-black text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="m-2 p-2 font-sans px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700"
            >
              Create
            </button>
          </form>
        </div>
        <div className="p-6 bg-stone-950 rounded-2xl bg-opacity-70 shadow-md">
          <p className="text-lg font-sans mb-1 text-white">
            Describe your sketch, be as detailed as you'd like!
          </p>

        <form className="bg-colo p-2 rounded-lg" onSubmit={handleSubmit}>
          <input
            type="text"
            name="prompt"
            placeholder="Enter a description here"
            className="w-full font-sans bg-black text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="mt-4 p-2 font-sans px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700"
          >
            Create
          </button>
        </form>

        {/* Error message */}
        {error && <div className="mt-2 text-red-500">{error}</div>}

        {/* Display prediction */}
        {prediction && (
          <div className="mt-4">
            {prediction.output && (
              <div className="mb-2">
                <Image
                  src={prediction.output[prediction.output.length - 1]}
                  alt="output"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-md shadow-md"
                />
              </div>
            )}
            <p className="text-green-600 font-sans">Status: {prediction.status}</p>
            {/* Reload Button */}
            <button
              className="absolute top-5 right-5 font-sans bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700"
              onClick={handleReload}
            >
              Try again
            </button>
          </div>
        )}
      </div>
      <Analytics />
    </div>
  );
}
