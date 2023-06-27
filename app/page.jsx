import Image from 'next/image'
import styles from './page.module.css'
// "use client";
import CardPokemon from "@/components/CardPokemon";

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export default async function Home() {
  const data = await getData("https://pokeapi.co/api/v2/pokemon?limit=20");
  const firstData = data.results;
  return (
    <div id="contenedor">
      {firstData.map((el, i) => (
        <CardPokemon key={i} url={el.url} />
      ))}
    </div>
    // <main className={styles.main}>
    //   <div className={styles.description}>

    // {/* <Image
    //   src="/vercel.svg"
    //   alt="Vercel Logo"
    //   className={styles.vercelLogo}
    //   width={100}
    //   height={24}
    //   priority
    // /> */}


    //   </div>
    // </main>
  )
}
