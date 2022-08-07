import styled from "styled-components";

export const AvatarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    width: 28px;
    height: 28px;

    gap: 10px;

    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;

    background-color: #FF6B00;

    border-radius: 100px;
`

export const Avatar = () => {
    return (
        <AvatarWrapper>
            J
        </AvatarWrapper>
    )
}

export default Avatar