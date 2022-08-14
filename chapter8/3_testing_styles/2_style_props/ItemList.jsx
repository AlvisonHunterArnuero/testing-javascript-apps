import React from "react";
import { Transition } from "react-spring/renderprops";

export const generateItemText = (itemName, quantity) => {
  const capitalizedItemName =
    itemName.charAt(0).toUpperCase() + itemName.slice(1);
  return `${capitalizedItemName} - Quantity: ${quantity}`;
};

const almostOutOfStock = {
  fontWeight: "bold",
  color: "red"
};

export const ItemList = ({ itemList }) => {
  const items = Object.entries(itemList);

  return (
    <ul>
      <Transition
        items={items}
        initial={null}
        keys={([itemName]) => itemName}
        from={{ fontSize: 0, opacity: 0 }}
        enter={{ fontSize: 18, opacity: 1 }}
        leave={{ fontSize: 0, opacity: 0 }}
      >
        {([itemName, quantity]) => styleProps => (
          <li
            key={itemName}
            className={quantity < 5 ? "almost-out-of-stock" : null}
            style={
              quantity < 5 ? { ...styleProps, ...almostOutOfStock } : styleProps
            }
          >
            {generateItemText(itemName, quantity)}
          </li>
        )}
      </Transition>
    </ul>
  );
};
