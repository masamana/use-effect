const CocktailDetail = (props) => {


    const getIngredientsAsArray = (cocktail) => {
        const ingredientsAsArray = [];
            for (let i = 1 ; i <= 20 ; i ++){
                if(cocktail["strIngredient" + i]){
                    ingredientsAsArray.push(cocktail["strIngredient" + i]);
                } 
            }
            
        return ingredientsAsArray;
    }
    
      
    return (
        <article key={props.cocktail.idDrink} className="cocktail-detail">
            <h2>{props.cocktail.strDrink}</h2>
            <img className="img-size" src={props.cocktail.strDrinkThumb} alt={props.cocktail.strDrink}/>
            <p>{props.cocktail.strInstructions}</p>
            <ul>{getIngredientsAsArray(props.cocktail).map((ingredient) => {
                return (
                    <li>{ingredient}</li>
                )
            })}
            </ul>
        </article>
    )
}
    
    

export default CocktailDetail;