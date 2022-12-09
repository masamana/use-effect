import { useEffect, useState } from "react";
import CocktailDetail from "./CocktailDetail";
const CocktailRandom = () => {

    const [cocktailRandom, setCocktailRandom] = useState(null);

    const fetchRandomCocktail = async () => {
      const cocktailRandomResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const cocktailRandom = await cocktailRandomResponse.json();
      setCocktailRandom(cocktailRandom.drinks[0]);
      
    }
  
    return (
    <>
      <button onClick={fetchRandomCocktail}>Afficher une recette aléatoire</button>
        <div className="random">
            {cocktailRandom &&
            <CocktailDetail cocktail={cocktailRandom}/>
            }
        </div>
    </>
    )
}

export default CocktailRandom;

