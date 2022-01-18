import React from "react";
import ItemCard from "./ItemCard";

export default function ItemList({ items }) {
  return (
    <div className="grid grid-cols-12 gap-8">
      {items.map((item, i) => (
        <ItemCard key={item.id} item={item} isFirst={i === 0} />
      ))}
    </div>
  );
}
