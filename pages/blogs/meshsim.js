import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import "../../styles/globals.css";
import { useRouter } from "next/router";
import { Analytics } from '@vercel/analytics/react';

// Article Content for RREQ Mesh Network
const articleContent = {
  title: 'Simulating a Mesh Network with RREQ Route Discovery Protocol',
  content: `
    <p><strong>Mesh networks play a vital role in environments where traditional network infrastructure is unavailable or difficult to implement. One such example is underground mines where reliable communication is essential.</strong></p>
    
    <p>To better understand how these networks operate, I simulated a multi-node mesh network using MATLAB, where I implemented a basic <strong>RREQ (Route Request) discovery protocol</strong>.</p>
    
    <div class="flex justify-center mb-6">
      <img src="/MeshNetwork1.png" alt="Mesh Network Layout" class="rounded-xl" width="800" height="570"/>
    </div>

    <p>The simulation allows customization of the network size and the number of nodes. Nodes are randomly generated within a specified area, and connections between nodes are made at random with the following constraints:</p>
    
    <ul class="list-disc pl-6">
      <li>No duplicate connections allowed.</li>
      <li>Every node must have at least one connection.</li>
    </ul>

    <p>The connections between the nodes are stored in a matrix, where each entry indicates whether a specific pair of nodes is connected.</p>

    <div class="flex justify-center mb-6">
      <img src="/MeshNetwork2.png" alt="Mesh Network Layout" class="rounded-xl" width="800" height="570"/>
    </div>
    
    <p>The RREQ discovery protocol is implemented as a <strong>recursive function</strong>. When a node wants to send a message to a destination, it calls this function on all its neighbors (nodes connected to it). Each neighbor then calls this function on its own neighbors. This process continues until the destination is found or all paths are explored.</p>
    
    <p>What’s great about the RREQ protocol is its adaptability to network changes, and it operates with minimal computational overhead, making it suitable for dynamic environments.</p>
    
    <p>The video below is the RREQ protocol in operation.</p>

    <div class="flex justify-center mb-6">
      <img src="/MeshRREQ.gif" alt="Mesh Network Layout" class="rounded-xl" width="400" height="200"/>
    </div>
    
    <p>In the future, I plan to compare the RREQ protocol with other proactive and reactive routing protocols to assess its performance in various scenarios.</p>
    
    <p>To stay updated on this research and article, <a href="/" class="text-blue-500 hover:underline">subscribe to my newsletter</a>!</p>
  `
};

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;  // slug will hold the article identifier

  return (
    <div className="w-full bg-gradient-to-b from-black via-black to-gray-900 p-8 mb-8 rounded-lg mt-20">
      <Head>
          <title>DTB Insights</title>
      </Head>
      {/* Site banner */}
      <div className="w-screen">
        <Link href="/" legacyBehavior>
          <a>
            <Image
              className="top-3 left-3 absolute"
              src="/LogoDTB.png" // Replace with actual image path
              alt="Site Logo"
              width={150}
              height={70}
            />
          </a>
        </Link>

        <Link href="/#bottom" legacyBehavior>
          <a className="font-bold text-sm bg-gradient-to-r from-gray-900 to-emerald-900 absolute top-5 right-3 p-2 rounded-3xl opacity-80">
            Get in touch →
          </a>
        </Link>
      </div>

      {/* Blog Post Content */}
      <h1 className="text-white text-4xl font-bold mb-6 text-center">{articleContent.title}</h1>

      <div className="space-y-6 text-gray-200 text-lg p-10" dangerouslySetInnerHTML={{ __html: articleContent.content }} />

      {/* Back to Blog Link */}
      <div className="mt-8 text-center">
        <Link legacyBehavior href="/blog">
          <a className="text-sm font-semibold text-white bg-gradient-to-r from-gray-900 to-emerald-900 p-2 rounded-3xl hover:bg-gray-800 transition">
            ← Back to Blog
          </a>
        </Link>
      </div>

      {/* Analytics */}
      <Analytics />
    </div>
  );
}
