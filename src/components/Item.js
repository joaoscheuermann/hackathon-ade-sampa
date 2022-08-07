import styled from "styled-components";

export const ItemWrapper = styled.div`
    display: flex;
    width: 100%;

    > :not(:first-child) {
        margin-left: 12px;
    }
`

export const ItemTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0;
`

export const ItemTextTitle = styled.div`
    font-size: 14px;
    line-height: 21px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
`

export const ItemTextDescription = styled.div`
    font-size: 14px;
    line-height: 18px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
`

export const ItemImage = styled.img`
    background-color: rgba(0,0,0,0.05);
    width: 80px;
    height: 80px;
    border-radius: 4px;
    border: 1px solid transparent;
    object-fit: cover;
`

const Item = ({ src, title, description, price, onClick }) => {
    return (
        <ItemWrapper onClick={onClick}>
            <ItemImage src={src} />
            <ItemTextWrapper>
                <ItemTextTitle>
                    { title }
                </ItemTextTitle>
                <ItemTextDescription>
                    { description }
                </ItemTextDescription>
                <ItemTextTitle>
                    {
                        price && price.length
                        ? `R$ ${price}`
                        : 'A definir'
                    }
                </ItemTextTitle>
            </ItemTextWrapper>
        </ItemWrapper>
    )
}

export default Item