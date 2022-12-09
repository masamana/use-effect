import CocktailList from "./CocktailList";
import CocktailRandom from "./CocktailRandom";
import SearchCocktails from "./SearchCocktails";

function App() {
  return (
    <main>
    <SearchCocktails />
    <CocktailRandom />
    <CocktailList />
    </main>
   
  )
}

export default App;

// EXO : 
// - créez un bouton qui affiche une recette aléatoire
// -- créez le jsx du btn
// -- créez l'event listenner
// -- console.log dans l'event listener pour vérifier le click
// -- dans l'event listener, faire un appel fetch vers l'url qui affiche une recette aléatoire (https://www.thecocktaildb.com/api/json/v1/1/random.php)
// -- stockez la recette récupérées dans le state
// -- affichez les dans votre jsx (uniquement si elle est dispo)