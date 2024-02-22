import React from 'react';
import './profile.css'

let array_list = [
    {
        name_pokemon: "Bulbasaur",
        power_pokemon: "1.200",
        description_pokemon: "Bulbasaur es una especie de Pokémon de tipo Planta/Veneno en la franquicia Pokémon de Nintendo y Game Freak. Diseñado por Atsuko Nishida, Bulbasaur debutó en Pocket Monsters: Red and Green como Pokémon inicial.",
        image_pokemon: "https://i.gifer.com/WnES.gif"
    },
    {
        name_pokemon: "Squirtle",
        power_pokemon: "1.200",
        description_pokemon: "Squirtle, conocido como Zenigame en Japón, es una especie de Pokémon de la franquicia Pokémon de Nintendo y Game Freak. Fue diseñado por Atsuko Nishida. Su nombre fue cambiado de Zenigame a Squirtle durante la localización al inglés de la serie para darle un 'nombre inteligente y descriptivo'",
        image_pokemon: "https://66.media.tumblr.com/tumblr_ma4ft6OXxw1rfjowdo1_500.gif"
    },
    {
        name_pokemon: "Charmander",
        power_pokemon: "1.200",
        description_pokemon: "Charmander es un pequeño lagarto bípedo. Sus características de fuego son resaltadas por su color de piel anaranjado y su cola con la punta envuelta en llamas. Charmander, como sus evoluciones Charmeleon y Charizard, tiene una pequeña llama en la punta de su cola. La intensidad con la que esta arde es un indicador del estado físico y emocional de este Pokémon.",
        image_pokemon: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/863c9b87-3863-4765-a0c8-497029c51638/deihf3l-aa45f160-1037-46a9-85b3-cd27417a006d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg2M2M5Yjg3LTM4NjMtNDc2NS1hMGM4LTQ5NzAyOWM1MTYzOFwvZGVpaGYzbC1hYTQ1ZjE2MC0xMDM3LTQ2YTktODViMy1jZDI3NDE3YTAwNmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.AKPGHj5lsI3SEVEyw0SXQ0ATxiIROsLm2GHO-dDu4gc"
    }
];

function Profile() {
    return(
        <div className="container-div">
        {array_list.map((item) => (
          <div className="container-pokemon">
            <img className='image-pokemon' src={item.image_pokemon} alt={item.name_pokemon}/>
            <p className='name-pokemon'>{item.name_pokemon}</p>
            <p className='power-pokemon'>{item.power_pokemon}</p>
            <p className='description-pokemon'>{item.description_pokemon}</p> 
          </div>
        ))}
      </div>
    )
}

export default Profile;