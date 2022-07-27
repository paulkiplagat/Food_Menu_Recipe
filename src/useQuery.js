import { useState, useEffect } from "react";

const apiKey = 'c937d25df9db46c089240ddb5e6f3021'

function useQuery() {
  const [category, setCategory] = useState("burger");
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${category}&number=100`)
      .then((r) => r.json())
      .then((food) => {
        setFood(food.results);
      });
  }, [category]);

  return {
    food: food,
    setCategory
  };
}

export default useQuery;