import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <main>
      <Head>
        <title>Hulu Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://th.bing.com/th/id/R.626b81de74b59c3fa7d96f73ac6b96c4?rik=2D08zbkWQnkybg&riu=http%3a%2f%2ffindicons.com%2ffiles%2ficons%2f1253%2fflurry_extras%2f128%2fhulu.png&ehk=TxQE3G6dKBcgIAOrCksBt%2fJbfpE%2b7q0X5kGbKFOdt2o%3d&risl=&pid=ImgRaw&r=0" />
      </Head>
      <Header />
      <Nav />
      <div>
        <Results results={results} />
      </div>
    </main>
  );
};

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}/`).then((res) => res.json());
  return {
    props: {
      results: request.results,
    },
  };
};