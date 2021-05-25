import Pokedex from "./Pokedex"

/**
 * 
 * Pokegame should take your list of 8 pokemon and randomly assign 
 * them into two hands of 4 cards each. It should then render two Pokedex 
 * components, one for each hand.
 */

function Pokegame(props) {

  const { pokemons } = props;

  let handOne = [];
  let handTwo = [];
  let handOneTotalEXP = 0;
  let handTwoTotalEXP = 0;
  let handOneWins;
  let handTwoWins;

  for (let i = 0; i < 4; i++) {
    let randomIdx = Math.floor(Math.random() * pokemons.length);
    handOne.push(pokemons[randomIdx]);
    handOneTotalEXP += pokemons[randomIdx].base_experience;
  }

  for (let i = 0; i < 4; i++) {
    let randomIdx = Math.floor(Math.random() * pokemons.length);
    handTwo.push(pokemons[randomIdx]);
    handTwoTotalEXP += pokemons[randomIdx].base_experience;
  }

  handOneWins = (handOneTotalEXP > handTwoTotalEXP) ? true : false;
  handTwoWins = (handOneTotalEXP < handTwoTotalEXP) ? true : false;

  let handOnePokedex = <Pokedex pokemons={handOne}
    total_exp={handOneTotalEXP}
    isWinner={handOneWins} />;
  let handTwoPokedex = <Pokedex pokemons={handTwo}
    total_exp={handTwoTotalEXP}
    isWinner={handTwoWins} />;


  return (
    <div>
      <h2>Hand One</h2>
      <h3>Total EXP: {handOneTotalEXP}</h3>
      <br />
      {handOnePokedex}
      {handOneWins ? "This hand wins!" : ""}
      <br />
      <h2>Hand Two</h2>
      <h3>Total EXP: {handTwoTotalEXP}</h3>
      <br />
      {handTwoPokedex}
      {handTwoWins ? "This hand wins!" : ""}
    </div>
  )

}

Pokegame.defaultProps = {
  pokemons:
    [{ id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
    { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }]
};

export default Pokegame;