import Link from "next/link";

async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

async function CardPokemon({ url }) {
    const dataPokemon = await getData(url);
    const imagePokemon = dataPokemon.sprites.front_default;
    // console.log();

    return (
        <Link href={`info/${dataPokemon.id}`} target="_blank">
            <div className="cardPokemon">
                <div>
                    <img src={imagePokemon} alt="Spiderman" />
                </div>
                <h1>{dataPokemon.name}</h1>
                <p>{dataPokemon.id}</p>
            </div>
        </Link>
    );
}

export default CardPokemon;