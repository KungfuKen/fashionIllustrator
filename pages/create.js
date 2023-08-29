'use client'

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import "../styles/globals.css";

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

  return(
    <div className="bg-gradient-to-b from-black via-black to-gray-900 min-h-screen overflow-y-auto flex-col justify-center">
      <Head>
          <title>Create Design</title>
      </Head>
      {/* Site banner*/}
      <div className="w-screen h-auto bg-black">
          <Image
              className="top-2 left-2 absolute"
              src="/Logo.png" // 
              alt="Site Logo"
              width={150}
              height={70}
            />
      </div>
      {/*Email entry form 
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
      */}

      <div className="p-6 bg-stone-950 rounded-2xl bg-opacity-70 h-auto
      opacity-50 shadow-md justify-center flex-col">
        <p className="text-2xl font-sans font-bold mb-1 text-center text-white">
          Start Your Design
        </p>

        <form className="p-2 rounded-2xl" onSubmit={handleSubmit}>
          <textarea
            type="text"
            name="prompt"
            placeholder="Example: Long white dress, colourful bottom, sweetheart neckline, long sleeves, black gloves."
            className="w-1/2 font-sans bg-black text-white px-3 py-2 rounded-md 
            focus:outline-none focus:ring-2 focus:ring-green-700 h-20"
          />
          <button
            type="submit"
            className="mt-4 p-2 font-sans px-4 py-2 bg-black text-white hover:bg-gradient-to-b 
            from-emerald-900 to-black focus:outline-emerald-900 focus:ring-2 focus:ring-green-700 
            rounded-3xl text-lg border border-blue-500">
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
            className="absolute top-5 right-5 font-sans text-white px-4 py-2 rounded-md hover:bg-gradient-to-b border border-blue-500
            from-emerald-900 to-black focus:outline-emerald-900 focus:ring-2 focus:ring-green-700 focus:outline-none"
            onClick={handleReload}
          >
            Try again
          </button>
        </div>
      )}
    </div>
  </div>
  );
}