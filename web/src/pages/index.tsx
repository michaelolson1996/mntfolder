
import Head from 'next/head';
import RecommendedGraph from '../components/home/recommended/RecommendedGraph';
import Posts from '../components/home/posts/Posts';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mntfolder Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RecommendedGraph />

      <Posts />
    </>
  );
};