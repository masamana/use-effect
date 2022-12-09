const Header = (props) => {
    return(
        <form onSubmit={props.searchCocktails}>
            <label>Rechercher</label>
            <input type="text" name="search"></input>
            <input type="submit"></input>
        </form>
    )
}

export default Header;