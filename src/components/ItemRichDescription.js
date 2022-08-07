import styled from "styled-components";

import Icon from '@mdi/react'
import { mdiArrowLeft  } from '@mdi/js'

export const ItemRichDescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100vw;
    height: 100vh;

    background: white;
`

export const ItemRichDescriptionHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 14px 10px;
`

export const ItemRichDescriptionImage = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
`

export const ItemRichDescriptionTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    height: 100%;

    > * {
        margin-top: 10px;
    }
`

export const ItemRichDescriptionTitle = styled.div`
    font-size: 20px;
    line-height: 22px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
`

export const ItemRichDescriptionDescription = styled.div`
    font-size: 18px;
    line-height: 22px;
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
`

export const ItemRichDescriptionButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`

export const ItemRichDescriptionButton = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    width: 100%;
    color: white;
    background: black;
    font-size: 16px;
    line-height: 18px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    border-radius: 4px;
`

const ItemRichDescription = ({ onClose, item }) => {
    return (
        <ItemRichDescriptionWrapper>
            <ItemRichDescriptionHeaderWrapper>
                <Icon
                    size={1}
                    path={mdiArrowLeft}
                    onClick={onClose}
                />
            </ItemRichDescriptionHeaderWrapper>
            <ItemRichDescriptionImage
                src={item.src}
            />
            <ItemRichDescriptionTextWrapper>
                <ItemRichDescriptionTitle>
                    {item.title}
                </ItemRichDescriptionTitle>
                <ItemRichDescriptionDescription>
                    {item.description}
                </ItemRichDescriptionDescription>
                <ItemRichDescriptionTitle>
                    {
                        item.price && item.price.length
                            ? `R$ ${item.price}`
                            : 'A definir'
                    }
                </ItemRichDescriptionTitle>
            </ItemRichDescriptionTextWrapper>
            <ItemRichDescriptionButtonWrapper>
                <ItemRichDescriptionButton
                    onClick={() => {
                        window.open('https://www.google.com/maps/place/')
                    }}
                >
                    Chegar até lá!
                </ItemRichDescriptionButton>
            </ItemRichDescriptionButtonWrapper>
        </ItemRichDescriptionWrapper>
    )
}

export default ItemRichDescription
