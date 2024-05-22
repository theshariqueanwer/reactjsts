import React, { useEffect, useState } from "react";
import Meal from "./Meal";
import useHttp from "./hooks/useHttp";
import Loading from "./Loading";
import Error from "./Error";

const requestConfigObject = {};

function Meals() {
  // const [meals, setMeals] = useState([]);

  // useEffect(() => {
  //   async function fetchMeals() {
  //     const response = await fetch('http://localhost:3000/meals');
  //     if (!response.ok) {
  //       //...
  //     }
  //     const meals = await response.json();
  //   //   console.log(meals);
  //     setMeals(meals);
  //   }

  //   fetchMeals();
  // }, []);

  const {
    loading,
    error,
    data: meals,
    // } = useHttp("http://localhost:3000/meals", {}, []);
  } = useHttp("http://localhost:3000/meals", requestConfigObject, []);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (loading) {
  //   return <p className="center">Loading...</p>;
  // }

  // if (loading) {
  //   return <p className="center">Fetching Meals...</p>;
  // }

  if (loading) {
    return <Loading message="Fetching Meals" loading="Loading..." />;
  }

  // if (error) {
  //   return <p>{error}</p>;
  // }

  if (error) {
    return <Error title="Failed to fetch meals." message={error} />;
  }

  // if (!data) {
  //   return <p>No meals found.</p>;
  // }

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <Meal key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}

export default Meals;
