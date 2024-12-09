import React, { useState } from "react";
import Headlines from "./LandingPage/Headlines";
import CallToAction from "./LandingPage/CallToAction";
import Products from "./LandingPage/Products";
import Category from "../../components/Ebooks/Category";
import Recommended from "./LandingPage/Recommended";

function Ebooks() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div>
      <Headlines />
      <Recommended />
      <Category onCategorySelect={setSelectedCategory} />
      <Products selectedCategory={selectedCategory} />
      <CallToAction />
    </div>
  );
}

export default Ebooks;
