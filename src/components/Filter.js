import React from "react";

function Filter({handleFilter}) {
  return (
    <div>
      <h4> Filter By Food Category </h4>
      <select
        placeholder="categories"
        onChange={handleFilter}
      >
        <option value="burger">burger</option>
        <option value="pasta">pasta</option>
        <option value="noodle">noodle</option>
        <option value="rice">rice</option>
        <option value="salad">salad</option>
        <option value="soup">soup</option>
        <option value="steak">steak</option>
        <option value="dessert">dessert</option>
      </select>
    </div>
  );
}

export default Filter