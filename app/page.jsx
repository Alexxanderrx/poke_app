"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react';
// "use client";
import CardPokemon from "@/components/CardPokemon";


async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export default async function Home() {
  const data = await getData("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
  const firstData = data.results;

  return (
    <div id='contenedor_prin'>
      <nav id="navBar">
        <img src='./International_Pokémon_logo.png' alt='pokemon_logo' style={{ width: "200px" }} />
      </nav>

      <div id="contenedor">
        {firstData.map((el, i) => (
          <CardPokemon key={i} url={el.url} />
        ))}
      </div>
    </div>
  );
}
