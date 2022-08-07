import styled from "styled-components";

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const FooterOption = styled.div`
    width: 100%;
    padding: 10px;

    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;

    border-radius: 4px;

    transition: all ease-in-out .25s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:not(:first-child) {
        margin-left: 10px;
    }

    ${
        ({ active }) => active
            ? 'background-color: #FF6B00; color: #FFFFFF;'
            : ''
    }
`

const Footer = ({ options, selected, onTabClick }) => {
    return (
        <FooterWrapper>
            {
                options.map((option, index) => {
                    return (
                        <FooterOption
                            key={option}
                            active={index === selected}
                            onClick={() => onTabClick(index)}
                        >
                            {option}
                        </FooterOption>
                    )
                })
            }
        </FooterWrapper>
    )
}

export default Footer