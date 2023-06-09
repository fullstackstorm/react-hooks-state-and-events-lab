import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState(false);

  function handleAdd(){
    setCart((inCart) => !inCart);
  }

  const cartState = inCart ? "in-cart" : "";
  const cartText = inCart ? "Remove From Cart" : "Add to Cart";
  const buttonClass = inCart ? "remove" : "add";

  return (
    <li className={cartState}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleAdd}>{cartText}</button>
    </li>
  );
}

export default Item;
