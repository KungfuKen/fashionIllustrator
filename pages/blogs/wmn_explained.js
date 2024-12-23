import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import "../../styles/globals.css";
import { useRouter } from "next/router";
import { Analytics } from '@vercel/analytics/react';

// Article Content for Wireless Mesh Networks
const articleContent = {
  title: 'A Complete and Concise Guide to Wireless Mesh Networks',
  content: `
     <div class="flex justify-center mb-16">
      <img src="/Wireless Networks.png" alt="Mesh Network Layout" class="rounded-xl" width="800" height="570"/>
    </div>

    <p><strong>A Wireless Mesh Network (WMN) is a network where all (or most) devices are connected to each other. Essentially, each device (cell phone, traffic light, laptop, car, sensor etc.) in a mesh network serves as a mini-cell tower or router, wirelessly routing and repeating signals received.</strong></p>

     <div class="flex justify-center mb-6">
      <img src="/RoutingImage.avif" alt="Mesh Network Layout" class="rounded-xl" width="600" height="570"/>
    </div>

    <p>WMNs have been adopted because they are a cost-effective and highly reliable coverage solution. They have the ability to self-configure and self-organize. Thus, they maintain high reliability. They can use alternate pathways and channels to overcome interference.</p>

    <p>Mesh-like networks are widely used in applications such as emergency and military operations, Voice over IP (VoIP) protocols, and Internet of Things (IoT) solutions. They are also key to unlocking future value chains in cutting-edge industries like Industrial Internet of Things (IIoT).</p>

    <p>Through the use of <strong>Wireless Sensor Networks (WSNs)</strong>, real-world data can be gathered in IIoT settings to drive higher efficiencies and streamline business practices. IIoT applications often use WMNs to monitor machinery, track inventory, and ensure safety.</p>

    <p>However, with so many protocols and technologies, understanding the entire WMN landscape can be confusing. This article aims to clarify the WMN landscape.</p>

    <h2 class="text-2xl font-semibold mt-8">WMN Architectures</h2>
    <p>The main architectures used by mesh networks are <strong>Infrastructure Mesh</strong>, <strong>Client Mesh</strong>, and <strong>Hybrid Mesh</strong>. Each is better suited to specific environments and use cases.</p>

    <h3 class="text-xl font-semibold mt-6">1. Infrastructure Mesh</h3>
    <p>In an <strong>Infrastructure Mesh</strong>, mesh routers are connected to each other, while client devices (e.g., phones, computers, IoT sensors) are passive. This means they are connected to the routers but do not forward data.</p>

     <div class="flex justify-center mb-6">
      <img src="/InfrastructureMesh.png" alt="Mesh Network Layout" class="rounded-xl" width="600" height="570"/>
    </div>

    <ul class="list-disc pl-6">
      <li><strong>Pros:</strong> <br /> Scalable, reliable, and centralized management.</li>
      <li><strong>Cons:</strong> <br /> High initial cost and clients are passive.</li>
    </ul>

    <h3 class="text-xl font-semibold mt-6">2. Client Mesh</h3>
    <p>In a <strong>Client Mesh</strong>, client nodes are connected in a peer-to-peer configuration and can route data to each other. Each node can act as a routing node to forward data.</p>

     <div class="flex justify-center mb-6">
      <img src="/ClientMesh.png" alt="Mesh Network Layout" class="rounded-xl" width="800" height="570"/>
    </div>

    <ul class="list-disc pl-6">
      <li><strong>Pros:</strong> <br /> Flexible, resilient, and low deployment costs.</li>
      <li><strong>Cons:</strong> <br /> Power constraints and lower performance under heavy load.</li>
    </ul>

    <h3 class="text-xl font-semibold mt-6">3. Hybrid Mesh</h3>
    <p>A <strong>Hybrid Mesh</strong> combines elements of both infrastructure and client WMNs. Fixed nodes provide a stable backbone, while client devices can dynamically extend or enhance the network by relaying traffic.</p>
    
    <div class="flex justify-center mb-6">
      <img src="/HybridMesh.png" alt="Mesh Network Layout" class="rounded-xl" width="600" height="570"/>
    </div>
    
    <ul class="list-disc pl-6">
      <li><strong>Pros:</strong> <br /> Flexibility with stability and improved scalability.</li>
      <li><strong>Cons:</strong> <br /> Complex management and interoperability challenges.</li>
    </ul>

    <p>Other mesh architectures are typically subcategories of these main architectures. Some important ones include:
      <ul class="list-disc pl-6">
        <li>Mobile Ad-hoc Mesh Networks</li>
        <li>Internet of Things (IoT) Mesh Networks</li>
        <li>Space-Based Mesh Networks</li>
      </ul>
    </p>
        
    <p>Additionally mesh networks topology can either be <strong> fully connected or partially connected </strong>.</p>

    <div class="flex justify-center mb-6">
      <img src="/TopolgyMesh.png" alt="Mesh Network Layout" class="rounded-xl" width="600" height="370"/>
    </div>

    <h2 class="text-2xl font-semibold mt-8">WMN Protocols</h2>
    <p>There are two categories of WMN protocols: <strong>Reactive</strong> and <strong>Proactive</strong>.</p>

    <ul class="list-disc pl-6">
      <li><strong>Reactive protocols:</strong> Nodes are not aware of the network topology. A routing table is constructed on-demand.</li>
      <li><strong>Proactive protocols:</strong> All nodes know how to reach other nodes. Each node has a routing table containing the entire network topology.</li>
    </ul>

    <p>Some protocols implement features from both reactive and proactive protocols, resulting in <strong>Hybrid protocols</strong>.</p>

    <h2 class="text-2xl font-semibold mt-8">Protocols in Common WMN Use Cases</h2>

    <h3 class="text-xl font-semibold mt-6">1. Smart Home Automation (IoT)</h3>
    <p>For smart home automation, WMNs focus on low-power, reliable, and secure communications between devices.</p>
    
    <div class="flex justify-center mb-6">
      <img src="/smart-home.png" alt="Mesh Network Layout" class="rounded-xl" width="400" height="370"/>
    </div>
    
    <ul class="list-disc pl-6">
      <li><strong>Zigbee:</strong> Low-power, mesh-based protocol providing robust communication for smart home devices like lights and sensors.</li>
      <li><strong>Thread:</strong> IP-based mesh protocol that is secure and scalable.</li>
      <li><strong>Bluetooth Mesh:</strong> Low-power, scalable mesh network for home automation, providing reliable communication over short to medium distances.</li>
    </ul>

    <h3 class="text-xl font-semibold mt-6">2. Industrial IoT (IIoT) and Automation</h3>
    <p>In IIoT, WMNs must support high reliability, scalability, and real-time communication for asset tracking, environmental monitoring, and automation.</p>
    
    <div class="flex justify-center mb-6">
      <img src="/industrial-iot.png" alt="Mesh Network Layout" class="rounded-xl" width="400" height="370"/>
    </div>
    
    <ul class="list-disc pl-6">
      <li><strong>Zigbee:</strong> Reliable and suitable for industrial sensors and monitoring systems.</li>
      <li><strong>Thread:</strong> Ideal for industrial automation and asset management.</li>
      <li><strong>6LoWPAN:</strong> IPv6 over low-power wireless personal area networks, enabling seamless integration of industrial IoT devices into a larger network.</li>
    </ul>

    <h3 class="text-xl font-semibold mt-6">3. Emergency Networks</h3>
    <p>In emergency situations, WMNs need to provide resilient, decentralized, and long-range communication.</p>
    
    <div class="flex justify-center mb-6">
      <img src="/Emergency-Networks.png" alt="Mesh Network Layout" class="rounded-xl" width="400" height="370"/>
    </div>

    <ul class="list-disc pl-6">
      <li><strong>BATMAN, OLSR:</strong> Self-healing, decentralized, and dynamic protocols, ideal for post-disaster recovery and emergency communication where centralized infrastructure is down.</li>
      <li><strong>Zigbee:</strong> For basic communication and sensor networks.</li>
      <li><strong>Wi-Fi Mesh (IEEE 802.11s):</strong> Offers high data throughput with self-healing capabilities, useful for temporary emergency communication networks in localized areas.</li>
    </ul>

    <h3 class="text-xl font-semibold mt-6">4. Urban Wireless Networks</h3>
    <p>In urban environments, WMNs need to handle large amounts of traffic and provide wireless internet access to densely populated areas.</p>
   
    <div class="flex justify-center mb-6">
      <img src="/UrbanNetworks.png" alt="Mesh Network Layout" class="rounded-xl" width="400" height="370"/>
    </div>

    <ul class="list-disc pl-6">
      <li><strong>Wi-Fi Mesh (IEEE 802.11s):</strong> Extends Wi-Fi coverage across a wide area with multiple access points, providing high-speed internet for urban environments.</li>
      <li><strong>5G Mesh Networks:</strong> High-capacity, low-latency, mesh-based network using 5G technology to enable seamless communication and IoT connectivity in smart cities.</li>
      <li><strong>LoRaWAN (with mesh support):</strong> A low-power, long-range network with mesh capabilities for urban IoT applications.</li>
    </ul>

    <h3 class="text-xl font-semibold mt-6">5. Rural Area Connectivity</h3>
    <p>In rural areas, WMNs are used to provide affordable, reliable, and wide-area coverage, ensuring connectivity in areas with limited infrastructure.</p>
    
    <div class="flex justify-center mb-6">
      <img src="/RuralConnectivity.png" alt="Mesh Network Layout" class="rounded-xl" width="400" height="370"/>
    </div>

    <ul class="list-disc pl-6">
      <li><strong>Wi-Fi Mesh (IEEE 802.11s):</strong> Extends wireless internet coverage over long distances in rural areas.</li>
      <li><strong>LoRaWAN:</strong> A low-power, long-range wireless technology suitable for rural IoT applications.</li>
    </ul>

    <h2 class="text-2xl font-semibold mt-8">Conclusion</h2>
    <p>I hope this article has clarified the mesh networking landscape and made selecting the correct Wireless Mesh Network technology easier based on your needs.</p>

    <p><a href="/" class="text-blue-500 hover:underline">Subscribe to my newsletter</a> to stay updated on more articles and research!</p>
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
      <h1 className="text-white text-4xl font-bold mb-4 text-center">{articleContent.title}</h1>

      <div className="space-y-6 text-gray-200 text-lg pl-20 pr-20 pb-20 pt-10 ml-20 mr-20" dangerouslySetInnerHTML={{ __html: articleContent.content }} />

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
