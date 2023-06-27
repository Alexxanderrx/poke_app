"use client"
import React from "react";
import { useState } from "react";
import pokeStyle from './page.module.css'
async function getData(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    return data;
}

// async function bigImg(x) {
//     x.style.height = "64px";
//     x.style.width = "64px";
// }


async function page({ params }) {
    const [isShown, setIsShown] = useState(false);

    const data = await getData(params.id);
    console.log(data);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "100vh",

            }}
        >

            <h1>Name: {data.name}</h1>
            <p>Base experience: {data.base_experience}</p>
            <p>Type: {data.types[0].type.name}</p>
            <div onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)} style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "50vh",
                    width: "500px",
                    backgroundColor: "white"
                }}>
                <img src={data.sprites.front_default} alt="Front" />
                <img src={data.sprites.back_default} alt="Back" />
                {/* {isShown && (
                    <div>
                        I'll appear when you hover over the button.
                    </div>
                )} */}
                {isShown == false ?
                    <img src={data.sprites.front_default} alt="Front" /> : <img src={data.sprites.back_default} alt="Back" />

                }
            </div>
        </div>
    );
}

export default page;