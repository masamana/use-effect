import { useState } from "react";
import CocktailDetail from "./CocktailDetail";
import Header from "./Header";

const SearchCocktails = () => {

    const [cocktailsFound, setCocktailsFound] = useState([]);

    const searchCocktails = async (event) => {
        event.preventDefault();
    
    const searchCocktailsValue = event.target.search.value;
    const url = "http://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchCocktailsValue ;
    
    const searchCocktailsResponse = await fetch(url);
    const cocktails = await searchCocktailsResponse.json();

    setCocktailsFound(cocktails.drinks);
    
    }
    return (
        <>
        <Header searchCocktails={searchCocktails} />
        <section id="search">
            {cocktailsFound.map((cocktail) => {
                return( 
                    <CocktailDetail cocktail={cocktail} />
                )
            })}
        </section>
        </>
    )
}

export default SearchCocktails;


