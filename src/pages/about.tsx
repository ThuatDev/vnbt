// pages/about.tsx
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">This is the about page content.</p>
      </main>

      <Footer />
    </div>
  );
}

export default About;
