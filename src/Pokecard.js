import "./Pokecard.css";

/**
 * Shows a single Pokemon,
 * with their name, image, and type
 * 
 * Accepts props
 * => {id, name, type, base_experience}
 * 
 * returns card JSX for each provided pokemon
 */

const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard(props) {
  const { id, name, type, base_experience } = props;

  let image = `${BASE_URL}/${id}.png`;

  return (
    <div className="Pokecard">
      {name}
      <br />
      <img src={image} />
      <br />
            Type: {type}
      <br />
            EXP: {base_experience}
    </div>
  );
}

export default Pokecard;