import styled from "styled-components";

export const Wrapper = styled.div`
    width: 300px;
    height: auto;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    padding: 24px;
    text-align: center;


    p{ 
        font-family: Inter, sans-serif;
    }

`

export const WrapperProdutos = styled.div`
    display:flex;
    gap: 30px;
    
`;

export const ProductImg = styled.img`
    width: 240px;
    height: 240px;
`;

export const Pricecolor = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    color: #DA4B4F;
`;

export const Icon = styled.img`
    width: 30px;
    height: 30px;
    padding: 5px;
    position: absolute;
    border:2px solid #000;
    border-radius: 50%;

    :hover{
        background: #FEE5EC;
    }

`;
