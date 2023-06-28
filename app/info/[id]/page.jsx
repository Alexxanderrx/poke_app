"use client"
import React from "react";
import { useState } from "react";
import pokeStyle from './page.module.css'
async function getData(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    return data;
}

async function page({ params }) {

    const data = await getData(params.id);
    console.log(data);
    const numStats = [0, 1, 2, 3, 4, 5];
    let tipo = data.types[0].type.name;
    console.log(tipo);
    console.log(typeof (tipo));
    let colorType = "gray";
    //falta merjorar
    //considerar que los poke tiene mas de un tipo
    //usar el array de tipos
    tipo == "grass" ? colorType = "green" : colorType;
    tipo == "fire" ? colorType = "red" : colorType;
    tipo == "water" ? colorType = "blue" : colorType;
    tipo == "bug" ? colorType = "brown" : colorType;
    tipo == "poison" ? colorType = "purple" : colorType;
    tipo == "electric" ? colorType = "yellow" : colorType;

    return (
        <div className={pokeStyle.body_box}>
            <div className={pokeStyle.box} style={{ borderColor: `${colorType}` }}>
                <div className={pokeStyle.boxData}>
                    <h1>{data.name}</h1>
                    <p>Base experience: {data.base_experience}</p>
                    <p>Type: {data.types[0].type.name}</p>
                    <p>Height: {data.height}</p>

                    <h4>Stats Base:</h4>
                    {numStats.map((p) => (
                        <p key={p}><span className={pokeStyle.stats}>{data.stats[p].stat.name}</span>: {data.stats[p].base_stat}</p>
                    ))}
                </div>
                <div className={pokeStyle.boxImg}>
                    <img className={pokeStyle.sprite} src={data.sprites.front_default} alt="Front_default" />
                    <img className={pokeStyle.sprite} src={data.sprites.front_shiny} alt="Front_shiny" />
                </div>
            </div>
        </div >

    );
}

export default page;