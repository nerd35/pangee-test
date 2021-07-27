import styled from "styled-components";
import { FiArrowRightCircle } from "react-icons/fi";

export const Background = styled.div`
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.8);
position: fixed;
display: flex;
justify-content: right;
`

export const CardSidebarWrapper = styled.aside`
  position: relative;
  z-index: 999;
  width: 550px;
  height: 100%;
  background: #f2f2ef;
  padding: 15px;
  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1120px")};
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const CartTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CartTitle = styled.h5`
  color: #696969;
  font-weight: 400;
  font-family: "Roboto", san-serif !important;
  letter-spacing: 1px;
  font-style: normal;
  font-size: 10px;
  text-align: center;
  margin-bottom: 0;
  line-height: 1.2;
  margin-left: 40%;
`;

export const CartIconDiv = styled.div`
  cursor: pointer;
  color: rgb(198, 204, 199);
`;

export const CartIconBack = styled(FiArrowRightCircle)`
  font-size: 20px;
  cursor: pointer;
`;

export const SelectDiv = styled.div`
  margin-top: 20px;
  width: 100px;
  margin-bottom: 15px;
`;
export const CartItemList = styled.select``;

export const CartListContainer = styled.div`
  width: 510px;
  height: 135px;
  background: #fff;
  justify-content: space-between;
  padding: 15px;
`;

export const CartItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const CartItemSection = styled.div`
`;

export const CartItemTitle = styled.h5`
  color: #1e2d2b;
  margin-bottom: 0;
  font-size: 13px;
  letter-spacing: 0.03px;
  padding: 0;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  line-height: 1.5;
`;

export const CartActionSection = styled.div`
border: .5px solid #bcbcbc;
padding: 7px;
width: 76px; 
display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: 20px;
`

export const CartQtySelector = styled.span`  
cursor: pointer;
color: #000;
font-size: 15px;
`
export const cartQtyFigure = styled.span`
padding: 0 10px;
font-size: 13px;
`

export const CartItemAmout = styled.h4`
text-align: center;
    padding: 0 10px;
    width: inherit;
    font-size: 13px;
    letter-spacing: .03px;
`
