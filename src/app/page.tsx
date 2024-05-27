import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <div className="flex space-x-4 p-4">
        <Link href="/alone-traveler">Solo cyclist</Link>
        <Link href="group-bike-tours">Group-join</Link>
        <Link href="/tailor-make-quote">Customize your own</Link>
        <Link href="/travel-inquiry">Send an inquiry</Link>
        <Link href="/visa">Visa services</Link>
        <Link href="https://xedapvietnam.com.vn/" target="_blank">Bike shop & rent</Link>
      </div>
      <Footer />
    </div>
  );
}
