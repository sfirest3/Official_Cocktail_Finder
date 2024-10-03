export default function Info({ recipe }) {
  if (!recipe) {
    return <p>Enter a drink name to see the recipe.</p>;
  }

  if (recipe.error) {
    return <p>{recipe.error}</p>;
  }

  return (
    <div>
      <h2>{recipe.strDrink}</h2>
      <img src={recipe.strDrinkThumb} alt={`${recipe.strDrink} cocktail`} />
      <h3>Ingredients</h3>
      <ul>
        {Array.from({ length: 15 }, (_, i) => {
          const ingredient = recipe[`strIngredient${i + 1}`];
          const measure = recipe[`strMeasure${i + 1}`];
          return ingredient ? (
            <li key={i}>
              {measure} {ingredient}
            </li>
          ) : null;
        })}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.strInstructions}</p>
    </div>
  );
}
