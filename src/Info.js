export default function Info({ recipe }) {
  if (!recipe) {
    return <p>Enter a drink name to see the recipe.</p>;
  }

  if (recipe.error) {
    return <p>{recipe.error}</p>;
  }

  return (
    <div>
      <img
        src="https://img.freepik.com/free-vector/set-vector-illustration-stemware_1441-39.jpg?t=st=1727992392~exp=1727995992~hmac=32953ce8ef83d4f32c531b641dab475af25223267180f63806849468beeeda44&w=1380"
        alt="Cocktail image"
        className="cocktail-image"
      />
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
