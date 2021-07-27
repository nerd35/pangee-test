import React, { useState, useEffect } from "react";
import { CardSidebar, ProductGrid, TopNav, TopSection } from "../../components";

import { gql, useQuery } from "@apollo/client";

export const QUERY_LIST_OF_PRODUCTS = gql`
query($currency: Currency){
    products {
      id
      title
      image_url
      price(currency: $currency)
    }
    
  __type(name: "Currency") {
      name
      enumValues {
        name
      }
    }
  }
`;

const ProductPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [currency, setCurrency] = useState([]);
  const [singlecur, setSinglecur] = useState("USD")
  const [products, setProducts] = useState([])
  const { data, loading, error } = useQuery(QUERY_LIST_OF_PRODUCTS, {
    variables: {currency: singlecur}
  });

  
   useEffect(() => {
     if(data){
      setProducts(data?.products)
      setCurrency(data?.__type.enumValues)

    }
   }, [data])

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

  const getCarts = (carts) => {
     return carts.map(c => {
      products.map((p) => {
          if(c.id === p.id ){
            c.price = p.price
          }
      })
      return c
    })
  }


  const getCurrency = (val) => {
setSinglecur(val)
  }
  return (
    <div>
      <TopNav toggle={toggle} countCartItems={cartItems.length} />
      <CardSidebar
        onRemoveFromCart={onRemoveFromCart}
        onAddToCart={onAddToCart}
        cartItems={getCarts(cartItems)}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        currency={currency}
        getCurrency={getCurrency}
        singlecur={singlecur}
        toggle={toggle}
      />
      <TopSection />
      <ProductGrid
        onAddToCart={onAddToCart}
        toggle={toggle}
        singlecur={singlecur}
        products={products}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default ProductPage;
