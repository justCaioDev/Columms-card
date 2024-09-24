import styled from "styled-components";

const PreviewCardContainer = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1000px;

    overflow: hidden;
    border-radius: 8px;
    background-color: white;

    @media screen and (max-width: 1075px) {
        flex-direction: column;
    }
`

export default PreviewCardContainer