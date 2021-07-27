import React, { useState } from "react";
import { CardSidebar, ProductGrid, TopNav, TopSection } from "../../components";

const ProductPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const onAddToCart = (cart) => {
    const exist = cartItems.find((x) => x.id === cart?.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === cart?.id ? { ...exist, qty: exist.qty + 1} : x
        )
      );
    } else {
      toggle();
      setCartItems([...cartItems, { ...cart, qty: 1 }]);
    }
  };

  const onRemoveFromCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product?.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div>
      <TopNav toggle={toggle} countCartItems={cartItems.length} />
      <CardSidebar
      onRemoveFromCart={onRemoveFromCart}
        onAddToCart={onAddToCart}
        cartItems={cartItems}
        isOpen={isOpen}
        toggle={toggle}
      />
      <TopSection />
      <ProductGrid
        onAddToCart={onAddToCart}
        toggle={toggle}
      />
    </div>
  );
};

export default ProductPage;
