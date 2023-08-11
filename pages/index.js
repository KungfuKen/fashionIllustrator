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

  return (
    <div className="bg-black min-h-screen w-screen flex flex-col justify-center items-center bg-[url('/76YS.gif')]">
        <Head>
          <title>Fashion Illustrator</title>
        </Head>
        
        {/* Site Logo */}
        <div className="p-8">
          <Image
            src="/logo.png" // Update with your logo image path
            alt="Site Logo"
            width={170}
            height={170}
          />
        </div>
        <div className="p-6 bg-stone-950 rounded-2xl bg-opacity-70 shadow-md">
          <p className="text-lg font-mono mb-1">
            Describe your sketch, be as detailed as you'd like!
          </p>

        <form className="bg-colo p-2 rounded-lg" onSubmit={handleSubmit}>
          <input
            type="text"
            name="prompt"
            placeholder="Enter a description here"
            className="w-full font-mono bg-black px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="mt-4 p-2 font-mono px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700"
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
            <p className="text-green-600 font-mono">Status: {prediction.status}</p>
            {/* Reload Button */}
            <button
              className="absolute top-5 right-5 font-mono bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700"
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
