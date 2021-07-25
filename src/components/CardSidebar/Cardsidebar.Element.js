import styled from 'styled-components'

export const CardSidebarWrapper = styled.aside`
    position: fixed;
    z-index: 999;
    width: 550px;
    height: 100%;
    background: #f2f2ef;
    display: grid;
    align-items: center;
    top: 0;
    transition: 0.3s ease-in-out;
    right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};
    @media screen and (max-width: 400px){
        width: 100%;
    }
`