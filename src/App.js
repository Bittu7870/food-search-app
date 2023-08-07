import React, { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import FoodCard from "./components/FoodCard";
import Footer from "./components/Footer";

const App = () => {
  const [allFood, setAllFood] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const APP_ID = "79d4711d";
  const APP_KEY = "59585a9fefaf8a92988b6b88d85c435f";

  const fetchFood = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`,
      );
      const data = await response.json();
      console.log(data);
      setAllFood(data.hits);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Header />
      <Search search={search} setSearch={setSearch} fetchFood={fetchFood} />
      <FoodCard allFood={allFood} loading={loading} />
      <Footer />
    </div>
  );
};

export default App;
