
import Head from 'next/head';
import MUESDeployableApp from '../components/MUESDeployableApp';

export default function Home() {
  return (
    <>
      <Head>
        <title>M.U.E.S. — Meta Universal Equality Scale</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-[#141414] min-h-screen">
        <MUESDeployableApp />
      </main>
    </>
  );
}
