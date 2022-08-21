import styled from "styled-components"

import { theme } from "../../styles";

const NotFounWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 80px);
    width: 100%;
    background-color: var(--main-background);
`

const ContentWrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;

    padding-bottom: 80px;
    @media screen and (max-width: ${theme.breakpoint}px) {
        width: 100%;
        align-items: center;
        flex-direction: column;
    }
`

const ImageWrapper = styled.div`
    width: 50%;
    height: 50%;
    padding: 20px;

    @media screen and (max-width: ${theme.breakpoint}px) {
        width: 70%;
        padding: 0px;
        padding-bottom: 20px;
    }
`

const Pongo = styled.img`
    width: 100%;

    /* filter: invert(56%) sepia(11%) saturate(1568%) hue-rotate(153deg) brightness(88%) contrast(86%); */
`

export default function NotFound () {
    return (
        <NotFounWrapper>
            <ContentWrapper>
                <ImageWrapper>
                    <Pongo src={require('../../images/pongo.png')} />
                </ImageWrapper>
            </ContentWrapper>
        </NotFounWrapper>
    )
}