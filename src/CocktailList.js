// EXO : 
// -refactoriser votre composant app, pour créer deux composants : un composant CocktailList et un composant CocktailDetail
// le composant app appelle CocktailList. Ce composant fait la boucle sur tous les cocktails et pour chaque cocktail appelle le composant CocktailDetail qui affiche les infos du cocktail
import CocktailDetail from "./CocktailDetail";
import { useState } from "react";
import { useEffect } from "react";

const CocktailList = () => {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
      (async() => {
        const cocktailsResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
        const cocktailsData = await cocktailsResponse.json();
        setCocktails(cocktailsData.drinks);
      })();
  
    },[]);

    return (
        <section>
            {cocktails.map((cocktail) => {
          return (
              <CocktailDetail cocktail={cocktail} />
          ) 
          })}
        </section>
        

)}

export default CocktailList;

