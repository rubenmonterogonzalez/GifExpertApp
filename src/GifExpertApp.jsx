import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["The Simpsons"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      <div>
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </div>
    </>
  );
};

export default GifExpertApp;
