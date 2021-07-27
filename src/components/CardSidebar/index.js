import React from "react";
import {
  CardSidebarWrapper,
  CartTopContainer,
  CartTitle,
  CartIconDiv,
  CartIconBack,
  SelectDiv,
  CartListContainer,
  CartItemSection,
  CartItemWrapper,
  CartItemTitle,
  CartActionSection,
  CartQtySelector,
  CartItemAmout,
} from "./Cardsidebar.Element";


// import { gql, useQuery } from "@apollo/client";

// export const QUERY_LIST_OF_CURRENCY = gql`
//   {
//   __type(name: "Currency") {
//       name
//       enumValues {
//         name
//       }
//     }
//   }
// `;

const CardSidebar = ({
  isOpen,
  toggle,
  cartItems,
  onAddToCart,
  onRemoveFromCart,
  currency,
  getCurrency,
  singlecur
}) => {

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  // const { data } = useQuery(QUERY_LIST_OF_CURRENCY);
  // const [currency, setCurrency] = useState([]);

  
  //  useEffect(() => {
  //    if(data){
  //     setCurrency(data?.__type.enumValues)
  //   }
  //  }, [data])
  

  getCurrency(singlecur);


  return (
    <CardSidebarWrapper isOpen={isOpen}>
      <CartTopContainer>
        <CartIconDiv onClick={toggle}>
          <CartIconBack />
        </CartIconDiv>

        <CartTitle>Your Cart</CartTitle>
      </CartTopContainer>
      <SelectDiv>
        <select
        onChange={(e) => getCurrency(e.target.value)}
        // value={value}
          style={{ width: "80px", border: "none", height: "40px" }}
        >
          {  currency.map(c => (
            <option  key={c.name} value={c.name}>{c.name}</option>
          ))}
        </select>
      </SelectDiv>
      <div>
        {cartItems.length === 0 && (
          <div
            style={{ textAlign: "center", fontSize: "18px", fontWeight: "500", padding: '15px' }}
          >
            Your Cart Is Empty
          </div>
        )}

        {cartItems.map((item) => (
          <CartListContainer key={item.id}>
            <CartItemWrapper>
              <CartItemSection>
                <CartItemTitle>{item.title}</CartItemTitle>
                <CartActionSection>
                  <CartQtySelector onClick={() => onRemoveFromCart(item)}>
                    -
                  </CartQtySelector>
                  <cartQtyFigure>{item.qty} </cartQtyFigure>
                  <CartQtySelector onClick={() => onAddToCart(item)}>
                    +
                  </CartQtySelector>
                </CartActionSection>
              </CartItemSection>
              <CartItemSection>
                <img
                  src={item.image_url}
                  alt="productimg"
                  style={{
                    width: "auto",
                    height: "80px",
                    overflow: "hidden",
                    objectFit: "contain",
                    paddingRight: "20px",
                  }}
                />
              </CartItemSection>
              <CartItemSection>
                <CartItemAmout>{singlecur} {(item.price * item.qty).toFixed(2)}</CartItemAmout>
              </CartItemSection>
            </CartItemWrapper>
          </CartListContainer>
        ))}
        <div
          style={{
            position: "fixed",
            bottom: "50px",
            width: "510px",
            height: "80px",
            borderTop: "1px solid #d0d0d0",
            boxShadow: "0 -4px 12px rgb(0 0 0 / 15%)",
            zIndex: 1,
          }}
        >
          {cartItems.length !== 0 && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <div>SubTotal</div>
              <div>{itemsPrice.toFixed(2)}</div>
            </div>
          )}
        </div>
      </div>
    </CardSidebarWrapper>
  );
};

export default CardSidebar;
