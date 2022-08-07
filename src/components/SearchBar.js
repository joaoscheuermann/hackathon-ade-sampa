import styled from "styled-components";

import Avatar from "./Avatar";

export const SearchBarWrapper = styled.div`
    display: flex;
    padding: 10px 16px;

    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;

    > input {
        width: 100%;
        border: none;
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
`

export const SearchBar = ({ placeholder, onChange, value }) => {
    return (
        <SearchBarWrapper>
            <input
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            <Avatar />
        </SearchBarWrapper>
    )
}

export default SearchBar