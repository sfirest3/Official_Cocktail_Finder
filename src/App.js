import { useEffect, useState } from "react";
import "./styles.css";
import Title from "./Title.js";
import Entry from "./Entry.js";
import Info from "./Info.js";

export default function App() {
  const [drinkName, setDrinkName] = useState("");
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (drinkName) {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
        drinkName
      )}`;
      fetch(url)
        .then((r) => r.json())
        .then((r) => {
          if (r.drinks) {
            setRecipe(r.drinks[0]);
          } else {
            setRecipe(null);
          }
        })
        .catch((e) => setRecipe({ error: `Error: ${e}` }));
    }
  }, [drinkName]);

  return (
    <div className="App">
      <Title text="🍸 🍸 🍸Cocktail RECIPES🍸 🍸 🍸" />
      <img
        src="https://img.freepik.com/free-vector/set-vector-illustration-stemware_1441-39.jpg?t=st=1727992392~exp=1727995992~hmac=32953ce8ef83d4f32c531b641dab475af25223267180f63806849468beeeda44&w=1380"
        alt="Cocktail stemware illustration"
        className="cocktail-image"
      />
      <Entry action={setDrinkName} />
      <Info recipe={recipe} />
    </div>
  );
}
