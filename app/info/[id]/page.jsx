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
    const numbers = [0, 1, 2, 3, 4, 5];

    return (
        <div className={pokeStyle.body_box}>
            <div className={pokeStyle.box}>
                <div className={pokeStyle.boxData}>
                    <h1>{data.name}</h1>
                    <p>Base experience: {data.base_experience}</p>
                    <p>Type: {data.types[0].type.name}</p>
                    <p>Height: {data.height}</p>

                    <h4>Stats Base:</h4>
                    {numbers.map((p) => (
                        <p key={p}><span className={pokeStyle.stats}>{data.stats[p].stat.name}</span>: {data.stats[p].base_stat}</p>
                    ))}
                </div>
                <div className={pokeStyle.boxImg}>
                    <img className={pokeStyle.sprite} src={data.sprites.front_default} alt="Front_default" />
                    <img className={pokeStyle.sprite} src={data.sprites.front_shiny} alt="Front_shiny" />
                </div>
            </div>
        </div>

    );
}

export default page;